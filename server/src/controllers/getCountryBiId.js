const { Country, Activity } = require("../db");


const getCountriesById = async (idCountry) => {

    try {
        const country = await Country.findOne({
            where: { id: idCountry },
            include: Activity,
        });
        return country
    } catch (error) {
        console.log("Error al obtener el pais por ID", error);
        throw error;
    }
}
module.exports = { getCountriesById }