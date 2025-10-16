Crop Recommendation System
--------------------------
A full-stack web application that recommends suitable crops based on soil properties and environmental conditions using machine learning.

Project Structure
-----------------

Crop-Recomendation-FSD/                                                                                                                                                                                                                             
├── farmmate/                 # Frontend Application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/                  # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   ├── pom.xml
│   └── target/
├── .gitignore
└── README.md

Technologies Used
-----------------

Frontend
-------
React.js

HTML5

CSS3

JavaScript (ES6+)

Axios for API calls

Backend
--------

Spring Boot

Java 17

Maven

Machine Learning Model (Random Forest Classifier)

REST API

Machine Learning
-----------------
Python (for model training)

Scikit-learn

Pandas, NumPy

Joblib for model serialization

Features
----------
Crop recommendation based on soil parameters

Real-time prediction using trained ML model

Responsive web interface

RESTful API architecture

Easy-to-use input form for farmers

Input Parameters
----------------
The system takes the following parameters for crop prediction:

Nitrogen (N) content in soil

Phosphorus (P) content in soil

Potassium (K) content in soil

Temperature (in Celsius)

Humidity (in percentage)

pH value of soil

Rainfall (in mm)

Installation and Setup
----------------------
*************
Prerequisites
*************

Node.js (for frontend)

Java 17 or higher

Maven 3.6+

Git

Backend Setup
Navigate to backend directory:

bash
cd backend
Build the project:

bash
mvn clean install
Run the application:

bash
mvn spring-boot:run
The backend server will start on http://localhost:8080

Frontend Setup
Navigate to frontend directory:

bash
cd farmmate
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
The frontend application will open on http://localhost:3000

API Endpoints
Crop Prediction
URL: /api/predict

Method: POST
--------------

Content-Type: application/json

Request Body:

json
{
  "nitrogen": 90,
  "phosphorus": 45,
  "potassium": 40,
  "temperature": 25.5,
  "humidity": 82,
  "ph": 6.2,
  "rainfall": 220
}
Response:

json
{
  "predicted_crop": "Rice",
  "confidence": 0.85,
  "message": "Recommended crop: Rice"
}
Machine Learning Model
The system uses a Random Forest Classifier trained on agricultural data. The model considers seven features to predict the most suitable crop from multiple options including:

Rice

Wheat

Maize

Cotton

Sugarcane

and more...

Development
Backend Development
The Spring Boot application follows MVC architecture

Controller: CropPredictionController

Service: CropPredictionService

Model: Prediction request/response DTOs

Frontend Development
React components for UI

Axios for HTTP requests

Form validation and error handling

Responsive design

Configuration
Backend Configuration
Server port: 8080

CORS enabled for frontend integration

ML model loaded at application startup

Frontend Configuration
API base URL: http://localhost:8080

Development server: 3000

Build for Production
Backend
bash
cd backend
mvn clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
Frontend
bash
cd farmmate
npm run build
Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Create a Pull Request



Support
-------
For support and queries, please contact the development team or create an issue in the repository mail :-  madhusekhar852@gmail.com.

Acknowledgments
Agricultural datasets providers

Spring Boot and React.js communities

Machine learning libraries and tools

