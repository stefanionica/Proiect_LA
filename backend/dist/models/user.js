"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.update = exports.create = exports.findOne = exports.findByName = exports.findAll = void 0;
const db_1 = require("../db");
// Get all users
const findAll = (callback) => {
    const queryString = `SELECT * FROM users`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
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
exports.findAll = findAll;
const findByName = (name, callback) => {
    const queryString = "SELECT * FROM users WHERE nume LIKE '%" + name + "%'";
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
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
exports.findByName = findByName;
// Get one user
const findOne = (userId, callback) => {
    const queryString = `SELECT * FROM users WHERE id=?`;
    db_1.db.query(queryString, userId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const user = {
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
exports.findOne = findOne;
// create user
const create = (user, callback) => {
    const queryString = "INSERT INTO users (nume, prenume, email, cnp, img, datanastere, telefon) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log(user);
    db_1.db.query(queryString, [user.nume, user.prenume, user.email, user.cnp, user.img, user.datanastere, user.telefon], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update user
const update = (user, callback) => {
    const queryString = `UPDATE users SET nume=?, prenume=?, email=?, cnp=?, img=?, datanastere=?, telefon=? WHERE id=?`;
    db_1.db.query(queryString, [user.nume, user.prenume, user.email, user.cnp, user.img, user.datanastere, user.telefon, user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete user
const deleteUser = (user, callback) => {
    console.log(user);
    const queryString = `DELETE FROM users WHERE id=?`;
    db_1.db.query(queryString, [user], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteUser = deleteUser;
