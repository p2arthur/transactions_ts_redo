import { NegotiationController } from "./controller/negotiations-controller.js";

const controller = new NegotiationController();

document.querySelector(".form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.addNewTransaction();
});
