const getActivity = require("../../controllers/Activity/getActivity")

const getActivitiesHandler = async (req, res) => {
    try {
        const activities = await getActivity.getActivities();
        res.status(200).json(activities)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = getActivitiesHandler;
