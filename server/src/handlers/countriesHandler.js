const getCountries = require("../controllers/getCountries")

const getCountriesHandler = async (req, res) => {
    try {
        const countries = await getCountries.getCountries()
        res.status(200).json(countries)
    } catch (error) {
        res.status(500).send("error en el handler para obtener los paises")
    }
}

module.exports = {getCountriesHandler}
