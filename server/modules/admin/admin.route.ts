import { Router } from "express";
import * as adminController from "./admin.controller.js";
import { validateCreateAdmin, validateLoginAdmin } from "./admin.validation.js";

const router = Router();

router.post('/register', validateCreateAdmin, adminController.createAdmin);
router.post('/login', validateLoginAdmin, adminController.loginAdmin);

export default router;

