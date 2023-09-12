const { Router } = require("express");
const countryRouter = require("../routes/countryRouter")
const router = Router();

router.use("/countries", countryRouter);




module.exports = router;
