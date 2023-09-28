const { Router } = require("express");
const router = Router();
const getCountriesHandler = require("../handlers/Countries/getCountriesHandler"); // Importa el controlador
const getCountriesByIdHandler = require("../handlers/Countries/getCountriesByIdHandler")
const getCountriesByNameHandler = require("../handlers/Countries/getCountriesByNameHandler")



router.get("/allCountries", getCountriesHandler); // Pasa la función del controlador como referencia

router.get("/name", getCountriesByNameHandler)

router.get("/:idPais", getCountriesByIdHandler)


module.exports = router; // Exporta solo el router
