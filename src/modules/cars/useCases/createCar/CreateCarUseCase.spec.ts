import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCraUsecase: CreateCarUseCase;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCraUsecase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    await createCraUsecase.execute({
      name: "Palio",
      description: "Carro popular",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });

  it("should not be abele to create a car with exists license plate", () => {
    expect(async () => {
      await createCraUsecase.execute({
        name: "Palio1",
        description: "Carro popular",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCraUsecase.execute({
        name: "Palio2",
        description: "Carro popular",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
