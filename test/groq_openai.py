import os
import openai

client = openai.OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.environ.get("GROQ_API_KEY")
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "What LLM are you?",
        }
    ],
    model="deepseek-r1-distill-llama-70b"
)

print(chat_completion.choices[0].message.content)

