import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return res.status(200).json({
      items: ['sadasdasd', 'dasdasd', 'dasdasdasd'],
    });
  } else {
    throw new Error('Method not allowed');
  }
}
