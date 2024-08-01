const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        if (!token.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Token format is incorrect' });
        }
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Token verification failed:', err);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = auth;
