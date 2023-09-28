const { Activity, Country } = require("../../db")

const postActivity = async (name, difficulty, duration, season, countries) => {
    //le vamos a pasar toda la info por query, despue vamos creando y buscando cada variable que necesitamos
    try {
     
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        const countryInstances = await Country.findAll({
            where: { name: countries },
        });
        await newActivity.setCountries(countryInstances);

        return newActivity;
    }
    catch (error) {
        console.error("Error al crear la actividad turística:", error);
        throw error; 
    }

}

module.exports = { postActivity }