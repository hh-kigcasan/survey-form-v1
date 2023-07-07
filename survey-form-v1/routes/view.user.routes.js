const Express 			            = require("express");
const UserViewRoutes                = Express.Router();
const SurveyController              = require('../controllers/survey.controller');

UserViewRoutes.get("/", function(req, res, next) {
    new SurveyController().index(req, res);
});

UserViewRoutes.post("/process", function(req, res, next) {
    new SurveyController().process(req, res);
});

UserViewRoutes.get("/success", function(req, res, next) {
    new SurveyController().success(req, res);
});

module.exports = UserViewRoutes;
