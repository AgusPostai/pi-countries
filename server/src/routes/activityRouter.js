const { Router } = require("express");
const router = Router();

const postActivityHandler = require("../handlers/Activity/postActivityHandler")
const getActivitiesHandler = require("../handlers/Activity/getActivityHandler")
//const getActivitiesByIdHandler = require("../handlers/Activity/getActivityByIdHandler")

router.get("/activities", getActivitiesHandler)
router.post("/activities", postActivityHandler)
//router.get("/:id", getActivitiesByIdHandler)



module.exports = router;