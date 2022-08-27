import { Turneu } from "./../types/Turneu";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM turnee`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const turnee: Turneu[] = [];
    rows.forEach((row) => {
      const turneu: Turneu = {
        id: row.id,
        formatie: row.formatie,
        tara: row.tara,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        img: row.img,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      turnee.push(turneu);
    });
    callback(null, turnee);
  });
};
export const findByName = (name:string, callback: Function) => {
  const queryString = "SELECT * FROM turnee WHERE formatie LIKE '%"+name+"%'";
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const turnee: Turneu[] = [];
    rows.forEach((row) => {
      const turneu: Turneu = {
        id: row.id,
        formatie: row.formatie,
        tara: row.tara,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        img: row.img,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      turnee.push(turneu);
    });
    callback(null, turnee);
  });
};
// Get one turneu
export const findOne = (turneuId: number, callback: Function) => {
  const queryString = `SELECT * FROM turnee WHERE id=?`;
  db.query(queryString, turneuId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const turneu: Turneu = {
        id: row.id,
        formatie: row.formatie,
        tara: row.tara,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        img: row.img,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, turneu);
  });
};
// create turneu
export const create = (turneu: Turneu, callback: Function) => {
  const queryString =
    "INSERT INTO turnee (formatie, tara, oras, locatie, dataconcert, img) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(turneu);
  db.query(
    queryString,
    [turneu.formatie, turneu.tara, turneu.oras, turneu.locatie, turneu.dataconcert, turneu.img],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update turneu
export const update = (turneu: Turneu, callback: Function) => {
  const queryString = `UPDATE turnee SET formatie=?, tara=?, oras=?, locatie=?, dataconcert=?, img=? WHERE id=?`;

  db.query(queryString, [turneu.formatie, turneu.tara, turneu.oras, turneu.locatie, turneu.dataconcert, turneu.img, turneu.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete turneu
export const deleteTurneu = (turneu: number, callback: Function) => {
  console.log(turneu);
  const queryString = `DELETE FROM turnee WHERE id=?`;

  db.query(queryString, [turneu], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};