//jshint esversion: 6
class NumberGenerator {
	constructor() {
		this.numbers = [-1, -1, -1, -1];
	}

	getRandomNumber() {
		let algorithm = parseInt(Math.random() * 10);
		switch (algorithm) {
			case 0:
				return Math.random();
				
			case 1:
				return Math.random() * 121 * Math.random();
				
			case 2:
				return Math.random() * 24823789 * Math.random();
				
			case 3:
				return Math.random() * 234 * Math.random();
				
			case 4:
				return Math.random() * Math.random();
				
			case 5:
				return (Math.random()) ^ 4;
				
			case 6:
				return Math.random() * 239048230498 & 1010101;
				
			case 7:
				return Math.random() * 29048234908 | 111111 * 23;
				
			case 8:
				return Math.random() * 234234 | 110111 * Math.random();
				
			case 9:
				return Math.random();
			default:
				return (Math.random()*Math.random())^3;
		}
	}


	generateFourNumbers() {
		var	randnum;
		for (let i = 0; i < 4; i++) {
			do {
			 	randnum = parseInt(this.getRandomNumber() * 10 % 10);
			} while (this.numbers.indexOf(randnum) > -1);
			this.numbers[i] = randnum;
		}
		return this;
	}

	clearNumbers() {
		for (let i = 0; i < 4; i++) {
			this.numbers[i] = -1;
		}
		return this;
	}

	getFourNumbers() {
		return this.numbers;
	}

}

module.exports=NumberGenerator;