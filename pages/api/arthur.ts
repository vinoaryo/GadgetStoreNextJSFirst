// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    datas: [
      [
        { name: "Alice", description: "Software engineer" },
        { name: "Bob", description: "Marketing specialist" },
        { name: "Charlie", description: "Student" },
        { name: "David", description: "Graphic designer" },
      ],
    ],
  });
}
