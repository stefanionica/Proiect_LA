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
exports.biletRouter = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const biletModel = __importStar(require("../models/bilet"));
const biletRouter = express_1.default.Router();
exports.biletRouter = biletRouter;
var jsonParser = bodyParser.json();
biletRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    biletModel.findAll((err, bilete) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        res.status(200).json({ "data": bilete });
    });
}));
biletRouter.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formatie = String(req.params.name);
    //console.log((req.params);
    biletModel.findByName(formatie, (err, bilete) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        res.status(200).json({ "data": bilete });
    });
}));
biletRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const biletId = Number(req.params.id);
    biletModel.findOne(biletId, (err, bilet) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": bilet });
    });
}));
biletRouter.post("/", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newBilet = req.body;
    biletModel.create(newBilet, (err, biletId) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "biletId": biletId });
    });
}));
// Edit bilet
biletRouter.put("/:id", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bilet = req.body;
    console.log(req.body);
    biletModel.update(bilet, (err) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        // res.status(200).send();
        res.status(200).json({
            "message": 'success'
        });
    });
}));
// Delete bilet
biletRouter.delete("/:id", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const biletId = Number(req.params.id);
    console.log(biletId);
    biletModel.deleteBilet(biletId, (err) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        // res.status(200).send();
        res.status(200).json({
            "message": 'success'
        });
    });
}));
