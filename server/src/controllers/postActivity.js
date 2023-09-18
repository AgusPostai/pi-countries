const { Activity, Country } = require("../db");

const postActivity = async (name, difficulty, season, countries, duration) => {

    try {
        const activity = await Activity.create({
            name,
            difficulty,
            season,
            duration
        })
        const countries = await Country.findAll({
            where: { name: countries }
        });
        activity.addCountries(countries);
        return activity

        
    } catch (error) {
        console.log(error);
    }
}

module.exports = { postActivity };