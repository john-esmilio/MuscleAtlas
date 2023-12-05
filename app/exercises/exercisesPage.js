"use client"
import React, { useState, useEffect } from 'react';

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('name');

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetch('/api/route');
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchExerciseData();
  }, []);

  useEffect(() => {
    let result = exercises;

    if (searchTerm) {
      result = result.filter(exercise =>
        exercise.muscle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    result = result.sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortKey === 'nameDesc') {
        return b.name.localeCompare(a.name);
      } else if (sortKey === 'difficulty') {
        return a.difficulty.localeCompare(b.difficulty);
      } else if (sortKey === 'difficultyDesc') {
        return b.difficulty.localeCompare(a.difficulty);
      }
      return 0;
    });
  
    setFilteredExercises(result);
  }, [searchTerm, exercises, sortKey]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return null;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by muscle group"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border px-4 py-2.5 rounded ml-4"
      />
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className="border px-2 ml-1 py-2.5 rounded"
      >
        <option value="name">Sort: Name Ascending</option>
        <option value="nameDesc">Sort: Name Descending</option>
        <option value="difficulty">Sort: Difficulty Ascending</option>
        <option value="difficultyDesc">Sort: Difficulty Descending</option>
      </select>

      <div className="px-4 py-2 rounded ">
        {filteredExercises.map((exercise, index) => (
          <div key={index} className="my-2 p-2 border-b">
            <p className="text-lg font-bold">{exercise.name}</p>
            <p>Type: {exercise.type}</p>
            <p>Muscle: {exercise.muscle}</p>
            <p>Difficulty: {exercise.difficulty}</p>
            <p>Equipment: {exercise.equipment}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesPage;
