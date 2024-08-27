// import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import { API_KEY } from '@env';

// const configuration = new Configuration({
//   apiKey: API_KEY,
// });

// const openai = new OpenAIApi(configuration);

//Function for API CAll, determine whether for text or image generation function
export const apiCall = async (prompt) => {
  try {
    const res = await makeRequestWithRetry(prompt);

    let isImage = res.data.choices[0].message.content.trim();
    if (isImage.toLowerCase().includes('yes')) {
      const responseText = await generateImage(prompt);
      return { role: 'assistant', content: responseText };
    } else {
      const responseText = await generateText(prompt);
      return { role: 'assistant', content: responseText };
    }
  } catch (err) {
    console.error('Error during API call:', err);
    return null;
  }
};

// Function to generate text using ChatGPT
const generateText = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text:', error);
    return 'Sorry, I could not process your request.';
  }
};

// Function to generate an image using DALL-E
const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: prompt,
        n: 1,
        size: '512x512',
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

//Function to Retry when Limits is reached
const makeRequestWithRetry = async (prompt, retries = 3) => {
  try {
    return await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: "user",
            content: `Does this message want to generate an AI picture, image, art, or anything similar? ${prompt} Simply answer with a yes or no.`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err) {
    if (err.response?.status === 429 && retries > 0) {
      console.log(`Rate limit hit. Retrying... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
      return makeRequestWithRetry(prompt, retries - 1);
    }
    throw err;
  }
};