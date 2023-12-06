"use client";
import React, { useState, useEffect } from "react";
/**
 * 
 * @Author: Ace Manuyag
 * @Date: 2023-12-05
 * @Description: This component renders a list of exercises. 
 * It fetches the exercise data from a server on component mount and displays it in a grid.
 *  Each card shows the exercise name, target muscle group, and instructions.
 */
const ExercisePrograms = () => {
 /*
  *`exercises` holds the array of exercise data, `setExercises` is the function to update it.
  *`loading` is a boolean to indicate if the data is being fetched, `setLoading` is used to update it.
  *`error` holds the error message if the fetch fails, `setError` is used to update it.
  */
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // `useEffect` is used to fetch exercise data from the server when the component mounts.
  // The empty array means this effect runs once after the first render.
  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        // Fetch data from the `/api/route` endpoint.
        const response = await fetch("/api/route");
        if (!response.ok) {
          // If the response is not OK (200), throw an error.
          throw new Error("Data could not be fetched!");
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseData();
  }, []);

  // Page rendering based on `loading` and `error` states.
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Rendering the list of exercises using the `.map()` method.
  // The `key` prop is important for helping React identify which items have changed, are added, or are removed.
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Training Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise, index) => (
          // If `exercise.id` is available, use that instead of `index`.
          <div key={exercise.id || index} className="my-2 p-2 border-b">
            <p className="text-lg font-bold">{exercise.name}</p>
            <p>Target Muscle: {exercise.muscle}</p>
            <p>Instructions: {exercise.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisePrograms;
