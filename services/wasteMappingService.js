const wasteMappingRepository = require("../repositories/wasteMappingRepository");
const decisionRepository = require("../repositories/decisionRepository");
const fileRemove = require("../utils/fileRemove");

class WasteMappingService {

    /* ------------------- Handle Get All Rivers ------------------- */

    static async handleGetAllRivers(){

        try {

            const getedAllRivers = await wasteMappingRepository.handleGetAllRivers();

            return {
                status: true,
                status_code: 201,
                message: "Data displayed successfully(:",
                data: {
                    getedAllRivers: getedAllRivers,
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    getedAllRivers: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Rivers ------------------- */


    /* ------------------- Handle Get River By Id ------------------- */

    static async handleGetRiverById({ id }) {

        try {
            
            const getedRiverById = await wasteMappingRepository.handleGetRiverById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Data displayed successfully(:",
                data: {
                    getedRiverById: getedRiverById,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    getedRiverById: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get River By Id ------------------- */


    /* ------------------- Handle Update River By Id ------------------- */
    
    static async handleUpdateRiverById({
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
        quality
    }) {

        try {

            const getedRiverById = await wasteMappingRepository.handleGetRiverById({ id });

            if (getedRiverById.id == id) {

                if (!name){
                    name = getedRiverById.name;
                }

                if (!longitude){
                    longitude = getedRiverById.longitude;
                }

                if (!latitude){
                    latitude = getedRiverById.latitude;
                }

                if (!bod){
                    bod = getedRiverById.bod;
                }

                if (!cod){
                    cod = getedRiverById.cod;
                }

                if (!ph){
                    ph = getedRiverById.ph;
                }

                if (!colorLevel){
                    colorLevel = getedRiverById.colorLevel;
                }

                if (!picture){
                    picture = getedRiverById.picture;
                } else {
                    fileRemove(getedRiverById.picture)
                }

                if (!quality){
                    quality = getedRiverById.quality;
                }

            }

            const updatedRiverById = await wasteMappingRepository.handleUpdateRiverById({
                id,
                name,
                longitude,
                latitude,
                bod,
                cod,
                ph,
                colorLevel,
                picture,
                quality
            });

            const updatedDecisionById = await decisionRepository.handleDecisionAfterUpdateRiverData({ riverId: getedRiverById.id, decision: 'under review'})

            return {
                status: true,
                status_code: 201,
                message: "Data updated successfully(:",
                data: {
                    updatedRiverById: updatedRiverById,
                    updateDecisionById: updatedDecisionById
                },
            };
            
        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedRiverById: null,
                },
            };
            
        }

    };
    
    /* ------------------- End Handle Update River By Id ------------------- */


};

module.exports = WasteMappingService;