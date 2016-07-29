var UiMaker=require('./UiMaker');
const $ = require('jquery');
require('jquery-ui');

class GameUserInterface{
	constructor() {
		this.$game = $(".game");
		this.$itemDeck=this.$game.find('.code-preparing-table');
		this.$playground=this.$game.find(".playground");
		this.uim=new UiMaker();
	}

	init() {
		this.uim.resetDeck();
		for(var i=0;i<10;i++) 
		{
			this.uim.makeDropRow();
		}
		this.makeOnlyFirstRowDroppable();
	}

	makeOnlyFirstRowDroppable()
	{
		console.log($(".guess-row:not(:first)").find('.guess-cell'));
		$(".guess-row:not(:first)").find('.guess-cell').droppable('disable');
	}





}


module.exports=GameUserInterface;