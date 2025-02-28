# CDP Support Chatbot

This is a chatbot that answers "how-to" questions related to four Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. It extracts relevant information from the official documentation of these CDPs to guide users on how to perform tasks or achieve specific outcomes within each platform.

---

## Features

1. **Answer "How-to" Questions**:
   - The chatbot can understand and respond to user questions about how to perform specific tasks or use features within each CDP.
   - Example questions:
     - "How do I set up a new source in Segment?"
     - "How can I create a user profile in mParticle?"
     - "How do I build an audience segment in Lytics?"
     - "How can I integrate my data with Zeotap?"

2. **Extract Information from Documentation**:
   - The chatbot retrieves relevant information from the provided documentation to answer user questions.

3. **Handle Variations in Questions**:
   - The chatbot can handle variations in question phrasing and terminology.

---

## Tech Stack

### Frontend
- **React.js**: For building the chatbot UI.

### Backend
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating RESTful APIs.
- **Cheerio**: For scraping documentation.

---

## How to Run

### Prerequisites
1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
2. **npm**: npm is installed automatically with Node.js.

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rydhamGEU/cdp-support-chatbot.git
   cd cdp-support-chatbot
Set Up the Backend:

Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Start the backend server:
node index.js
The backend will run on http://localhost:5000.

Set Up the Frontend:

Open a new terminal and navigate to the frontend folder:
cd ../frontend


Install dependencies:
npm install

Start the frontend development server:
npm start
The frontend will run on http://localhost:3000.

Test the Application:

Open your browser and go to http://localhost:3000.

Type a question and see the chatbot's response.

Folder Structure

cdp-support-chatbot/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
└── README.md
Code Quality and Maintainability
Modular Code: The code is organized into reusable components.

Error Handling: Basic error handling is implemented in the backend APIs.

Comments: The code is well-commented for better understanding.

Bonus Features 
Cross-CDP Comparisons: Compare functionalities of the four CDPs based on user queries.

Advanced "How-to" Questions: Handle complex queries by breaking them down into smaller steps.
