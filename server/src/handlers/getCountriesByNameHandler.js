const getCountryByName = require("../controllers/getCountryByName")

const getCountriesByNameHandler = async (req, res) => {
    const name = req.query.name;
    try {
        const countriesByName = await getCountryByName.getCountriesByName(name);
        res.status(200).json(countriesByName)
    } catch (error) {
        console.error(error); // Registra el error en la consola para propósitos de depuración
        res.status(500).json({ error: "Internal server error" }); // Responde con un mensaje de error al cliente
    }


}
module.exports = getCountriesByNameHandler;