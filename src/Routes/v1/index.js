const express=require("express");
const router=express.Router();
const infocontroller=require("../../controllers/info-controller");
const airplaneRoute=require("./airplane-route");
const cityRoute=require("./city-route");
router.use("/airplanes",airplaneRoute);
router.get("/info",infocontroller.info);
router.use("/cities",cityRoute);
module.exports=router;