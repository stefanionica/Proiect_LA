import{ Produs } from "./../types/Produs";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all produse
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM produse`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const produse: Produs[] = [];
    rows.forEach((row) => {
      const produs: Produs = {
        id: row.id,
        suvenir: row.suvenir,
        pret: row.pret,
        cantitate: row.cantitate,
        img: row.img,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      produse.push(produs);
    });
    callback(null, produse);
  });
};
export const findByName = (name:string, callback: Function) => {
  const queryString = "SELECT * FROM produse WHERE suvenir LIKE '%"+name+"%'";
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const produse: Produs[] = [];
    rows.forEach((row) => {
      const produs: Produs = {
        id: row.id,
        suvenir: row.suvenir,
        pret: row.pret,
        cantitate: row.cantitate,
        img: row.img,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      produse.push(produs);
    });
    callback(null, produse);
  });
};
// Get one produs
export const findOne = (produsId: number, callback: Function) => {
  const queryString = `SELECT * FROM produse WHERE id=?`;
  db.query(queryString, produsId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const produs: Produs = {
        id: row.id,
        suvenir: row.suvenir,
        pret: row.pret,
        cantitate: row.cantitate,
        img: row.img,
      //dataadaugare: row.dataadaugare,
    };
    callback(null, produs);
  });
};
// create produs
export const create = (produs: Produs, callback: Function) => {
  const queryString =
    "INSERT INTO produse (suvenir, pret, cantitate, img) VALUES (?, ?, ?, ?)";
    console.log(produs);
  db.query(
    queryString,
    [produs.suvenir, produs.pret, produs.cantitate, produs.img],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update produs
export const update = (produs: Produs, callback: Function) => {
  const queryString = `UPDATE produse SET suvenir=?, pret=?, cantitate=?, img=? WHERE id=?`;

  db.query(queryString, [produs.suvenir, produs.pret, produs.cantitate, produs.img, produs.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete produs
export const deleteProdus = (produs: number, callback: Function) => {
  console.log(produs);
  const queryString = `DELETE FROM produse WHERE id=?`;

  db.query(queryString, [produs], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};