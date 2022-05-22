import { createTable, insert, selectMany } from './modules/db.mjs';

function migrate() {

  createTable('products', {
    id: 'serial PRIMARY KEY',
    name: 'text NOT NULL',
    category: 'text NOT NULL',
    price: 'text NOT NULL',
    description: 'text NOT NULL',
    image: 'text NOT NULL'
  });

  createTable('orders', {
    id: 'serial PRIMARY KEY',
    date: 'date NOT NULL',
    client_id: 'int NOT NULL',
    address: 'text NOT NULL',
    amount: 'text NOT NULL',
    status: 'text NOT NULL',
    outbound: 'text NOT NULL'
  });

  createTable('clients', {
    id: 'serial PRIMARY KEY',
    name: 'text NOT NULL',
    source_id: 'int NOT NULL',
    address: 'text NOT NULL',
    summ: 'text NOT NULL',
  });

  createTable('sources', {
    id: 'serial PRIMARY KEY',
    name: 'text NOT NULL',
    color: 'text NOT NULL'
  });

  createTable('history', {
    id: 'serial PRIMARY KEY',
    date: 'date NOT NULL',
    time: 'int NOT NULL',
    client_id: 'text NOT NULL',
    source_id: 'text NOT NULL',
    action: 'text NOT NULL',
  });

  insert('sources', [
    {
      id: 1,
      name: 'Yandex',
      color: '#3E4954'
    },
    {
      id: 2,
      name: 'Google',
      color: '#FF6D4C'
    },
    {
      id: 3,
      name: 'Рассылки',
      color: '#2BC155'
    },
    {
      id: 4,
      name: 'Таргет Instagram',
      color: '#386fc7'
    },
    {
      id: 5,
      name: 'Таргет Facebook',
      color: '#386fc7'
    },
    {
      id: 6,
      name: 'Промоакции',
      color: '#c41dc2'
    },
    {
      id: 7,
      name: 'Другие',
      color: '#1dc4b6'
    }
  ])

}

migrate()

