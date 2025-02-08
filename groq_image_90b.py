from groq import Groq
import base64
from PIL import Image
import io
import os

###
# If testing functionality, replace URL with URL
# Llama functionality
###

# client = Groq()
# completion = client.chat.completions.create(
#     model="llama-3.2-11b-vision-preview",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "What's in this image?"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/LPU-v1-die.jpg"
#                     }
#                 }
#             ]
#         }
#     ],
#     temperature=1,
#     max_completion_tokens=1024,
#     top_p=1,
#     stream=False,
#     stop=None,
# )

optimal_prompt = '''If the food appears oily, increase the calorie count. Alternative food item is significantly different from original food item, and consider vegetarian options. Analyze the provided image and respond ONLY with valid JSON in the following format, with no additional text or explanation. If the food item is fried chicken, give an explanation for the calorie count. Only respond in JSON Format:

{
  "main_food_items": [
    {
      "name": "food item name",
      "alternative": "alternative food item",
      "calories": calorie count
    }
  ],
  "total_calories": total calorie count
}
'''


# Function to encode the image
def encode_image(image_path: str) -> str:
    """Open the image, resize to 1120×1120, convert to RGB, and return base64-encoded JPEG."""
    with Image.open(image_path) as img:
        # Resize to 1120 x 1120
        img_resized = img.resize((1120, 1120))

        # Convert to RGB if it has an alpha channel (e.g. RGBA mode)
        if img_resized.mode == "RGBA":
            img_resized = img_resized.convert("RGB")

        # Save to in-memory buffer as JPEG
        buffer = io.BytesIO()
        img_resized.save(buffer, format="JPEG")
        buffer.seek(0)

        # Convert to base64 string
        img_str = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return img_str

def get_image_description(image_url: str, local: bool) -> str:
    client = Groq()
    if local:
       base64_image = encode_image(image_url)
    if local:
        completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": optimal_prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}",
                            },
                        },
                    ],
                }
            ],
            temperature=0,
            max_completion_tokens=800,
            top_p=1,
            stream=False,
            stop=None,

            model="llama-3.2-90b-vision-preview",
        )
    else:
        completion = client.chat.completions.create(
            model="llama-3.2-90b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Give the calorie amount of the food image."},
                        {"type": "image_url", "image_url": {"url": image_url}}
                    ]
                }
            ],
            temperature=0,
            max_completion_tokens=1024,
            top_p=0,
            stream=False,
            stop=None,
        )
    return completion.choices[0].message

if __name__ == "__main__":

    ### REPLACE WITH TEST IMAGE ####


    test_url = "/Users/davidli/DevFest2025/images/Eggplant-Parmesan-7-scaled.jpg"

    result_message = get_image_description(test_url, local=True)

    print(result_message.content)

    print("Running test cases")

    folder_path = "/Users/davidli/DevFest2025/test_images"
    file_names = os.listdir(folder_path)
    image_paths = [
        os.path.abspath(os.path.join(folder_path, f))
        for f in file_names
        if os.path.isfile(os.path.join(folder_path, f))  # only include files
    ]
    for path in image_paths:
        result_message = get_image_description(path, local=True)
        print(result_message.content)


