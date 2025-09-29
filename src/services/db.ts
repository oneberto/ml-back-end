import * as path from "path";
import * as fs from "fs/promises";
import { DataBase } from "../types";

export const getDataBase = async () => {
  const filePath = path.join(__dirname, "../db.json");

  const fileContentBuffer = await fs.readFile(filePath);

  const fileContentString = fileContentBuffer.toString("utf-8");

  const responseJson: DataBase = JSON.parse(fileContentString);

  return responseJson;
};
