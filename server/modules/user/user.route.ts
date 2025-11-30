import { Router } from "express"
import * as userController from "./user.controller.js";
import {validateUser} from "./user.validation.js";

const router = Router();


router.post('/register',validateUser, userController.createUser);
router.post('/login', userController.loginUser);
router.get('/getuser', userController.getUser);



export default router;