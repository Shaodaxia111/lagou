const RootRoute ={
	path: '/',
	indexRoute: {
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('../page1/page1'))
			}, 'Page1')
		},
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
		  cb(null, require('../common/home'))
		}, 'Home')
	},
	childRoutes: [
		{
		  path: 'page1',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('../page1/page1'))
		    }, 'Page1')
		  }
		},
		{
		  path: 'page2',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('../page2/page2'))
		    }, 'Page2')
		  }
		},
		{//路由不匹配的时候
		  path: '*',
          onEnter: (_, replaceState) => replaceState(null, "/")
		}
	]
};
module.exports = RootRoute ;
