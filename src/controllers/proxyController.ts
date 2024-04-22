import { NextFunction, Request, Response } from "express";
import requestHandler from "../utils/requestHandler.js";

class ProxyController {
  public async getMovies(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const movies = await requestHandler.getMovies(req.query);
      res.json(movies);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProxyController();
