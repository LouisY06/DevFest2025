'''
Testing for Groq OpenAI
'''
import os
import openai
from groq import Groq

client = openai.OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.environ.get("GROQ_API_KEY")
)
# client = Groq(
#     api_key=os.environ.get("GROQ_API_KEY"),
# )



chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Am I talking to ChatGPT or Llama?",
        }
    ],
    model="llama-3.3-70b-versatile",
)

print(chat_completion.choices[0].message.content)