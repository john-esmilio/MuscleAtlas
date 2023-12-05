"use client"

export const fetchExerciseData = async () => {
  const response = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
