# Fitness Tracker
A simple and attractive fitness tracker application built with React, TypeScript, and Vite. This project demonstrates CRUD (Create, Read, Update, Delete) operations using a mock backend powered by JSON Server.

## Overview

<img width="1166" alt="Screenshot 2025-02-11 at 5 17 28 am" src="https://github.com/user-attachments/assets/4ba0a9a1-7fa2-478f-81d5-37f3c783a9d0" />

### Explanation of the Diagram
#### 1. Frontend (React + Vite)
- **Components**:
  - `AddWorkout.tsx`: Form to add a new workout.
  - `WorkoutList.tsx`: Displays a list of all workouts.
  - `WorkoutItem.tsx`: Displays details of a single workout.
- **Functionality**:
  - Fetches data from the backend (JSON Server) using Axios.
  - Sends data to the backend for adding or deleting workouts.

#### 2. Backend (JSON Server)
- **API Endpoints**:
  - `GET /workouts`: Fetches all workouts.
  - `POST /workouts`: Adds a new workout.
  - `DELETE /workouts/:id`: Deletes a workout by ID.
- **Role**:
  - Acts as a mock REST API for CRUD operations.
  - Reads from and writes to the `db.json` file.

#### 3. Database (db.json)
- **Data Structure**:
  - Stores workout data in JSON format.

### Data Flow
- **Fetch Workouts**:
  - Frontend sends a `GET` request to `/workouts`.
  - Backend reads data from `db.json` and returns it to the frontend.
- **Add Workout**:
  - Frontend sends a `POST` request to `/workouts` with the new workout data.
  - Backend writes the new workout to `db.json`.
- **Delete Workout**:
  - Frontend sends a `DELETE` request to `/workouts/:id`.
  - Backend removes the workout from `db.json`.


## Features
- **Add Workouts**: Easily add new workouts with details like name, duration, and calories burned.
- **View Workouts**: Display a list of all workouts with their details.
- **Delete Workouts**: Remove workouts you no longer need.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Mock Backend**: Uses JSON Server to simulate a REST API for CRUD operations.

# Technologies Used
- **Frontend**:
  - React
  - TypeScript
  - Vite (for fast development and builds)
  - Axios (for API requests)
- **Backend**:
  - JSON Server (mock REST API)
- **Styling**:
  - Basic CSS (can be extended with libraries like TailwindCSS or Material-UI)

# Setup Instructions
## 1. Prerequisites
- **Node.js**: Ensure you have Node.js installed (v18.x or higher).
- **npm**: npm is bundled with Node.js.

## 2. Clone the Repository
- Clone this repository to your local machine:
```
git clone https://github.com/MenakaGodakanda/fitness-tracker.git
cd fitness-tracker
```
- Following command used to create the Vite project with React and Typescript:
```
npm create vite@latest
```

## 3. Install dependencies:
- Install the required dependencies:
```
npm install
```
- Install Axios for API requests and JSON Server for the mock backend:
```
npm install axios
npm install json-server --save-dev
```

## 4. Set up the mock backend:
- Create a `db.json` file in the root directory (if not already present):
```
{
  "workouts": []
}
```

- Start the JSON Server:
```
npm run server
```

- This will run the mock backend at `http://localhost:3001`.

## 5. Start the development server:
```
npm run dev
```

- This will start the Vite development server at `http://localhost:5173`.

## 6. Open the application:
- Visit `http://localhost:5173` in your browser to view the Fitness Tracker app.

## How to Use the App 🖱️
### 1. Add a Workout:
- Fill out the form with the workout name, duration, and calories burned.
- Click **"Add Workout"** to save the workout.

### 2. View Workouts:
- All added workouts will be displayed in a list below the form.

### 3. Delete a Workout:
- Click the **"Delete"** button next to a workout to remove it from the list.

## Project Structure
```
fitness-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── AddWorkout.tsx
│   │   ├── WorkoutList.tsx
│   │   └── WorkoutItem.tsx
│   ├── types/
│   │   └── Workout.ts
│   ├── api/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── db.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## License
This project is licensed under the MIT License.
