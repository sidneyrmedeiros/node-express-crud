
module.exports = (req, res, next) => {
    try {
        // validation
        // Header names in Express are auto-converted to lowercase
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        // Remove Bearer from string
        token = token.replace(/^Bearer\s+/, "");
        const privateKey = "compass.uol";

        // validanting JWT:
        const jwtService = require("jsonwebtoken");
        jwtService.verify(token, privateKey, (err, userInfo) => {
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