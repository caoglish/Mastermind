//jshint esversion: 6
const $ = require('jquery');
//var UiMaker=require('./UiMaker');
var GameUserInterface=require('./GameUserInterface');
var GameEngine=require('./GameEngine');


$(() => {
	//console.log($("template#guess-row").html());
	$('body').append(`jquery: ${$().jquery}`);
	//let uim = new UiMaker();
	let ge = new GameEngine();
	let gui= new GameUserInterface();
	//console.log(uim.test());
	ge.init();
	ge.activeDropCell();

	//uim.resetDeck();
	//gui.init();
	// uim.makeDropRow();
	// for(var i=0;i<10;i++) 
	// 		{
	// 			uim.makeDropRow();
	// 		}



//     $('body').dblclick(function(){
// //    	uim.resetDeck()
//     });

	let $codeItem = $('.code-item').draggable();
});