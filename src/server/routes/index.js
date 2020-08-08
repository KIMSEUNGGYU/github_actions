const router = require("express").Router();
const cors = require("cors");

const middleware = require("../middlewares");
const user = require("./user");
const partner = require("./partner");
const admin = require("./admin");
const keyword = require("./keyword");
const point = require("./point");
const schedule = require("./schedule");
const { BASEURL } = require("../library/constant");

// middleware
router.use(`${BASEURL}/`, cors());
router.use(`${BASEURL}/`, middleware.apiKeyAuth);

// api
router.get(`${BASEURL}/`, (req, res, next) =>
  res.status(200).json({ message: " merged test server 1", result: {} })
);
router.use(`${BASEURL}/user`, user);
router.use(`${BASEURL}/partner`, partner);
router.use(`${BASEURL}/admin`, admin);
router.use(`${BASEURL}/keyword`, keyword);
router.use(`${BASEURL}/point`, point);
router.use(`${BASEURL}/schedule`, schedule);

// error handling
router.use(`${BASEURL}/`, middleware.errorHandling);
module.exports = router;
