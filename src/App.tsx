import React from 'react';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <AddWorkout />
      <WorkoutList />
    </div>
  );
};

export default App;
