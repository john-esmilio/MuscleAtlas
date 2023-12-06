"use client"
import React, { useState, useEffect } from 'react';

/**
 * @Author: John, Ronaldo
 * @Date: 2023-12-05
 * @Description: This component renders a list of exercises. 
 * It fetches the exercise data from a server on component mount and displays it on the page.
 * Each card shows the exercise name, type of lift, muscle group, difficulty, and equipment needed.
 * The user can also search for exercises by muscle group and sort by name or difficulty.
 */
const ExercisesPage = () => {
  // State hooks to store the exercises data and related UI control states.
  const [exercises, setExercises] = useState([]); // Stores the fetched exercises.
  const [filteredExercises, setFilteredExercises] = useState([]); // Stores the result of search and sorting.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Stores the current value of the search input.
  const [sortKey, setSortKey] = useState('name'); // Stores the selected sorting method.

  // Fetches data when the component mounts and sets the exercises state.
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

   // Filters and sorts the exercises data whenever the search term or sort key changes.
  useEffect(() => {
    let result = exercises;

    if (searchTerm) {
      result = result.filter(exercise =>
        exercise.muscle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Sort exercises based on the selected sort key.
    // The `localeCompare()` method is used to sort strings in alphabetical order.
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
  
    setFilteredExercises(result);  // Update the filteredExercises with the filtered and sorted data.
  }, [searchTerm, exercises, sortKey]);

    // Event handler for changes in the search input.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // If the data is still loading, display nothing.
  // If there is an error, display the error message.
  if (loading) return null;
  if (error) return <div>Error: {error}</div>;

  /*
    Render the UI of the exercises page.
    The search input and sort select elements are rendered at the top of the page.
    The exercises are rendered in a list below the search and sort elements.
    Each exercise is rendered in a card with the exercise name, type of lift, muscle group, difficulty, and equipment needed.
   */
  return (
    <div className="container mx-auto p-4">
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
