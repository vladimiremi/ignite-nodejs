import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { carsRouters } from "./cars.routes";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouters);
router.use("/cars", carsRouters);

router.use(authenticateRoutes);

export { router };
