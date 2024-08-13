//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true,
//  lintOnSave:false//关闭eslint校验
//})
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  // 配置代理跨域
  // devServer: {
  
  //   proxy: {
  //     '/api': {
  //       target: "http://localhost:5000",
        
  //     }
  //   }


  // }

//   devServer: {
//     open: true,//是否自动弹出浏览器页面
//     host: 'localhost',
//     port: 8001,
//     https: false,
//     hotOnly: false,
//     proxy: {
//       '/api': {
//         // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
//         // 注意是以/api开头，即：axios.post({url: '/api/xxx/
//          target: 'http://localhost:8000',     //'服务器真实地址',
//         // 此处target的意义在于：造成跨域是因为访
//         // 问的host与我们的请求头里的origin不一致，所以我们要设置成一致，
//         changeOrigin: true // 是否跨域
//       }
//     }
//   }

  devServer: {                //devServer//设置本地默认端口  选填
    open: true,//是否自动弹出浏览器页面
    host: '127.0.0.1',
    // port: 8001,
    https: false,
    // hotOnly: false,
    port: '4056', // 默认端口为8080，此端口冲突，也会出现代理异常的情况
    // port: '8080', // 默认端口为8080，此端口冲突，也会出现代理异常的情况

    proxy: {                 //设置代理，必须填
        '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
            target: 'http://127.0.0.1:4057',     //代理的目标地址
            changeOrigin: true,              //是否设置同源，输入是的
            // pathRewrite: {                   //路径重写
            //     '/api': ''                     //选择忽略拦截器里面的单词
            // }
        },
        '/arg': {  
          target: 'http://127.0.0.1:5000', // 另一个代理的目标地址  
          changeOrigin: true, // 是否跨域  
          // pathRewrite: { '^/api2': '' } // 如果需要路径重写，可以添加  
        },
        '/lida': {  
          target: 'http://127.0.0.1:9540', // 另一个代理的目标地址  
          changeOrigin: true, // 是否跨域  
          // pathRewrite: { '^/api2': '' } // 如果需要路径重写，可以添加  
        }    
    }
    
}

})