const { Router } = require("express");
const router = Router();
const getCountriesHandler = require("../handlers/getCountriesHandler"); // Importa el controlador
const getCountriesByIdHandler = require("../handlers/getCountriesByIdHandler")
const getCountriesByNameHandler = require("../handlers/getCountriesByNameHandler")



router.get("/allCountries", getCountriesHandler); // Pasa la función del controlador como referencia

router.get("/name", getCountriesByNameHandler)

router.get("/:idPais", getCountriesByIdHandler)


module.exports = router; // Exporta solo el router
