let basePath = 'https://api-hmugo-web.itheima.net/api/public/v1'
function request(dynamicPath, data, method = 'GET') {
    return new Promise((resolve, reject) => {
        wx.request({
            url: basePath + dynamicPath,
            data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method,
            dataType: 'json',
            success (res) {
                let data = res.data
                if(data.meta.status === 200) {
                    resolve(data.message)
                }
            },
            fail (error) {
                reject(error)
            }
        })
    })
}

export default request