module.exports = {
    port: 8000,
    session: {
        secret: 'blogdemo',
        key: 'blogdemo',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost/blogdemo'
};
