import express from "express";
import Contact from "./contactRoute.js"
const route = express.Router();
route.use("/contact", Contact);
export default route;