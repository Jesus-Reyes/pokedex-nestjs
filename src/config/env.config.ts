



export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB || 'mongodb://localhost:27017/nest-pokemon',
    defaultLimit: + (process.env.DEFAULT_LIMIT ?? 10),
    defaultOffset: +(process.env.DEFAULT_OFFSET ?? 0),

});



