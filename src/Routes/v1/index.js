const express=require("express");
const router=express.Router();
const infocontroller=require("../../controllers/info-controller");
const airplaneRoute=require("./airplane-route");
const cityRoute=require("./city-route");
const airportRoute=require("./airport-routes");
router.use("/airplanes",airplaneRoute);
router.get("/info",infocontroller.info);
router.use("/cities",cityRoute);
router.use("/airports",airportRoute);
module.exports=router;



