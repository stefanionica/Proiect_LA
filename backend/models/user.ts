import { User } from "./../types/User";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM users`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        cnp: row.cnp,
        img: row.img,
        datanastere: row.datanastere,
        telefon: row.telefon,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      users.push(user);
    });
    callback(null, users);
  });
};
export const findByName = (name:string, callback: Function) => {
  const queryString = "SELECT * FROM users WHERE nume LIKE '%"+name+"%'";
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        cnp: row.cnp,
        img: row.img,
        datanastere: row.datanastere,
        telefon: row.telefon,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      users.push(user);
    });
    callback(null, users);
  });
};
// Get one user
export const findOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * FROM users WHERE id=?`;
  db.query(queryString, userId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: User = {
      id: row.id,
      nume: row.nume,
      prenume: row.prenume,
      email: row.email,
      cnp: row.cnp,
      img: row.img,
      datanastere: row.datanastere,
      telefon: row.telefon,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, user);
  });
};
// create user
export const create = (user: User, callback: Function) => {
  const queryString =
    "INSERT INTO users (nume, prenume, email, cnp, img, datanastere, telefon) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log(user);
  db.query(
    queryString,
    [user.nume, user.prenume, user.email, user.cnp, user.img, user.datanastere, user.telefon],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update user
export const update = (user: User, callback: Function) => {
  const queryString = `UPDATE users SET nume=?, prenume=?, email=?, cnp=?, img=?, datanastere=?, telefon=? WHERE id=?`;

  db.query(queryString, [user.nume, user.prenume, user.email, user.cnp, user.img, user.datanastere, user.telefon,user.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete user
export const deleteUser = (user: number, callback: Function) => {
  console.log(user);
  const queryString = `DELETE FROM users WHERE id=?`;

  db.query(queryString, [user], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};