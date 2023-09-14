const { Router } = require("express");
const countryRouter = require("./countryRouter")

// Cambia el nombre de la segunda variable a countryRouter o cualquier otro nombre deseado
const router = Router();
router.use("/countries", countryRouter)
//router.use ("/activity, activityRouter")

module.exports = router;