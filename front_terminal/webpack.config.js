const path=require('path');
module.exports={
    resolve:{
        alias:{
            '@imgHome': path.resolve('src/assets/images'),
            '@':path.resolve(__dirname,'./src'),
            '@cssHome':path.resolve(__dirname,'./src/assets/css')
        }
    },
};