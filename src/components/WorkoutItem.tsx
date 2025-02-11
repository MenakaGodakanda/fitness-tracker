import React from 'react';
import { Workout } from '../types/Workout';

interface WorkoutItemProps {
  workout: Workout;
  onDelete: (id: number) => void;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout, onDelete }) => {
  return (
    <div>
      <h3>{workout.name}</h3>
      <p>Duration: {workout.duration} minutes</p>
      <p>Calories Burned: {workout.caloriesBurned}</p>
      <button onClick={() => onDelete(workout.id!)}>Delete</button>
    </div>
  );
};

export default WorkoutItem;
