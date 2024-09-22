import {Router} from "express";
import { signIn, signUp } from "./customers.controller.js";
import { isEmailExist } from "../../middleware/isEmailExist.js";
const customerRouter =Router();

customerRouter.post('/signup',isEmailExist,signUp).post("/signin",signIn)

export default customerRouter;