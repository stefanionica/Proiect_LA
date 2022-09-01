import { Bilet } from "./../types/Bilet";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all bilete
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM bilete`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const bilete: Bilet[] = [];
    rows.forEach((row) => {
      const bilet: Bilet = {
        id: row.id,
        tipdebilet: row.tipdebilet,
        numarbilete: row.numarbilete,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      bilete.push(bilet);
    });
    callback(null, bilete);
  });
};
export const findByName = (name:string, callback: Function) => {
  const queryString = "SELECT * FROM bilete WHERE tipdebilet LIKE '%"+name+"%'";
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const bilete: Bilet[] = [];
    rows.forEach((row) => {
      const bilet: Bilet = {
        id: row.id,
        tipdebilet: row.tipdebilet,
        numarbilete: row.numarbilete,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        dataadaugare: row.dataadaugare,
        actiune: "",
      };
      bilete.push(bilet);
    });
    callback(null, bilete);
  });
};
// Get one bilet
export const findOne = (biletId: number, callback: Function) => {
  const queryString = `SELECT * FROM bilete WHERE id=?`;
  db.query(queryString, biletId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const bilet: Bilet = {
        id: row.id,
        tipdebilet: row.tipdebilet,
        numarbilete: row.numarbilete,
        oras: row.oras,
        locatie: row.locatie,
        dataconcert: row.dataconcert,
        dataadaugare: row.dataadaugare,
    };
    callback(null, bilet);
  });
};
// create bilet
export const create = (bilet: Bilet, callback: Function) => {
  const queryString =
    "INSERT INTO bilete (tipdebilet, numarbilete, oras, locatie, dataconcert) VALUES (?, ?, ?, ?, ?)";
    console.log(bilet);
  db.query(
    queryString,
    [bilet.tipdebilet, bilet.numarbilete, bilet.oras, bilet.locatie, bilet.dataconcert],
    (err, result) => {
      if (err) {
        callback(err);
      }
    
      
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update bilet
export const update = (bilet: Bilet, callback: Function) => {
  const queryString = `UPDATE bilete SET tipdebilet=?, numarbilete=?, oras=?, locatie=?, dataconcert=? WHERE id=?`;

  db.query(queryString, [bilet.tipdebilet, bilet.numarbilete, bilet.oras, bilet.locatie, bilet.dataconcert, bilet.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete bilet
export const deleteBilet = (bilet: number, callback: Function) => {
  console.log(bilet);
  const queryString = `DELETE FROM bilete WHERE id=?`;

  db.query(queryString, [bilet], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};