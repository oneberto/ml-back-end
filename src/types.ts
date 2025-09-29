import { Request } from "express";
import dbFile from "./db.json";

export type DataBase = typeof dbFile;

export interface RequestBody<T> extends Request {
  body: T;
}
