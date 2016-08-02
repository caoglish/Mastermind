//jshint esversion: 6
const $ = require('jquery');
var GameUserInterface=require('./GameUserInterface');
var GameEngine=require('./GameEngine');

$(() => {
	let ge = new GameEngine();
	let gui= new GameUserInterface();

	ge.start();
	let $codeItem = $('.code-item').draggable();
});