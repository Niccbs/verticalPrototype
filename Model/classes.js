const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Model/db.sqlite');



class Page {
  constructor(title, type, content, created, created_by, last_edited) {
    this.title = title;
    this.type = type;
    this.content = content;
    this.created = created;
    this.created_by = created_by;
    this.last_edited = last_edited
  }
  //Create page
  create(page) {
    return new Promise((resolve, reject) => {
       
        const sql = ` INSERT INTO pages(title, type, content, created) VALUES( '${page.title}', '${page.type}' , '${page.content}','${new Date()}')`
        
        db.run(sql , (err) => {
            if (err) {
                console.error(err.message);
                return reject(err.message);
            } else {
                const res = "done"
               return resolve(res);
            }
        });
    });
}

//return a page

 pagesFunc(requested) {
  return new Promise((resolve, reject) => {
  console.log(requested.title)
      const sql = `SELECT * FROM pages WHERE title = '${requested.title}'` 
     
      db.all(sql,  (err, rows) => {
          if (err) {
            console.log(rows)
              console.error(err.message);
              return reject(err.message);
          } else      
          
                     return resolve(rows);
                  
                  
              });

            
          })
          
}

getAll(requested) {
  return new Promise((resolve, reject) => {
  console.log(requested)
  const sql = `SELECT * FROM pages WHERE type = '${requested.type}'`  
     
      db.all(sql,  (err, rows) => {
          if (err) {
            console.log(rows)
              console.error(err.message);
              return reject(err.message);
          } else      
          
                     return resolve(rows);
                  
                  
              });

            
          })
          
}


}

module.exports = Page
