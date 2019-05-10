var proxy = require('http-proxy-middleware');
module.exports = {
    entry:{ index:'./scr/index.js', },
    output:{ path:__dirname, filename:'[name].build.js', },
    module:{ loaders:[] },
    resolve:{ extensions:['.js',".css",".jsx"] },
    devServer: {
        proxy: {
            '/api/users': { // api表示当前项目请求的key
                target: 'http://localhost:8080',// 代理服务器路径
                 pathRewrite: {'^/api/users' : '/'}, // 重写路径
                 changeOrigin: true
            }
        }
    }
};
