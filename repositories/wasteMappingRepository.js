const { Rivers, Decisions } = require("../models");

class WasteMappingRepository {

    /* ------------------- Handle Get All Rivers ------------------- */

    static async handleGetAllRivers(){

        const query = {
            where: {},
            attributes: [
                'id',
                'name',
                'longitude',
                'latitude',
                'bod',
                'cod',
                'ph',
                'colorLevel',
                'picture',
                'quality',
                'validationFile',
                'updatedAt'
            ],
            include: [
                {
                    model: Decisions,
                    attributes: ["governmentName", "information", "decision", "updatedAt"]
                }
            ]
        }

        const getedAllRivers = await Rivers.findAll(query);

        return getedAllRivers;

    };

    /* ------------------- End Handle Get All Rivers ------------------- */


    /* ------------------- Handle Get River By Id ------------------- */
    
    static async handleGetRiverById({ id }) {

        const query = {
            where: { id },
            attributes: [
                'id',
                'name',
                'longitude',
                'latitude',
                'bod',
                'cod',
                'ph',
                'colorLevel',
                'picture',
                'quality',
                'validationFile',
                'updatedAt'
            ]
        }

        const getedRiverById = Rivers.findOne(query);

        return getedRiverById

    };
    
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
        colorLevel,
        picture,
        quality,
        validationFile
    }) {

        const updatedRiverById = await Rivers.update({
            name,
            longitude,
            latitude,
            bod,
            cod,
            ph,
            colorLevel,
            picture,
            quality,
            validationFile
        }, {
            where: { id }
        });

        return updatedRiverById;

    };

    /* ------------------- End Handle Update River By Id ------------------- */    


};

module.exports = WasteMappingRepository;