const wasteMappingService = require("../services/wasteMappingService");


/* ------------------- Handle Get All Rivers ------------------- */

const handleGetAllRivers = async (req, res) => {

    const { status, status_code, message, data} = await wasteMappingService.handleGetAllRivers();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Rivers ------------------- */


/* ------------------- Handle Get River By Id ------------------- */

const handleGetRiverById = async (req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await wasteMappingService.handleGetRiverById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get River By Id ------------------- */


/* ------------------- Handle Update River By Id ------------------- */

const handleUpdateRiverById = async (req, res, next) => {

    const { id } = req.params;

    const { 
        riverId, 
        decision, 
        name, 
        longitude, 
        latitude, 
        bod, 
        cod, 
        ph, 
        colorLevel, 
        quality,
        governmentName,
        information
    } = req.body;

    let picture = "";
    let validationFile = "";

    if (req.files['picture']) {
        picture = req.files['picture'][0].path;
    }
    
    if (req.files['validationFile']) {
        validationFile = req.files['validationFile'][0].path;
    }

    const { status, status_code, message, data} = await wasteMappingService.handleUpdateRiverById({ 
        id,
        riverId,
        decision,
        name,
        longitude,
        latitude,
        bod,
        cod,
        ph,
        colorLevel,
        picture,
        quality,
        validationFile,
        governmentName,
        information 
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Update River By Id ------------------- */


module.exports = { 
    handleGetAllRivers, 
    handleGetRiverById ,
    handleUpdateRiverById
};