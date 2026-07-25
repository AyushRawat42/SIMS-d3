import { Router, type IRouter } from "express";
import admissionsRouter from "./admissions.js";
import healthRouter from "./health.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/admissions", admissionsRouter);

export default router;
