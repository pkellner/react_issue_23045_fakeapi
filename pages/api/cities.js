import cityData from "./cityData";

export default async function handler(req, res) {
  await new Promise((r) => setTimeout(r, 4000));
  res.status(200).json(cityData);
}
