const path = require('path');
const {override,fixBabelImports,addWebpackAlias }=require('customize-cra');
// function resolve (dir) {
//     return path.join(__dirname, '.', dir)
// }


// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//
//     //配置别名
//     config.resolve.alias = {
//         // '@imgHome': resolve('src/assets/images')
//         '@':path.resolve(__dirname,'./src'),
//         '@imgHome':path.resolve(__dirname,'./src/assets/images')
//     };
//
//     return config;
// };

module.exports=override(
    // 配置路径别名
    addWebpackAlias({
        '@':path.resolve(__dirname,'./src'),
        '@imgHome':path.resolve(__dirname,'./src/assets/images'),
        '@cssHome':path.resolve(__dirname,'./src/assets/css'),
        '@componentsHome':path.resolve(__dirname,'./src/components'),
        '@reduxHome':path.resolve(__dirname,'./src/redux'),
        '@utilsHome':path.resolve(__dirname,'./src/utils')
    }),
    ////按需加载antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
);