import { Base64 } from 'js-base64'

Page({
  onGetToken() {
    wx.login({
      success: (res) => {
        if(res.code) {
          wx.request({
            url: 'http://localhost:3000/v1/token/',
            method: 'POST',
            data: {
              account: res.code,
              type: 100
            },
            success: (res) => {
              console.log(res.data.token)
              const code = res.statusCode.toString()
              if(code.startsWith('2')) {
                wx.setStorageSync('token', res.data.token)
              }
            }
          })
        } 
      }
    })
  },

  onVerifyToken() {
    wx.request({
      url: 'http://localhost:3000/v1/token/verify',
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      success: res => {
        console.log(res.data)
      }
    })
  },

  onGetLatest() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/latest',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._endoce()
      }
    })
  },

  _endoce() {
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token + ':')
    return 'Basic' + base64
  }
})