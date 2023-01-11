import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouters);

export { router };
