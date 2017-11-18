const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`
      
      db.run(sql, function(){
        resolve("questions table created")
      })      
    })
  }

  constructor(content){
    this.content = content
  }

  insert(){
    const sql = 'INSERT INTO questions (content) VALUES ?' //check this
    const self = this
    
    db.run(sql,[self.content])
    
  }

}

module.exports = Question;