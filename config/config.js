module.exports = {
    //prod
    environment: 'dev',
    database: {
        dbName: '7yue',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'wyd112821'
    },
    security: {
        secretKey: "abdabadb",
        expiresIn: 60*60*24*30
    },
    wx: {
        appID: 'wx04cbb04ad30300a8',
        appSecret: 'e35eb6320a90cd7cfbce5d3de5638b06',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}