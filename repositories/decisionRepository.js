const { Rivers, Decisions } = require("../models");

class DecisionRepository {

    /* ------------------- Handle Get All Decision ------------------- */

    static async handleGetAllDecisions(){

        const query = {
            where: {},
            attributes: [
                'id',
                'riverId',
                'governmentName',
                'information',
                'decision',
                'updatedAt'
            ],
            include: [
                {
                    model: Rivers,
                    attributes: ["name", "bod", "cod", "ph", "colorLevel", "quality", "validationFile"]
                }
            ]
        };

        const getedAllDecisions = await Decisions.findAll(query);

        return getedAllDecisions;

    };

    /* ------------------- End Handle Get All Decision ------------------- */


    /* ------------------- Handle Get Decision By Id ------------------- */

    static async handleGetDecisionById({ id }){

        const query = {
            where: { id },
            attributes: [
                'id',
                'riverId',
                'governmentName',
                'information',
                'decision'
            ],
            include: [
                {
                    model: Rivers,
                    attributes: ["name", "bod", "cod", "ph", "colorLevel", "quality", "validationFile"]
                }
            ]
        };

        const getedAllDecisions = await Decisions.findOne(query);

        return getedAllDecisions;

    };

    /* ------------------- End Handle Get Decision By Id ------------------- */


    /* ------------------- Handle Update Decision By Id ------------------- */

    static async handleUpdateDecisionById({
        id,
        governmentName,
        information,
        decision
    }) {

        const updatedDecisionById = await Decisions.update({
            governmentName,
            information,
            decision
        }, {
            where: { id }
        });

        return updatedDecisionById;

    };

    /* ------------------- End Handle Update Decision By Id ------------------- */


    /* ------------------- Handle Update Decision By Id After Update River Data ------------------- */

    static async handleDecisionAfterUpdateRiverData({ riverId, governmentName, information, decision }) {

        const updatedDecisionById = await Decisions.update({
            governmentName,
            information,
            decision
        }, {
            where: { riverId }
        });

        return updatedDecisionById;

    };

    /* ------------------- Handle Update Decision By Id After Update River Data ------------------- */


};

module.exports = DecisionRepository;