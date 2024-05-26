const jwt = require('jsonwebtoken');
const { JWT } = require("../libs/jwtSecurity");
const authRepository = require('../repositories/authRepository');
const { ROLES } = require("../libs/role");

const authenticate = async (req, res, next) => {
    
    const authHeader = req.get("Authorization");
    
    let token = "";

    if(authHeader && authHeader.startsWith("Bearer")) {
        
        token = authHeader.split(" ")[1];

    } else {

        return res.status(401).send({
            status: false,
            message: "You must log in to access this resource!",
            data: null,
        });

    }

    try {

        const { email } = jwt.verify(token, JWT.SECRET);

        const getAdminByEmail = await authRepository.handleGetAdminByEmail({ email });

        req.admin = getAdminByEmail;

        next();

    } catch(err) {

        return res.status(401).send({
            status: false,
            message:"Your session has expired, please log in again!",
            data: null,
        });

    } 

};

const authorizeUpdate = (allowedRole) => {
    return (req, res, next) => {

        const { role } = req.admin;

        if (!role || role !== allowedRole) {
            return res.status(403).json({
                status: false,
                message: "You do not have permission to perform this update.",
                data: null,
            });
        }

        next();
    };
};


module.exports = { authenticate, authorizeUpdate };