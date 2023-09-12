const axios = require("axios");
const { Country } = require("../db")

// module.exports = async (req, res) => {

// }
    const getCountries = async () => {
    try {
        const countriesDb = await Country.findAll()
        if (countriesDb.length === 0) { countriesApi = await axios.get("http://localhost:5000/countries")}
        return countriesApi.data
    } catch (error) {
return error
    }
}

module.exports =  {getCountries}

