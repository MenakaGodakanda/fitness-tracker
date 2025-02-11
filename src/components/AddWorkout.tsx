import React, { useState } from 'react';
import { Workout } from '../types/Workout';
import { addWorkout } from '../api/api';

const AddWorkout: React.FC = () => {
  const [workout, setWorkout] = useState<Workout>({ name: '', duration: 0, caloriesBurned: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addWorkout(workout);
    setWorkout({ name: '', duration: 0, caloriesBurned: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout Name"
        value={workout.name}
        onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={workout.duration}
        onChange={(e) => setWorkout({ ...workout, duration: +e.target.value })}
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={workout.caloriesBurned}
        onChange={(e) => setWorkout({ ...workout, caloriesBurned: +e.target.value })}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default AddWorkout;
