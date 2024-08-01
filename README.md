# Estro Tech Robotics Device Analytics

## Project Overview

This project provides APIs for accessing detailed uptime and analytical data reports for a device. The data is stored in MongoDB, and the application is built using Node.js, Express, and Mongoose.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed locally) or a MongoDB Atlas account

### Installation Steps

1. **Clone the Repository**

   git clone https://github.com/JayaramHarry/Estro-Tech-Robotics-Assignment-.git
   cd estro_tech_robotics_devicse_analytics

2. Install Dependencies
Run the following command to install the necessary npm packages:

npm install

3. Set Up the Database

If using a local MongoDB instance, ensure it is running on the default port (27017).

If using MongoDB Atlas, update the connection string in src/index.js with your Atlas credentials:

await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/device-analytics');

4. Start the Server

  npm start

## The server will be running on http://localhost:5000.

### API Endpoints

1. Fetch Uptime Data
Endpoint: GET /api/uptime
Description: Fetch uptime data for a device.

Response:

[
  {
    "_id": "66abc57c33b46096918325c5",
    "deviceId": "device1",
    "data": {
      "timestamp": "2024-08-01T17:27:24.048+00:00"
    },
    "createdAt": "2024-08-01T17:27:24.051+00:00",
    "updatedAt": "2024-08-01T17:27:24.051+00:00",
    "__v": 0
  }
  // more documents...
]

2. Fetch Analytical Data
Endpoint: GET /api/analytics
Description: Fetch analytical data aggregated by hour and day.

Response:

{
  "hourly": [
    { "hour": "2024-08-01T00:00:00Z", "value": 123 },
    // more hourly data...
  ],
  "daily": [
    { "day": "2024-08-01", "total": 456 },
    // more daily data...
  ]
}

3. Combined Report
Endpoint: GET /api/report
Description: Get a combined report of uptime and analytical data.

Response:

{
  "uptime": [ /* uptime data */ ],
  "analytics": { /* analytical data */ }
}

## API Testing with Postman
1. Download and Install Postman

Download Postman from here.
Install Postman on your system.

2. Import Postman Collection

Export the Collection: Create a Postman collection for your API and export it as a JSON file.

Include in Repository: Add the exported Postman collection file to your GitHub repository (e.g., postman/collection.json).

git add postman/collection.json
git commit -m "Add Postman collection for API testing"
git push

3. Using the Collection

Open Postman and click on the "Import" button.
Select the collection.json file from your project directory.
Postman will import the collection with all the defined endpoints.
Use Postman to send requests to your API and check the responses.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or fixes.
