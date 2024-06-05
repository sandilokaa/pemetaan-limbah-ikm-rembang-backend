const decisionRepository = require("../repositories/decisionRepository");

class DecisionService {

    /* ------------------- Handle Get All Decision ------------------- */

    static async handleGetAllDecisions(){

        try {

            const getedAllDecisions = await decisionRepository.handleGetAllDecisions();

            return {
                status: true,
                status_code: 201,
                message: "Data displayed successfully(:",
                data: {
                    getedAllDecisions: getedAllDecisions,
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    getedAllDecisions: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Decision ------------------- */


    /* ------------------- Handle Get Decision By Id ------------------- */

    static async handleGetDecisionById({ id }) {

        try {
            
            const getedDecisionById = await decisionRepository.handleGetDecisionById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Data displayed successfully(:",
                data: {
                    getedDecisionById: getedDecisionById,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    getedDecisionById: null,
                },
            };

        }

    }


    /* ------------------- End Handle Get Decision By Id ------------------- */


    /* ------------------- Handle Update Decision By Id ------------------- */

    static async handleUpdateDecisionById({
        id,
        name,
        information,
        decision
    }) {

        try {

            const getedDecisionById = await decisionRepository.handleGetDecisionById({ id });

            if (getedDecisionById.id == id) {

                if (!name){
                    name = getedDecisionById.name;
                }
                
                if (!information){
                    information = getedDecisionById.information;
                }
                
                if (!decision){
                    decision = getedDecisionById.decision;
                }

            }

            const updatedDecisionById = await decisionRepository.handleUpdateDecisionById({
                id,
                name,
                information,
                decision
            });

            return {
                status: true,
                status_code: 201,
                message: "Data updated successfully(:",
                data: {
                    updatedDecisionById: updatedDecisionById,
                },
            };
            
        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedDecisionById: null,
                },
            };
            
        }

    };

    /* ------------------- End Handle Update Decision By Id ------------------- */

};

module.exports = DecisionService;