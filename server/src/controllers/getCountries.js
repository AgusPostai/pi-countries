const axios = require("axios");
const { Country } = require("../../db");

const getCountries = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");

    for (const countryData of response.data) {
      const existingCountry = await Country.findOne({ where: { id: countryData.cca2 } });
      if (!existingCountry) {
        await Country.create({
          id: countryData.cca2,
          name: countryData.name.common,
          flag: countryData.flags.svg,
          continent: countryData.region,
          //   capital: countryData.capital,
          subregion: countryData.subregion,
          area: countryData.area,
          population: countryData.population,
        });
      }
    }

    const countries = await Country.findAll();
    return countries;

  } catch (error) {
    console.log("Error al obtener y guardar países", error);
    throw error;
  }
};

module.exports = {
  getCountries,
};
