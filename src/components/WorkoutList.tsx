import React, { useEffect, useState } from 'react';
import { Workout } from '../types/Workout';
import { getWorkouts, deleteWorkout } from '../api/api';
import WorkoutItem from './WorkoutItem';

const WorkoutList: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const data = await getWorkouts();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteWorkout(id);
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div>
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default WorkoutList;
