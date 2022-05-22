const pgp = require('pg-promise')({});
require('dotenv').config()

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

module.exports = {
  createTable: function (tableName, fields) {
  
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
  },
  insert: function (table, rows) {
  
    rows.forEach(row => {
      const fields = Object.keys(row).join(', ');
      const values = Object.values(row)
        .map(value => `'${value}'`)
        .join(', ');
  
      db.oneOrNone(`INSERT INTO ${table} (${fields}) VALUES (${values})`)
        .then(data => {
          console.log(`_____ INSERTED INTO ${table} sucessfully!_____`);
        })
        .catch(error => {
          console.log(`_____INSERTING INTO ${table} ERROR!: ${error}_____`);
        })
      })
  },
  selectMany: function (table, columns = '*', filter = '') {
    if (Array.isArray(columns)) {
      columns = columns.join(', ');
    }
  
    return db.many(`SELECT ${columns} from ${table} ${filter}`);
  },
  update: function(table, values, filter) {

    values = Object.keys(values)
      .map(key => `${key} = '${values[key]}'`)
      .join(', ');

    return db.many(`UPDATE ${table} SET ${values} ${filter}`);
  }
};

