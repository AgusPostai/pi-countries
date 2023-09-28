const getCountries = require("../../controllers/Countries/getCountries");

const getCountriesHandler = async (req, res) => {
    try {
        const countries = await getCountries.getCountries();
        res.status(200).json(countries);
    } catch (error) {
        console.error(error); // Registra el error en la consola para propósitos de depuración
        res.status(500).json({ error: "Internal server error" }); // Responde con un mensaje de error al cliente
    }
};

module.exports = getCountriesHandler; // Exporta solo el controlador
