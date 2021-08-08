import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalsByUserUsecase } from "./ListRentalsByUserUseCase";

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listRentalsByUserCase = container.resolve(ListRentalsByUserUsecase);

    const rentals = await listRentalsByUserCase.execute(user_id);

    return response.json(rentals);
  }
}

export { ListRentalsByUserController };
