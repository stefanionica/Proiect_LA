"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBilet = exports.update = exports.create = exports.findOne = exports.findByName = exports.findAll = void 0;
const db_1 = require("../db");
// Get all bilete
const findAll = (callback) => {
    const queryString = `SELECT * FROM bilete`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const bilete = [];
        rows.forEach((row) => {
            const bilet = {
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
exports.findAll = findAll;
const findByName = (name, callback) => {
    const queryString = "SELECT * FROM bilete WHERE tipdebilet LIKE '%" + name + "%'";
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const bilete = [];
        rows.forEach((row) => {
            const bilet = {
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
exports.findByName = findByName;
// Get one bilet
const findOne = (biletId, callback) => {
    const queryString = `SELECT * FROM bilete WHERE id=?`;
    db_1.db.query(queryString, biletId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const bilet = {
            id: row.id,
            tipdebilet: row.tipdebilet,
            numarbilete: row.numarbilete,
            oras: row.oras,
            locatie: row.locatie,
            dataconcert: row.dataconcert,
            //dataadaugare: row.dataadaugare,
        };
        callback(null, bilet);
    });
};
exports.findOne = findOne;
// create bilet
const create = (bilet, callback) => {
    const queryString = "INSERT INTO bilete (tipdebilet, numarbilete, oras, locatie, dataconcert) VALUES (?, ?, ?, ?, ?)";
    console.log(bilet);
    db_1.db.query(queryString, [bilet.tipdebilet, bilet.numarbilete, bilet.oras, bilet.locatie, bilet.dataconcert], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update bilet
const update = (bilet, callback) => {
    const queryString = `UPDATE bilete SET tipdebilet=?, numarbilete=?, oras=?, locatie=?, dataconcert=? WHERE id=?`;
    db_1.db.query(queryString, [bilet.tipdebilet, bilet.numarbilete, bilet.oras, bilet.locatie, bilet.dataconcert, bilet.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete bilet
const deleteBilet = (bilet, callback) => {
    console.log(bilet);
    const queryString = `DELETE FROM bilete WHERE id=?`;
    db_1.db.query(queryString, [bilet], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteBilet = deleteBilet;
