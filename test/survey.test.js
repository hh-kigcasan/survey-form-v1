process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const SurveyModel           = require('../models/survey.model');

//Unit Tests
describe("Survey Model", function(){

    it('Should return expected data when no survey is found.', async function(){
        let surveyModel = new SurveyModel();
        let data = await surveyModel.getSurvey();

        expect(data.status).to.equal(false);
        expect(data.message).to.equal("No survey found");
    });

    it('Should successfully insert survey form values', async function(){
        let surveyModel = new SurveyModel();
        await surveyModel.createSurvey("Oliver", "Philippines", "Node", "I love Node!");

        let record = await surveyModel.getSurvey();

        expect(record.status).to.equal(true);
        expect(record.result).to.not.be.empty;
    });
});
