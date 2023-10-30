import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/repords.json");
let data = fs.readFileSync(filePath);

export const getAll = (request, res) => {
  res.status(200).json(JSON.parse(data));
};

export const getById = (request, res) => {
  let parsedData = JSON.parse(data);
  let id = request.params.id;
  const repordById = parsedData.find((item) => item.id == id);
  console.log(repordById);
  res.status(200).json({ ...repordById });
};

export const newRepord = (request, res) => {
  let parsedData = JSON.parse(data);
  let newRec = {
    id: parsedData.length + 1,
    ...request.body,
  };
  parsedData.unshift(newRec);
  let modData = JSON.stringify(parsedData);
  fs.writeFileSync(filePath, modData, (err) => {
    if (err) throw err;
    console.log(err);
  });
  res.status(201).json(JSON.parse(data));
};
