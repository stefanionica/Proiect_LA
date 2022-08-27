import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as turneuModel from "../models/turneu";
import {Turneu} from "../types/Turneu";
const turneuRouter = express.Router();
var jsonParser = bodyParser.json()
turneuRouter.get("/", async (req: Request, res: Response) => {
  turneuModel.findAll((err: Error, turnee: Turneu[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": turnee});
  });
});
turneuRouter.get("/:name", async (req: Request, res: Response) => {
  const formatie: string = String(req.params.name);
  //console.log((req.params);
  turneuModel.findByName(formatie,(err: Error, turnee: Turneu[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": turnee});
  });
});

turneuRouter.get("/:id", async (req: Request, res: Response) => {
  const turneuId: number = Number(req.params.id);
  turneuModel.findOne(turneuId, (err: Error, turneu: Turneu) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": turneu});
  })
});

turneuRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newTurneu: Turneu = req.body;
  turneuModel.create(newTurneu, (err: Error, turneuId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"turneuId": turneuId});
  });
});

// Edit turneu
turneuRouter.put("/:id",jsonParser, async (req: Request, res: Response) => {
  const turneu: Turneu = req.body;
  console.log(req.body);
  turneuModel.update(turneu, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
// Delete turneu
turneuRouter.delete("/:id",jsonParser, async (req: Request, res: Response) => {
  const turneuId: number = Number(req.params.id);
  console.log(turneuId);
  turneuModel.deleteTurneu(turneuId, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    // res.status(200).send();
    res.status(200).json({
      "message": 'success'
      });
  })
});
export {turneuRouter};