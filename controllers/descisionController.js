const decisionService = require("../services/decisionService");


/* ------------------- Handle Get All Decision ------------------- */

const handleGetAllDecisions = async (req, res, next) => {

    const { status, status_code, message, data} = await decisionService.handleGetAllDecisions();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Decision ------------------- */


/* ------------------- Handle Get Decision By Id ------------------- */

const handleGetDecisionById = async (req, res, next) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await decisionService.handleGetDecisionById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Decision By Id ------------------- */


/* ------------------- Handle Update Decision By Id ------------------- */

const handleUpdateDecisionById = async (req, res, next) => {

    const { id } = req.params;

    const { decision } = req.body;

    const { status, status_code, message, data} = await decisionService.handleUpdateDecisionById({ id, decision });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Update Decision By Id ------------------- */


module.exports = { 
    handleGetAllDecisions,
    handleGetDecisionById,
    handleUpdateDecisionById
};