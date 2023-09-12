const {Router} = require("express");
const countriesHandler = require("../handlers/countriesHandler")

const router = Router()

router.get("/getCountries", async (req, res) => {

try {
    const countries = await countriesHandler.getCountriesHandler()
    res.status(200).json(countries)
} catch (error) {
    return error
}
}
) 
