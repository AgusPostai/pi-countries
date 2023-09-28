const { Country, Activity } = require("../../db")

const getActivitiesById = async (id) => {
    try {
        const activities = await Activity.findOne({
            where: { id: id }
        })
        return activities
    } catch (error) {
        console.log("Error al obtener la actividad", error);
        throw error

    }
}

module.exports = { getActivitiesById }