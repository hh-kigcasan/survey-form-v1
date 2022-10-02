process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const SurveyModel           = require('../models/survey.model');


describe("Survey Model", function(){

    it('Should return success message when input captcha matches.', async function(){
        let surveyModel = new SurveyModel();
        let captcha = surveyModel.captcha;
        let result = await surveyModel.verifyCaptchaInput(captcha);

        expect(result).to.equal("Success! Captcha input matched."); 
    });

    it('Should return error message when input captcha does not matched.', async function(){
        let surveyModel = new SurveyModel();
        let result = await surveyModel.verifyCaptchaInput("random");

        expect(result).to.equal("Error! Captcha input doesn't matched.");
    });
});
