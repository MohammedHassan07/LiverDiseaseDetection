import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

os.environ["GOOGLE_API_KEY"] = api_key

llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash")

def get_liver_health_advice(probability):
   
    prompt = (
        "You are a helpful medical assistant that gives liver health tips to users "
        "based on the probability score of liver disease. Suggest foods, exercises, "
        "and a diet plan to stay healthy.\n\n"
        f"The probability of liver disease is {round(probability, 2)}%. "
        "Provide personalized advice for this case."
    )

    response = llm.invoke(prompt)
    return response.content
