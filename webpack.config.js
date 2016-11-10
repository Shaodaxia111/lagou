var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);//根路径
var STATIC_PATH = path.resolve(ROOT_PATH,'src/static');//静态资源路径
var DIST_PATH = path.resolve(ROOT_PATH,'dist');//文件打包后路径
var VIEWS_PATH = path.resolve(ROOT_PATH, 'src/template'); //模板目录
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules'); //包目录
//获取构建环境
var isProduction = process.env.NODE_ENV ==='production' ? true : false;
//配置模板目录
var plugins = [];
var entryJs={
    'index' : STATIC_PATH + '/index.js'
};
var conf = {
    template: './src/template/index.html',
    filename: path.resolve(ROOT_PATH,'index.html'),
    inject:"body",
    chunks:['index','vender']
}
plugins.push(new HtmlwebpackPlugin(conf));


var extractCSS ;
//配置环境(测试环境 or 生产环境)
if(isProduction){
	extractCSS = new ExtractTextPlugin('css/[name].[hash].css');//css独立出来
    plugins.push(extractCSS,
        new webpack.optimize.UglifyJsPlugin({//文件压缩
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({//注入参数
            "process.env": { 
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
            },
            "commonPath":"http://bxu2359100290.my3w.com/lagou/"
        }),
        new webpack.optimize.DedupePlugin(),//去重
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()//允许错误不打断程序
    ); 
}else{
     new webpack.DefinePlugin({//注入参数
        "process.env": { 
            NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
        };
        "commonPath":"/src/"
    }),
	extractCSS = new ExtractTextPlugin('css/[name].css');//css独立出来
    plugins.push(extractCSS,new webpack.HotModuleReplacementPlugin()); 
}
module.exports={
	//项目的入口文件
	entry: Object.assign(entryJs,{
		'vender':['react','react-dom']
	}),
	//项目输出的文件配置
	output:{
		path:DIST_PATH,
		filename : isProduction ? 'js/[name].[hash].js' : 'js/[name].js',
    	publicPath:isProduction ? 'http://bxu2359100290.my3w.com/lagou/':'/dist/',
        chunkFilename: isProduction ? 'js/[name].[hash].js' : 'js/[name].js'
	},
	module: {
	    loaders: [
            {//通过额外插件,独立出css样式
                test: /\.css$/,
                loader:ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {//处理图片等静态文件
                test:/\.(jpe?g|png|gif)$/,
                loader:'url?limit=8192&name=img/[name].[ext]'//<= 8kb 的图自动转换成base64编码 dataurl 
            },
            {//添加对es6的支持 and js语法标准检测
              test: /\.js|jsx$/,
              exclude: /node_modules/,
              loaders:['babel','eslint-loader'] 
            }
	    ]
	},
	resolve: {//定义能够被打包的文件，文件的后缀名
        //查找module的话从这里开始查找
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js','.jsx','.json', '.scss'],
        //模块别名的定义
        alias:{
            'jquery':path.join(NODE_PATH,"/jquery/dist/jquery.min.js")
        }
    },
 	plugins:[//添加插件
		new webpack.optimize.CommonsChunkPlugin({//将公共模块提取
	        name:['vender'],
	        filename:'js/[name].js',
	        minChunks: Infinity
    	}),
        new webpack.ProvidePlugin({//提供全局的变量，在模块中使用无需用require引入
            jQuery: "jquery",
            $: "jquery",
        }),
	].concat(plugins),
    devServer:{//webpack热服务
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: {
            cached: false,
            colors: true
        }
    },
    eslint: {
      configFile: './.eslintrc'
    }
};
