(function(){
	var app = angular.module('main-app', ['ngAnimate']);
	
	app.controller('PortfolioController', ['$scope', '$sce', function($scope, $sce) {
		this.itemOpacity = 0;
		this.items = [	{nameshort: "GB Jam", name: "GameBoy Jam", desc: "This prototype was made as part of a GB Jam, mimicking the style of Zelda - Link's Awakening", img: ['protogb2x.png'], infos: [{title: 'Game Engine', value: '<a href="https://www.scirra.com/construct2">Construct 2</a>'}, {title: 'Date', value: 'August 2014'}, {title: 'Service', value: '<a href="http://jams.gamejolt.io/gbjam3">GB Jam</a>'}]},
						{nameshort: "Ludum Dare 27", name: "Ludum Dare 27 Prototype - 10 seconds", desc: "This game prototype was made as a solo entry for the LD 27, a simple action platformer with proceduraly generated rooms and enemies, with multiple classes", img: ['gamescreen.png', 'menuscreen.png'], infos: [{title: 'Game Engine', value: '<a href="https://www.scirra.com/construct2">Construct 2</a>'}, {title: 'Date', value: 'August 2013'}, {title: 'Service', value: '<a href="http://www.ludumdare.com/compo/">Ludum Dare</a>'}]},
						{nameshort: "Ludum Dare 28", name: "Ludum Dare 28 Prototype - You only get one", desc: 'This game prototype was made as a solo entry for the LD 28, it\'s a point and click type of game with a crafting mechanic, focused on exploration and proceduraly generated rooms, where you only have one life', img: ['LD28screen.png'], infos: [{title: 'Game Engine', value: '<a href="https://www.scirra.com/construct2">Construct 2</a>'}, {title: 'Date', value: 'December 2013'}, {title: 'Service', value: '<a href="http://www.ludumdare.com/compo/">Ludum Dare</a>'}]},
						{nameshort: "Space Typing", name: 'Space Typing', desc: "A simple multiplayer typing game. Words appear, and you have to type them faster than your opponent. This runs on WebRTC, so nothing but a signaling server, you're directly connected to a peer", img: ['spacetyping.png', 'spaceTypingGame.png'], infos: [{title: 'Technologies', value: '<a href="https://www.scirra.com/construct2">Construct 2</a> & WebRTC'}, {title: 'Assets', value: '<a href="http://www.kenney.nl/">Kenney</a>'}, {title: 'Date', value: 'April 2014'}, {title: 'Service', value: '<a href="https://b97accc8f6af4a58b9a050cf84b90abb8f57386e.googledrive.com/host/0B_Bg9vBRbTRgZHpBaXlxY1oyZjg/index.html"> Play</a>'}]},
						{nameshort: "Weird Universe", name: "Weird Universe Prototype", desc: "A 3D exploration game with small planets, an equipment and merchant system, tree creation / harvesting, and randomly generated planets.", img: ['universeGame2.png', 'universeGame2Editor.png', 'firstscreen.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'April 2012'}]},
						{nameshort: "The Cartographer", name: "The Cartographer Prototype", desc: "An Adventure RPG in 3D with pixel art textures, it was supposed to have a counter/block system but the project was scraped before it could be implemented", img: ['zeldalike.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'March 2013'}]},
						{nameshort: "Planet Gravity", name: "Planet Gravity Experiment", desc: "Testing planet-like gravity with a simple Octree Collision System", img: ['toontest1.png', 'toontest2.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'March 2012'}, {title: 'Service', value: '<a href="https://7085f03ba95a4488e1bb4ffc2567d8dda6ff720b.googledrive.com/host/0B_Bg9vBRbTRgNWVKNGx3Yng1cjQ/WebBuild.html"> Early Version</a>'}]},
						{nameshort: "W.I.P", name: "A Work In Progress Prototype", desc: "So far it's a pretty basic dungeon crawler, with RPG elements", img: ['wip1.png', 'wip2.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Assets', value: '<a href="http://shop.bitgem3d.com/">Bitgem3D</a>'}, {title: 'Date', value: 'September 2014'}]},
						{nameshort: "Small 2D World", name: "Small 2D World", desc: "Similar to the 3D game about planets, except in 2D and with a lot a experimental shaders (starry galaxy with simplex noise, lava with voronoi noise)", img: ['2Duniverse.jpg'], infos: [{title: 'Game Engine', value: '<a href="https://www.scirra.com/construct2">Construct 2</a>'}, {title: 'Assets', value: '<a href="http://kyzoo.tumblr.com/">Clement Danveau</a>'}, {title: 'Date', value: 'December 2012'}, {title: 'Service', value: '<a href="https://29c79ff666237fcdb223e450f76f2d8bc00fd04a.googledrive.com/host/0B_Bg9vBRbTRgTTlSU0dRcFZKMkU/index.html"> Try Old Version</a> Controls: Arrow Keys X C F'}]},
						{nameshort: "The Pied Piper", name: "The Pied Piper", desc: "The game was the result of a collaboration of myself and 5 other students as a final year project. It was an FPS with an emphasis on mind control, and stealth.", img: ['fpgmM.jpg', 'paMuK.jpg'], infos: [{title: 'Game Engine', value: '<a href="http://www.crytek.com/cryengine/cryengine3/overview">Cry Engine 3</a>'}, {title: 'Assets', value: '<a href="http://www.crytek.com/cryengine/cryengine3/overview">Crytek</a> & Myself'}, {title: 'Date', value: 'October 2012'}, {title: 'Service', value: '<a href="https://www.youtube.com/watch?v=1DqnOn9Q2BQ"> See Trailer</a>'}]},
						{nameshort: "Wind Waker Water", name: "Wind Waker Water Shader", desc: "I simply wanted to make a cartoony water shader, and I really liked the water in Zelda The Wind Waker. Simplex noise is used for the vertex displacement.", img: ['windwakerwaterproto.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'October 2013'}, {title: 'Video', value: '<a href="https://www.youtube.com/watch?v=I7ezsZ_m9g0"> Watch It</a>'}]},
						{nameshort: "Fur / Grass", name: "Fur / Grass Shader", desc: "I tried the recreate the Shells and Fins Technique, used in Shadow of the Colossus, to create a Fur or Grass like texture.", img: ['furpic1.png', 'furpic2.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'August 2014'}, {title: 'Video', value: '<a href="https://www.youtube.com/watch?v=Svx7iKNIjAw"> Watch It</a>'}]},
						{nameshort: "Adventure Engine", name: "A Choose Your Own Adventure Engine", desc: "A really simple engine to create a choose your own adventure web game. You only supply a JSON with \"adventure nodes\" and choices, in order to create a simple game.", img: ['lelrpg.png'], infos: [{title: 'Technology', value: '<a href="https://www.scirra.com/construct2">Construct 2</a>'}, {title: 'Assets', value: '<a href="http://www.kenney.nl/">Kenney</a>'}, {title: 'Date', value: 'September 2012'}, {title: 'Service', value: '<a href="https://0c235f59356aaee9bdcd3bcac1b55d4b3237511f.googledrive.com/host/0B_Bg9vBRbTRgQzRGWF9ZWGQxMlk/index.html"> Try the Demo</a>'}]},
						{nameshort: "Heigtmap and Mesh", name: "Heigtmap and Mesh Creation Experiment", desc: "I played around with runtime mesh creation and heightmap modification, you can create a plane of any size, and alter it's heightmap with bouncy interpolation.", img: ['meshgen.png'], infos: [{title: 'Game Engine', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'July 2014'}, {title: 'Video', value: '<a href="https://www.youtube.com/watch?v=HtR1dC4EJmw"> Watch It</a>'}]},
						{nameshort: "2D Tilemapper", name: "Unity 2D Tilemapper", desc: "A simple 2D Tile Mapper for Unity.", img: ['tilemapper.png'], infos: [{title: 'Technologies', value: '<a href="http://unity3d.com/">Unity3D</a>'}, {title: 'Date', value: 'August 2014'}, {title: 'Video', value: '<a href="https://www.youtube.com/watch?v=_x0bMTxP7Yw"> Watch It</a>'}, {title: 'Service', value: '<a href="stuff/2DTileMaps.zip"> Unity Editor Plugin</a>'}]},
						{nameshort: "Shader and WebRTC", name: "Shader and WebRTC Experiment", desc: "A little experiment with a custom alpha threshold shader and WebRTC. You create a room and people can join, moving the mouse creates a trailing paint like effect", img: ['webpainter.png'], infos: [{title: 'Technologies', value: '<a href="https://www.scirra.com/construct2">Construct 2</a> & <a href="http://www.webrtc.org/">WebRTC</a>'}, {title: 'Date', value: 'February 2013'}, {title: 'Service', value: '<a href="https://29a7071a5aeb6b73d02f0846a1b696125ebf4be6.googledrive.com/host/0B_Bg9vBRbTRgOTVzcWJ4YnRhUFk/index.html"> Try the Demo</a></strong>'}]},
						{nameshort: "SongFeed", name: "SongFeed", desc: "A social website that allows you to share music and follow other people's feed", img: ['songfeedmain.jpg', 'songfeed.jpg', 'songfeed2.jpg'], infos: [{title: 'Technologies', value: 'Custom PHP Framework & Jquery/HTML5'}, {title: 'Worked With', value: '<a href="http://www.selkweb.com/">Thiebaud Ernstberger</a>'}, {title: 'Date', value: 'September 2014'}, {title: 'Service', value: '<a href="http://songfeed.eu/"> Visit the Site</a>'}]},
						{nameshort: "Click Me", name: "Click Me", desc: "A really stupid experiment, using Socket.io and NodeJS.", img: ['clickme.png'], infos: [{title: 'Technologies', value: '<a href="http://socket.io/">Socket.io</a> & <a href="http://nodejs.org/">NodeJS</a>'}, {title: 'Date', value: 'August 2014'}, {title: 'Service', value: '<a href="http://whydontyouclick.me/"> Visit the Website</a>'}]},
						{nameshort: "Product Creator", name: "Custom Product Creator", desc: "Client side HTML5 based Product Creator, that can be used to create and order a variety of products, like T-Shirts, iPhone Cases, Stickers etc", img: ['tshirtbiz1.jpg', 'tshirtbiz2.jpg'], infos: [{title: 'Technologies', value: '<a href="https://angularjs.org/">AngularJS</a></strong> & <strong><a href="http://fabricjs.com/">FabricJS</a>'}, {title: 'Date', value: 'September 2014'}, {title: 'Service', value: '<a href="https://499b1ddc0f3e7f48967f89333d2d1bd9ce3a6da4.googledrive.com/host/0B_Bg9vBRbTRgc3pteXltWDB0T3M/index.html"> Try the Demo</a>'}]},
						{nameshort: "E3Prints", name: "E3Prints", desc: "A website where you can order printed products, with an HTML5 powered Business Card Designer.", img: ['e3prints.jpg', 'e3prints2.jpg'], infos: [{title: 'Technologies', value: 'Custom PHP Framework & Jquery/HTML5 & <a href="http://fabricjs.com/">Fabric.js</a>'}, {title: 'Worked With', value: '<a href="http://www.selkweb.com/">Thiebaud Ernstberger</a>'}, {title: 'Date', value: 'May 2014'}, {title: 'Service', value: '<a href="http://e3prints.com/"> Visit the Site</a>'}]}
					];
		
		// METHODS
		
		this.toTrusted = function(html_code) {
    		return $sce.trustAsHtml(html_code);
		};
		
		$scope = this;
		
		angular.element(document).ready(function () {
			console.log("hey yooo");
			console.log($scope);
			$scope.itemOpacity = 1;
			console.log($scope.itemOpacity);
		});
		
	}]);
	
	app.directive('about', function() {
		return ({
			restrict: 'E',
			templateUrl: 'template-about.html'
		});
	});
	
	app.directive('portfolio', function() {
		return ({
			restrict: 'E',
			templateUrl: 'template-portfolio.html'
		});
	});
	
	app.directive('portfoliomodal', function() {
		return ({
			restrict: 'E',
			templateUrl: 'template-portfolio-modal.html'
		});
	});
	
	app.directive('portfolioheader', function() {
		return ({
			restrict: 'E',
			templateUrl: 'template-portfolio-header.html'
		});
	});
	
	app.directive('portfoliofooter', function() {
		return ({
			restrict: 'E',
			templateUrl: 'template-portfolio-footer.html'
		});
	});
	
	
})();