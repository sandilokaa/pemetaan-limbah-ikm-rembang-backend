const { Admins } = require("../models");

class AuthRepository {

    /* ------------------- Handle Get User By Email ------------------- */

    static async handleGetAdminByEmail({ email }) {
        
        const getAdminByEmail = await Admins.findOne({
            where : { email }
        });

        return getAdminByEmail;

    };

    /* ------------------- End Handle Get User By Email ------------------- */

};

module.exports = AuthRepository;