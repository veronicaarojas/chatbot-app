import axios from "axios";


export async function POST(req) {
  try {
    const { body } = req;
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };

    const response = await axios.post(url, body, { headers: headers });

    return new Response(JSON.stringify(response.data), { // Pass response.data as the body
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` // Set the Content-Type header
      }
    });
  } catch (error) {
    return new Response('Something went wrong', 
    { status: 500 });
  }
}
