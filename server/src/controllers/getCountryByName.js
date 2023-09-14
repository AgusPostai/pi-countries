const { Country, Activity } = require("../db");
const { Op } = require('sequelize');

const getCountriesByName = async (name) => {
    try {
        const countries = await Country.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: Activity,
        });
        return countries;
    } catch (error) {
        console.log("Error al obtener países por nombre", error);
        throw error;
    }
}

module.exports = { getCountriesByName };