const { Router } = require("express");
const router = Router();

const getActivityHandler = require("../handlers/getActivity");
const postActivityHandler = require("../handlers/postActivityHandler");

router.post("/activity", postActivityHandler)
router.get("/activity", getActivityHandler)







