import { connect } from "@planetscale/database";
 
const config = {
  // database: process.env.DATABASE,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
 
export async function getUsers() {
  const conn = connect(config);
  const { rows } = await conn.execute("SELECT * FROM users;");
  return rows;
}
