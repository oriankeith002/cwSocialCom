const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "OUR_SECRET_KEY",
    mongoUri: process.env.MONGODB_URI || 
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' + 
        (process.env.MONGO_PORT || '27017') + 
        '/socialAppDb'
}

module.exports = config