//jshint esversion: 6
var UiMaker=require('./UiMaker');
const $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/droppable');

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

		this.$allDropCell=this.$playground.find(".guess-cell.ui-droppable");
		this.$allDropCell.droppable({
			drop : function (dropEvent,ui) {
				$(this).trigger("dropItem",[dropEvent,ui]);
			}
		});
		this.makeOnlyFirstRowDroppable();
	}

	makeOnlyFirstRowDroppable()
	{
		this.$playground.find(".guess-row:not(:first)").find('.guess-cell').droppable('disable');
	}

	setGuessCellEvent(func)
	{
		this.$allDropCell.on("dropItem",func);
	}

	resetDeck()
	{
		this.uim.resetDeck();
	}
}


module.exports=GameUserInterface;