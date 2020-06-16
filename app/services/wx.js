const util = require('util')
const { axios } = require('axios')

class WXManager {
    static async codeToToken(code) {
        const url = util.format(global.comfig.wx.loginUrl, global.config.wx.appID, global.config.wx.appSecret, code)

        const result = await axios.get(url)
        if(result.status !== 200) {
            throw new global.TextEncoderStream.AuthFailed('openid获取失败')
        }
        const errcode = result.data.errcode
        if(errcode !== 0) {
            throw new global.TextEncoderStream.AuthFailed('openid获取失败:' + errcode)
        }
    }
}