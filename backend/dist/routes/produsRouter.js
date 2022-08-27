"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produsRouter = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const produsModel = __importStar(require("../models/produs"));
const produsRouter = express_1.default.Router();
exports.produsRouter = produsRouter;
var jsonParser = bodyParser.json();
produsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    produsModel.findAll((err, produse) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        res.status(200).json({ "data": produse });
    });
}));
produsRouter.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const suvenir = String(req.params.name);
    //console.log((req.params);
    produsModel.findByName(suvenir, (err, produse) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        res.status(200).json({ "data": produse });
    });
}));
produsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produsId = Number(req.params.id);
    produsModel.findOne(produsId, (err, produs) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": produs });
    });
}));
produsRouter.post("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newProdus = req.body;
    produsModel.create(newProdus, (err, produsId) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "produsId": produsId });
    });
}));
// Edit produs
produsRouter.put("/:id", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produs = req.body;
    console.log(req.body);
    produsModel.update(produs, (err) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        // res.status(200).send();
        res.status(200).json({
            "message": 'success'
        });
    });
}));
// Delete produs
produsRouter.delete("/:id", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produsId = Number(req.params.id);
    console.log(produsId);
    produsModel.deleteProdus(produsId, (err) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        // res.status(200).send();
        res.status(200).json({
            "message": 'success'
        });
    });
}));
