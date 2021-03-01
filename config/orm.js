const connection = require("./connection.js");

const printQuestionMarks = (num) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

const orm = {
  selectAll(table, cb) {
    let query = `SELECT * FROM ${table}`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne(table, cols, vals, cb) {
    let query = `INSERT INTO ${table}`;
    query += " (";
    query += cols;
    query += ") ";
    query += "VALUES (";
    query += printQuestionMarks(vals.length);
    query += ")";

    connection.query(query, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne(table, cols, condition, cb) {
    let query = `UPDATE ${table}`;
    query += " SET ";
    query += cols;
    query += " WHERE ";
    query += condition;

    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
