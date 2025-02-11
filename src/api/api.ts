import axios from 'axios';

const API_URL = 'http://localhost:3001/workouts';

export const getWorkouts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addWorkout = async (workout: Workout) => {
  const response = await axios.post(API_URL, workout);
  return response.data;
};

export const updateWorkout = async (id: number, workout: Workout) => {
  const response = await axios.put(`${API_URL}/${id}`, workout);
  return response.data;
};

export const deleteWorkout = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
