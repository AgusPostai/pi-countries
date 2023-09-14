const getCountryById = require("../controllers/getCountryBiId")

const getCountryByIdHandler = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await getCountryById.getCountriesById(idPais);

        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ error: "Country not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getCountryByIdHandler