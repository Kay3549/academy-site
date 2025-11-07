// lib/db.ts
import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: ".digital", // 내가 설정한 비밀번호
  database: "academy_db",
});
