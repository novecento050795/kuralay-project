import pgPromise from 'pg-promise';
import dotenv from 'dotenv'

dotenv.config()

const pgp = pgPromise({});

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

export function createTable(tableName, fields) {
  
  console.log(`_____${tableName} migrating started!_____`);

  fields = Object.keys(fields)
    .map(fieldName => `${fieldName} ${fields[fieldName]}`)
    .join(', ')

  db.oneOrNone(`CREATE TABLE ${tableName} (${fields})`)
    .then(data => {
      console.log(`_____${tableName} table created sucessfully!_____`);
    })
    .catch(error => {
      console.log(`_____${tableName} ERROR!: ${error}_____`);
    })
}