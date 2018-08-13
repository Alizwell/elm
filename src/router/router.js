import  App  from  '../app.vue'

const  home = r => require.ensure([],()=>r(require('../page/home/home')),'home')
const  login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

export  default [{
	path:'/',
	component:App,
	children:[
		{
			path:'',
			redirect:'/home'
		},
		{
			path:'/home',
			component:home
		},
		//登录注册页
		{
			path: '/login',
			component: login
		},
	]
}]