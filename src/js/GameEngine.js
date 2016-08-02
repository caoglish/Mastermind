//jshint esversion: 6
const $ = require('jquery');
require('jquery-ui');
const NumberGenerator = require('./NumberGenerator');
const GameUserInterface = require('./GameUserInterface');

class GameEngine {
	constructor() {
		this.gui = new GameUserInterface();
		this.answer = [];
	}

	init() {
		let ng = new NumberGenerator();
		this.answer = ng.generateFourNumbers().getFourNumbers();
		this.gui.init();
	}

	activeDropCell() {
		let ge = this;
		this.gui.setGuessCellEvent(function(event, dropEvent, ui) {
			let $dropCell = $(this);
			ge.dropInCell(ui.draggable, $dropCell);
		});


	}

	dropInCell($dragItem, $dropCell) {

		let selectVal = $dragItem.data('val');
		var $currentRow = $dropCell.parents(".guess-row");
		console.log($currentRow);

		//drop cell gui processing
		$dragItem.hide();
		$dropCell
			.css('background-color', 'pink')
			.text(selectVal)
			.data('val', selectVal)
			.droppable("disable")
			.css('opacity', '0.86');


		//get current row's avaible dropable number;
		var NumOfDropCell = $currentRow.find(".guess-cell").filter(function(index) {
			return $(this).droppable('option', 'disabled') === false;
		}).length;
		console.log(NumOfDropCell);

		if (NumOfDropCell === 0) {
			this.completeRow($currentRow, $dragItem, $dropCell);
		}



	}

	completeRow($currentRow, $dragItem, $dropCell) {
		console.log($currentRow);
		console.log($dropCell);
		console.log($dropCell);

		//get 4 numbers from current row
		var rowNumbers = $currentRow.find(".guess-cell").map(function(index) {
			return $(this).data('val');
		}).get();

		let hint = this.makeHint(this.answer, rowNumbers);
		console.log(hint);
		$currentRow.find(".right-item").text(hint);

		if (hint === 'A4B0') {
			//processing if guess is right.
			//console.log(RESULT_WIN); // for testing. show result win
			//$msgArea.text(RESULT_WIN);
			//this.showAnswer();
			//$msgArea.effect('shake', 500);
			alert("you wins");

		} else {
			//procssing if guess is not right
			let $nextRow = $currentRow.next(".guess-row"); //next Row
			console.log($nextRow );
			if ($nextRow.find(".guess-cell" ).length !== 0) {
				//enable the next row.
				$nextRow.find(".guess-cell" ).droppable('enable');
			} else {
				//lost if no next row.
				//console.log(RESULT_LOST);//// for testing. show result lost
				// $msgArea.text(RESULT_LOST);
				// this.showAnswer();
				// $msgArea.effect('shake', 500);
				alert("you Lost");

			}
		}
		this.gui.resetDeck();

	


	}


	makeHint(gmAns, usrAns) {
		console.log(gmAns);
		console.log(usrAns);

		let a = 0;
		let b = 0;
		let num;
		let loop = usrAns.length;
		for (let i = 0; i < loop; i++) {
			num = usrAns.shift();
			if (gmAns.indexOf(num) == i) {
				a++;
			} else if (gmAns.indexOf(num) > -1) {
				b++;
			}
		}
		return 'A' + a + 'B' + b;
	}
}

module.exports = GameEngine;