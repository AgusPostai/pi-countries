const getActivitiesById = require("../../controllers/Activity/getActivityById")

const getActivitiesByIdHandler = async(req,res)=>{
    try {
        const {id}= req.params;
        const activity = await getActivitiesById.getActivitiesById(id)
        res.status(200).json(activity)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getActivitiesByIdHandler