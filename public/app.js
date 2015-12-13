angular.module("homepage", ["ui.router", "ui.bootstrap", "angular-skycons"]).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home/dashboard");

	$stateProvider
///////////////////////// LOGIN STATES //////////////////////////////////////////////////////////

		// .state("login", {
		// 	url: "/login", 
		// 	controller: "loginCtrl",
		// 	templateUrl: "templates/login.html",
		// })
		// .state("register", {
		// 	url: "/register", 
		// 	controller: "registerCtrl",
		// 	templateUrl: "templates/register.html",
		// })

///////////////////////// HOME STATE //////////////////////////////////////////////////////////

		.state("home", {
			url: "/home",
			controller: "homeCtrl",
			templateUrl: "templates/home/home.html",
			resolve: {
				World: function($stateParams, newsService){
					return newsService.getWorldNewsHeadlines();
				},
				National: function($stateParams, newsService){
					return newsService.getNationalNewsHeadlines();
				},
				Politics: function($stateParams, newsService){
					return newsService.getPoliticsHeadlines();
				},
				Business: function($stateParams, newsService){
					return newsService.getBusinessHeadlines();
				},
				Technology: function($stateParams, newsService){
					return newsService.getTechnologyHeadlines();
				},
				Opinion: function($stateParams, newsService){
					return newsService.getOpinionHeadlines();
				},
				Health: function($stateParams, newsService){
					return newsService.getHealthHeadlines();
				},
				Arts: function($stateParams, newsService){
					return newsService.getArtsHeadlines();
				},
				Fashion: function($stateParams, newsService){
					return newsService.getFashionHeadlines();
				},
				Travel: function($stateParams, newsService){
					return newsService.getTravelHeadlines();
				},
				Sports: function($stateParams, sportsService){
					return sportsService.getSportsHeadlines();
				},
				Weather: function($stateParams, weatherService){
					return weatherService.getCurrentLocationWeather();
				},
			}
		})
		.state("home.dashboard", {
			url: "/dashboard",
			controller: "homeCtrl",
			templateUrl: "templates/home/homeHome.html",
		})


///////////////////////// TODO STATES //////////////////////////////////////////////////////////

		.state("todo", {
			url: "/todo",
			controller: "todoHomeCtrl",
			templateUrl: "templates/todo/todoHome.html",
		})
		.state("todo.active", {
			url: "/active",
			controller: "activeCtrl",
			templateUrl: "templates/todo/active.html",
		})
		.state("todo.add", {
			url: "/add",
			controller: "addCtrl",
			templateUrl: "templates/todo/add.html",
		})
		.state("todo.edit", {
			url: "/edit/:id",
			controller: "editCtrl",
			templateUrl: "templates/todo/edit.html",
		})
		.state("todo.complete", {
			url: "/completed",
			controller: "completeCtrl",
			templateUrl: "templates/todo/complete.html",
		})

///////////////////////// NEWS STATES //////////////////////////////////////////////////////////

		.state("home.news", {
			url: "/",
			templateUrl: "templates/news/newsHomeHome.html",
		})
		.state("home.news.all", {
			url: "news",
			templateUrl: "templates/news/newsHome.html",
		})
		.state("home.news.world", {
			url: "news/world",
			templateUrl: "templates/news/newsWorld.html",
		})
		.state("home.news.national", {
			url: "news/national",
			templateUrl: "templates/news/newsNational.html",
			
		})
		.state("home.news.politics", {
			url: "news/politics",
			templateUrl: "templates/news/newsPolitics.html",
			
		})
		.state("home.news.business", {
			url: "news/business",
			templateUrl: "templates/news/newsBusiness.html",
			
		})
		.state("home.news.technology", {
			url: "news/technology",
			templateUrl: "templates/news/newsTechnology.html",
			
		})
		.state("home.news.opinion", {
			url: "news/opinion",
			templateUrl: "templates/news/newsOpinion.html",
			
		})
		.state("home.news.health", {
			url: "news/health",
			templateUrl: "templates/news/newsHealth.html",
			
		})
		.state("home.news.arts", {
			url: "news/arts",
			templateUrl: "templates/news/newsArts.html",
			
		})
		.state("home.news.fashion", {
			url: "news/fashion",
			templateUrl: "templates/news/newsFashion.html",
			
		})
		.state("home.news.travel", {
			url: "news/travel",
			templateUrl: "templates/news/newsTravel.html",
			
		})

///////////////////////// SPORTS STATES //////////////////////////////////////////////////////////

		.state("home.sports", {
			url: "/sports",
			controller: "sportsHomeCtrl",
			templateUrl: "templates/sports/sportsHome.html",
		})

///////////////////////// WEATHER STATES //////////////////////////////////////////////////////////

		.state("home.weather", {
			url: "/weather",
			controller: "weatherHomeCtrl",
			templateUrl: "templates/weather/weatherHome.html",
		})
		.state("home.weather.current", {
			url: "/current",
			templateUrl: "templates/weather/weatherCurrent.html",
		})
		.state("home.weather.seven", {
			url: "/seven-day",
			templateUrl: "templates/weather/weatherSeven.html",
		})
		.state("home.weather.hourly", {
			url: "/hourly",
			templateUrl: "templates/weather/weatherHourly.html",
		})
		.state("home.weather.lookup", {
			url: "/lookup",
			templateUrl: "templates/weather/weatherLookup.html",
		})












});














