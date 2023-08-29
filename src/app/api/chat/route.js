import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
  try {

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    const data = response.data;
    return NextResponse.json(data), {
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return NextResponse('An error occurred while fetching data.', {
      status: 500,
    });
  }
}