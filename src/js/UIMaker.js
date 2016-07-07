const $ = require('jquery');
require('jquery-ui');


class UiMaker {
	constructor() {
		this.$itemDeck=$('.code-preparing-table');
		this.$game = $(".game");
		this.$playground=this.$game.find(".playground");
	}	

	resetDeck(){
		this.$itemDeck.html('');
		for(var i=0;i<10;i++)
		{
			this.$itemDeck.append(this.makeCodeItem(i));
		}
	}

	makeCodeItem(text) {
		return $('<div/>', {
				class: "code-item"
			})
			.text(text)
			.attr('data-val', text)
			.draggable({
				revert: "invalid"
			})
	}

	
	makeDropRow(){
		let $divDropRow = $($("template#guess-row").html().trim());//get template.
		let guessArea=$divDropRow.find('.guess-area');
	//	console.log($divDropRow);
		for(var i=0; i<4; i++)
		{
			$divDropRow.find('.guess-area').append(this.makeDropCell(''));
		}
		this.$playground.append($divDropRow);
	}

	//make a drop cell
	makeDropCell(num){
		return $('<div/>',{class:"guess-cell"})
					.text(num)
					.attr('data-val',num)
					.droppable()	;
	}

	test() {
		return "es61";
	}
};

module.exports=UiMaker;