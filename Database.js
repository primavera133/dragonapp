'use strict'
import { SQLite } from 'expo'

const databaseName = 'dbdragonflies.db'
const databaseVersion = '1.0'
const databaseDisplayname = 'db'
const databaseSize = 200000

let conn = SQLite.openDatabase(databaseName, databaseVersion, databaseDisplayname, databaseSize)

class Database {
  getConnection () {
    return conn
  }
}

module.exports = new Database()
