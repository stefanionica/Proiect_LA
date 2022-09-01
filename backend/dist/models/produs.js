"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProdus = exports.update = exports.create = exports.findOne = exports.findByName = exports.findAll = void 0;
const db_1 = require("../db");
// Get all produse
const findAll = (callback) => {
    const queryString = `SELECT * FROM produse`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const produse = [];
        rows.forEach((row) => {
            const produs = {
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
exports.findAll = findAll;
const findByName = (name, callback) => {
    const queryString = "SELECT * FROM produse WHERE suvenir LIKE '%" + name + "%'";
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const produse = [];
        rows.forEach((row) => {
            const produs = {
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
exports.findByName = findByName;
// Get one produs
const findOne = (produsId, callback) => {
    const queryString = `SELECT * FROM produse WHERE id=?`;
    db_1.db.query(queryString, produsId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const produs = {
            id: row.id,
            suvenir: row.suvenir,
            pret: row.pret,
            cantitate: row.cantitate,
            img: row.img,
            dataadaugare: row.dataadaugare,
        };
        callback(null, produs);
    });
};
exports.findOne = findOne;
// create produs
const create = (produs, callback) => {
    const queryString = "INSERT INTO produse (suvenir, pret, cantitate, img) VALUES (?, ?, ?, ?)";
    console.log(produs);
    db_1.db.query(queryString, [produs.suvenir, produs.pret, produs.cantitate, produs.img], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update produs
const update = (produs, callback) => {
    const queryString = `UPDATE produse SET suvenir=?, pret=?, cantitate=?, img=? WHERE id=?`;
    db_1.db.query(queryString, [produs.suvenir, produs.pret, produs.cantitate, produs.img, produs.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete produs
const deleteProdus = (produs, callback) => {
    console.log(produs);
    const queryString = `DELETE FROM produse WHERE id=?`;
    db_1.db.query(queryString, [produs], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteProdus = deleteProdus;
