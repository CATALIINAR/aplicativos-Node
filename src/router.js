import express from "express";
const router = express.Router();

router.get("/inicio", (req, res) => {
    res.render("inicio");
});

router.get("/aplicaciones", (req, res) => {
    res.render("pages/aplicaciones");
});

export default router;