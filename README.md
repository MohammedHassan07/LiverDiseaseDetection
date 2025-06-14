# 📅 Liver Disease Detection

## 📌 Description
Timetable Management System is a web-based application that allows administrators to efficiently generate and manage timetables for teachers. It provides a secure authentication system for admins and teachers and an admin panel to manage timetables dynamically.

## 🚀 Features
- 🛡️ **Secure Authentication & Authorization** (Admin & Teacher Roles)
- 📅 **Automatic Timetable Generation**
- 🏫 **Admin Panel** to manage and update timetables
- 🧑‍🏫 **Teacher Dashboard** for viewing assigned schedules
- 📊 **User-Friendly Interface** built with React and Tailwind CSS

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
- :  
  `http://localhost:5000`


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
[Liver Disease Ditection](http://localhost:5173)
