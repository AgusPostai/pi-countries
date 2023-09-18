const { Country, Activity } = require("../../db")

const getActivities = async () => {
    try {
        const activities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["name"]
            }
        })
        return activities
    } catch (error) {
        console.log("Error al obtener las actividades", error);
        throw error;
    }

}

module.exports = { getActivities };