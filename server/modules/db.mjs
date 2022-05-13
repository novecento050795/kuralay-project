import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp(`postgres://postgres:postgres@localhost:5432/kuralay_project`)

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