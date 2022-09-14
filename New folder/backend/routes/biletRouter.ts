import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as biletModel from "../models/bilet";
import {Bilet} from "../types/Bilet";
const biletRouter = express.Router();
var jsonParser = bodyParser.json()
biletRouter.get("/", async (req: Request, res: Response) => {
  biletModel.findAll((err: Error, bilete: Bilet[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": bilete});
  });
});
biletRouter.get("/:name", async (req: Request, res: Response) => {
  const formatie: string = String(req.params.name);
  //console.log((req.params);
  biletModel.findByName(formatie,(err: Error, bilete: Bilet[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": bilete});
  });
});

biletRouter.get("/:id", async (req: Request, res: Response) => {
  const biletId: number = Number(req.params.id);
  biletModel.findOne(biletId, (err: Error, bilet: Bilet) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": bilet});
  })
});

biletRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newBilet: Bilet = req.body;
  biletModel.create(newBilet, (err: Error, biletId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"biletId": biletId});
  });
});

// Edit bilet
biletRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
  const bilet: Bilet = req.body;
  console.log(req.body);
  biletModel.update(bilet, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
// Delete bilet
biletRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
  const biletId: number = Number(req.params.id);
  console.log(biletId);
  biletModel.deleteBilet(biletId, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
export {biletRouter};