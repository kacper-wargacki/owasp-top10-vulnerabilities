import { Pool } from "pg";

let conn = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "owasp",
  port: 5432,
});

export default conn;
