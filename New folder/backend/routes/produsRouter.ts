import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as produsModel from "../models/produs";
import {Produs} from "../types/Produs";
const produsRouter = express.Router();
var jsonParser = bodyParser.json()
produsRouter.get("/", async (req: Request, res: Response) => {
  produsModel.findAll((err: Error, produse: Produs[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": produse});
  });
});
produsRouter.get("/:name", async (req: Request, res: Response) => {
  const suvenir: string = String(req.params.name);
  //console.log((req.params);
  produsModel.findByName(suvenir,(err: Error, produse: Produs[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": produse});
  });
});

produsRouter.get("/:id", async (req: Request, res: Response) => {
  const produsId: number = Number(req.params.id);
  produsModel.findOne(produsId, (err: Error, produs: Produs) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": produs});
  })
});

produsRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newProdus: Produs = req.body;
  produsModel.create(newProdus, (err: Error, produsId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"produsId": produsId});
  });
});

// Edit produs
produsRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
  const produs: Produs = req.body;
  console.log(req.body);
  produsModel.update(produs, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
// Delete produs
produsRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
  const produsId: number = Number(req.params.id);
  console.log(produsId);
  produsModel.deleteProdus(produsId, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
export {produsRouter};