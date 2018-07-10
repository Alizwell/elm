import  App  from  '../app.vue'

var  home = r => require.ensure([],()=>r(require('../page/home/home')),'home')
var  login = r => require.ensure([],()=>r(require('../page/login/login')),'login')

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
		{
			path:'/login',
			component:login
		}
	]
}]