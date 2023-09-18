const getActivity = require("../controllers/getActivity");

const getActivityHandler = async (req, res) => {
    try {
        const activities = await getActivity.getActivities();
        res.status(200).json(activities);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = getActivityHandler;