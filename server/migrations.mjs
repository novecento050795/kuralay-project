import {createTable} from './modules/db.mjs';

function migrate() {
  createTable('products', {
    id: 'serial PRIMARY KEY',
    name: 'text NOT NULL',
    secondname: 'text NOT NULL'
  })
}

migrate()

