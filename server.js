const express = require('express') ;
const app = express() ;
const PORT = 3000
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
app.use(express.static('./Views'))
app.use(express.static('./'))
app.use(express.json());
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server lytter på port ${PORT}`)
  });

//routes
const controller = require('./Controller/controller')
app.use(controller); 

// Forbinder localhost:3000 med vores index.html
app.use(express.static('./View'))

app.all('*', (req, res)=> {
  res.status(404).send('<h1> resource not found </h1>')
})

module.exports = app ; 




const db = new sqlite3.Database('./Model/db.sqlite');
const sql = `CREATE TABLE pages(id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, title varchar(44) UNIQUE,type varchar(44), content TEXT, created TEXT, created_by TEXT, last_edited TEXT)`

const drop = `DROP TABLE pages`

const data = `INSERT INTO pages(title, type, content) VALUES ('Eksponering','guidelines' ,' lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.')`

