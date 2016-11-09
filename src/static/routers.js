const RootRoute ={
	path: '/',
	indexRoute: {
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./views/index'))
			}, 'index')
		},
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
		  cb(null, require('./component/home'))
		}, 'Home')
	},
	childRoutes: [
		//index
		{
		  path: 'index',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/index'))
		    }, 'index')
		  }
		},
		//完善企业主业
		{
		  path: 'recruit',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/recruit/recruit'))
		    }, 'recruit')
		  }
		},
		//拉勾企业服务
		{
		  path: 'trends',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/trends/trends'))
		    }, 'trends')
		  }
		},
		// 成功案例列表 
		{
		  path: 'case_list',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/case/case_list'))
		    }, 'case_list')
		  }
		},
		// 成功案例详情 
		{
		  path: 'case_detail',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/case/case_detail'))
		    }, 'case_detail')
		  }
		},
		// 按需雇佣
		{
		  path: 'employ',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/employ/employ'))
		    }, 'employ')
		  }
		},
		// 常见问题
		{
		  path: 'cq',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/common_questions/cq'))
		    }, 'cq')
		  }
		},
		// 品牌建设 - 品牌活动
		// type: 极速入职	entrant;梦想合伙人	partner;实力派 power;往期活动 activity;野心时代:times

		{
		  path: 'brand_activity/:type',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/brand/activity'))
		    }, 'brandActivity')
		  }
		},
		// 人才招聘
		// 拉钩简招 employ; 拉钩+ plus; 一拍 pai; 精准推荐 recommend; 背景调查 background
		{
		  path: 'talent/:type',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/talent/talent'))
		    }, 'talent')
		  }
		},
		// 品牌移动页面
		// type: 首页热门职位 position;  移动banner banner; 首页 logo按钮展示 logo;  首页banner index
		{
		  path: 'brand_mobile/:type',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/brand/mobile'))
		    }, 'brandMobile')
		  }
		},
		// 人力资源管理
		
		{
		  path: 'renli',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/renli/renli'))
		    }, 'renli')
		  }
		},
		// 申请成功的页面
		{
		  path: 'success',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/success/success'))
		    }, 'success')
		  }
		},
		{//路由不匹配的时候
		  path: '*',
          onEnter: (_, replaceState) => replaceState(null, "/")
		}
	]
};
module.exports = RootRoute ;
