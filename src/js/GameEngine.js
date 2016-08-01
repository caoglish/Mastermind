const $ = require('jquery');
require('jquery-ui');
const NumberGenerator=require('./NumberGenerator');
const GameUserInterface=require('./GameUserInterface');

class GameEngine {
	constructor() {
		this.gui= new GameUserInterface();
		this.answer=[];
	}

	init(){
		let ng=new NumberGenerator();
		this.answer=ng.generateFourNumbers().getFourNumbers();
		this.gui.init();
	}

	activeDropCell()
	{
		let ge=this;
		this.gui.setGuessCellEvent(function(event, dropEvent,ui){
			let $dropCell = $(this);
			ge.dropInCell(ui.draggable,$dropCell);
		});
		
	
	}

	dropInCell($dragItem,$dropCell){
		
		let selectVal = $dragItem.data('val');
		var $currentRow = $dropCell.parent();

		//drop cell gui processing
		$dragItem.hide();
		$dropCell
			.css('background-color', 'pink')
			.text(selectVal)
			.data('val', selectVal)
			.droppable("disable")
			.css('opacity', '0.86');


		//get current row's avaible dropable number;
		var NumOfDropCell = $currentRow.children(".guess-cell").filter(function(index) {
			return $(this).droppable('option', 'disabled') == false;
		}).length;
	
		if(NumOfDropCell===0){
			this.completeRow($currentRow,$dragItem,$dropCell);
		}



	}

	completeRow($currentRow,$dragItem,$dropCell){
		console.log($currentRow);
		console.log($dropCell);
		console.log($dropCell);
		
		//get 4 numbers from current row
		var rowNumbers =$currentRow.children(".guess-cell").map(function(index) {
			return $(this).data('val');
		});
		console.log(rowNumbers);

	}
}

module.exports=GameEngine;


