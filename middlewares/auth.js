
module.exports = (req, res, next) => {
    try {
        // validation
        const jwt = req.headers["authorization"];
        const privateKey = "compass.uol";

        // validanting JWT:
        const jwtService = require("jsonwebtoken");
        jwtService.verify(jwt, privateKey, (err, userInfo) => {
            if (err) {
                res.status(403).end();
                return;
            }
            req.userInfo = userInfo;
            next();
        });

    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" })
    }
}