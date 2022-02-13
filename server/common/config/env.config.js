const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3600",
    "apiEndpoint": "http://localhost:3600",
    "jwt_secret":process.env.JWT_SECRET,
    "jwt_expiration_in_seconds": process.env.JWT_EXPIRATION_IN_SECONDS,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    },
    "mongoConnect" : process.env.MONGO_CONNECT
};
