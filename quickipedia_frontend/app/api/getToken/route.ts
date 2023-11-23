import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(
   
  req: NextApiRequest,
  res: NextApiResponse
) { if (req.method === 'GET') {
  try {
    const { accessToken } = await getAccessToken(req, res);
    res.status(200).json({ accessToken });
  } catch (error: any) {
    res.status(error.status || 500).end(error.message);
  }
}}
);