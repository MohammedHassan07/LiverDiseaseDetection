# 🩺 Liver Disease Detection System

## 📌 Description
This project is a full-stack application designed to **predict liver disease** using patient health data. It uses a machine learning model built in Python and integrates it into a web-based application using **Flask (backend)** and **ReactJS (frontend)**.


## 🚀 Features

- Liver disease prediction using a trained ML/DL model
- REST API built with Flask
- User interface built using React and Tailwind CSS
- Integration of LangChain for model interaction (if applicable)

## 🧠 Skills Required

To understand or contribute to this project, the following skills are helpful:

### 🧑‍💻 Programming & Development
- Python (for ML model and Flask backend)
- JavaScript (for frontend development)
- ReactJS & Tailwind CSS
- REST APIs
- Flask framework

### 📊 Machine Learning & AI
- Data preprocessing
- Building and evaluating ML models (especially ANN)
- Jupyter Notebook usage
- Knowledge of liver-related health metrics (like bilirubin, proteins, etc.)

### 🔧 Tools & Workflow
- Git & GitHub
- Visual Studio Code / Jupyter Notebook
- npm / pip for package management

## 📘 Resources

- **Notebook**: Contains model training, evaluation, and export logic
- **Project Paper**: Includes abstract, problem statement, model design, and results


## 🛠️ Tech Stack

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![LangChain](https://img.shields.io/badge/Langchain-000000?style=for-the-badge&logo=langchain&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


## 📥 Installation and Setup for Backend

Follow these steps to set up and run the project:

### Step 1: Make sure you have Python and VS Code installed in you system
### Step 2: Clone the Repository
```sh
git clone https://github.com/MohammedHassan07/LiverDiseaseDetection.git
cd Liver
```

### Step 3: open the folder in VS code

### Step 4: Goto server LiverBackend, open terminal and create the virtual environment
#### Windows
```sh
# Create virtual environment
python -m venv venv

# Activate (Command Prompt)
venv\Scripts\activate

# OR Activate (PowerShell)
venv\Scripts\Activate.ps1

```

#### Linux / MacOS
```sh
# Create virtual environment
python3 -m venv venv

# Activate
source venv/bin/activate
```

### Step 5: Create .env file in the LiverBakcend directory and copy the contents of .env.sample into .env file

### Step 6: Install all libraries from requirements.txt using the command
```sh
pip install -r requirements.txt
``` 

### Step 7: Run the server using the command

```sh
python app.py 
```

### Step 8: Access the web page
Open the browser and enter the url
- `http://localhost:5000`


## 📥 The Frontend is in ReactJs if you want to Start the development server of ReactJs 
### Step 1: Goto LiverUI folder, open terminal and run the command
```sh
npm install
```
Step 2: Start development server of ReactJS
```sh
npm run dev
```

Step 3: Open you browser and hit the url
http://localhost:5173

## 👨‍💻 Contributors
- [Mohammed Hassan](https://www.linkedin.com/in/mohammed-hassan-343b00215)
- [Abdul Rahman](https://www.linkedin.com/in/abdulrahman0842)
- [Ansari Farzan](https://www.linkedin.com/itachi791)
