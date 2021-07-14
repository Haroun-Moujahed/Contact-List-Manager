// verify Token Middleware
function extractToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader !== undefined) {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({ status: 403, msg: "access forbidden" });
    }
}

module.exports = {
    extractToken,
};
