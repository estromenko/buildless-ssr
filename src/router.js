import express from "express";
import renderComponent from "./renderComponent.js";
import Index from "./public/pages/Index.js";
import Contacts from "./public/pages/Contacts.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(renderComponent(Index, { counter: 100 }));
});

router.get("/contacts", (_req, res) => {
  res.send(renderComponent(Contacts));
});

export default router;
