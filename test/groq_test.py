'''
Testing for Groq API
'''

import os

from groq import Groq

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "What are you",
        }
    ],
    model="deepseek-r1-distill-llama-70b",
)

print(chat_completion.choices[0].message.content)

