const $ = require('jquery');
require('jquery-ui');
const NumberGenerator=require('./NumberGenerator');
const GameUserInterface=require('./GameUserInterface');

class GameEngine {
	constructor() {
		this.gui= new GameUserInterface();
		this.answer=[];
	}

	test(){
		let ng=new NumberGenerator();
		this.answer=ng.generateFourNumbers().getFourNumbers();
		this.gui.init();
		

	}

}

module.exports=GameEngine;


