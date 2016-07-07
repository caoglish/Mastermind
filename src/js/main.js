const $ = require('jquery');
var UiMaker=require('./UiMaker');
var GameEngine=require('./GameEngine');


$(() => {
	$('body').append(`jquery: ${$().jquery}`);
	let uim = new UiMaker();
	let ge = new GameEngine();
	console.log(uim.test());
	ge.test();

	uim.resetDeck()
	uim.makeDropRow();
	for(var i=0;i<10;i++) 
			{
				uim.makeDropRow();
			}

    $('body').dblclick(function(){
    	uim.resetDeck()
    });

		
	

	
	
	//$playground=
	let $codeItem = $('.code-item').draggable();
})();