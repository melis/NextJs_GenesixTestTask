// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import articles from "./data";
export default (req, res) => {
  res.status(200).json({ articles });
};
