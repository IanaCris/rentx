import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/autenthicateUser/AuthenticateUserController";
mport { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";
i
const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUseController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };
