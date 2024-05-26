const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ROLES } = require("./libs/role");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");
const wasteMappingController = require("./controllers/wasteMappingController");

// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //

const middleware = require("./middlewares/auth");

// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //


/* -------------- Auth Endpoint -------------- */

app.post('/api/v1/auth/login', authController.handleAdminLogin);
app.get('/api/v1/auth/me', middleware.authenticate, authController.handleCurrentUser);

/* -------------- End Auth Endpoint -------------- */


/* -------------- Waste Mapping Endpoint -------------- */

app.get('/api/v1/rivers', wasteMappingController.handleGetAllRivers);
app.get('/api/v1/rivers/:id', wasteMappingController.handleGetRiverById);
app.put('/api/v1/rivers/:id', middleware.authenticate, middleware.authorizeUpdate(ROLES.SMES), wasteMappingController.handleUpdateRiverById);

/* -------------- End Waste Mapping Endpoint -------------- */


// ------------------------- End Define Routes ------------------------- //


// ------------------------- Server Listen ------------------------- //

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT http://localhost:${PORT}`);
});

// ------------------------- End Server Listen ------------------------- //

module.exports = app;