const wasteMappingRepository = require("../repositories/wasteMappingRepository");

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

    }

    /* ------------------- End Handle Get River By Id ------------------- */


    /* ------------------- Handle Update River By Id ------------------- */
    
    static async handleUpdateRiverById({
        id,
        name,
        longitude,
        latitude,
        bod,
        cod,
        ph,
        colorLevel
    }) {

        try {

            const getedRiverById = await wasteMappingRepository.getedRiverById({ id });

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

            }

            const updatedRiverById = await wasteMappingRepository.handleUpdateRiverById({
                id,
                name,
                longitude,
                latitude,
                bod,
                cod,
                ph,
                colorLevel
            });

            return {
                status: true,
                status_code: 201,
                message: "Data updated successfully(:",
                data: {
                    updatedRiverById: updatedRiverById,
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