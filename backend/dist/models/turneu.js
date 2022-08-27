"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurneu = exports.update = exports.create = exports.findOne = exports.findByName = exports.findAll = void 0;
const db_1 = require("../db");
// Get all users
const findAll = (callback) => {
    const queryString = `SELECT * FROM turnee`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const turnee = [];
        rows.forEach((row) => {
            const turneu = {
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
exports.findAll = findAll;
const findByName = (name, callback) => {
    const queryString = "SELECT * FROM turnee WHERE formatie LIKE '%" + name + "%'";
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const turnee = [];
        rows.forEach((row) => {
            const turneu = {
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
exports.findByName = findByName;
// Get one turneu
const findOne = (turneuId, callback) => {
    const queryString = `SELECT * FROM turnee WHERE id=?`;
    db_1.db.query(queryString, turneuId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const turneu = {
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
exports.findOne = findOne;
// create turneu
const create = (turneu, callback) => {
    const queryString = "INSERT INTO turnee (formatie, tara, oras, locatie, dataconcert, img) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(turneu);
    db_1.db.query(queryString, [turneu.formatie, turneu.tara, turneu.oras, turneu.locatie, turneu.dataconcert, turneu.img], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update turneu
const update = (turneu, callback) => {
    const queryString = `UPDATE turnee SET formatie=?, tara=?, oras=?, locatie=?, dataconcert=?, img=? WHERE id=?`;
    db_1.db.query(queryString, [turneu.formatie, turneu.tara, turneu.oras, turneu.locatie, turneu.dataconcert, turneu.img, turneu.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete turneu
const deleteTurneu = (turneu, callback) => {
    console.log(turneu);
    const queryString = `DELETE FROM turnee WHERE id=?`;
    db_1.db.query(queryString, [turneu], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteTurneu = deleteTurneu;
