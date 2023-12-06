import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// route.ts is a route that returns a list of exercises from the API
// https://rapidapi.com/api-ninjas/api/exercises-by-api-ninjas
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const options = {
                method: 'GET',
                url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
                headers: {
                    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
                }
            };
            // make the request
            const response = await axios.request(options);
            res.status(200).json(response.data);
            // catch any errors
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
