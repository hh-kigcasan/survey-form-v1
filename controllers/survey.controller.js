const Controller        = require('./controller');
const SurveyModel       = require('../models/survey.model');
const survey_model = new SurveyModel();
class SurveyController extends Controller {

    constructor() {
        super();
    }
    
    index(req, res) {
		this.page_params.PAGE.title = "Survey Form";
        this.page_params.PAGE.view = "index";
        
		/* Custom css for index page */
        this.page_params.PAGE.assets.stylesheets.push({ file: `/public/css/custom/survey/${this.page_params.PAGE.view}.css` });
        
        res.render("layouts/survey.layout.ejs", this.page_params);
    }

    async success(req, res) {
        let response_data = await survey_model.getSurvey();
		this.page_params.PAGE.title = "Success!";
        this.page_params.PAGE.view = "success";
        this.page_params.PAGE.data = response_data;
		/* Custom css for index page */
		this.page_params.PAGE.assets.stylesheets.push({ file: `/public/css/custom/survey/${this.page_params.PAGE.view}.css` });        
    
        res.render("layouts/survey.layout.ejs", this.page_params);
    }

    async process(req, res) {
        await survey_model.createSurvey(req.body.name, req.body.dojo_location, req.body.fave_lang, req.body.comment);
        res.redirect("/success");
    }
}
module.exports = SurveyController;