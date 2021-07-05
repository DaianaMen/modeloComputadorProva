import { Request, Response } from "express";
import ComputadorSchema from "../models/ComputadorSchema";

class ComputadorController {

  async remover(request: Request, response: Response) {
    const { id } = request.params;
    const remove = await ComputadorSchema.findByIdAndRemove({_id: id});
    response.status(200).json(remove);
  }
  
  async listar(request: Request, response: Response) {
    response.status(200).json(await ComputadorSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {
    const novoComputador = await ComputadorSchema.create(request.body);
    response.status(201).json(novoComputador);
  }
}

export { ComputadorController };
