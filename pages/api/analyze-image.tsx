import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import base64 from 'base64-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { image } = req.body;

    try {
      const imageB64 = base64.fromByteArray(image);
      const headers = {
        Authorization: 'Bearer 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',
        Accept: 'application/json',
      };

      const payload = {
        model: 'meta/llama-3.2-90b-vision-instruct',
        messages: [
          {
            role: 'user',
            content: `What is in this image? <img src="data:image/png;base64,${imageB64}" />`,
          },
        ],
        max_tokens: 512,
        temperature: 1.0,
        top_p: 1.0,
      };

      const response = await axios.post(
        'https://ai.api.nvidia.com/v1/gr/meta/llama-3.2-90b-vision-instruct/chat/completions',
        payload,
        { headers }
      );

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error processing the image' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
