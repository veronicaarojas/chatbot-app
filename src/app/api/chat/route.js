import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
  try {
    const { body } = req;

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/chat/completions',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
      },
      data : body
    };

    const response = await axios.request(config);

  

    const data = response.data;
    return new NextResponse.json(data), {
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return new NextResponse('An error occurred while fetching data.', {
      status: 500,
    });
  }
}