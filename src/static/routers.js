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
		{
		  path: 'index',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/index'))
		    }, 'index')
		  }
		},
		// common questions page
		{
		  path: 'cq',
		  getComponent(nextState, cb) {
		    require.ensure([], (require) => {
		      cb(null, require('./views/common_questions/cq'))
		    }, 'cq')
		  }
		},
		{//路由不匹配的时候
		  path: '*',
          onEnter: (_, replaceState) => replaceState(null, "/")
		}
	]
};
module.exports = RootRoute ;
