const $=require('jquery');
const _=require('lodash');

class UiMaker {

  constructor() {
    
  }

  abc(){
  	return "es6";
  }


};






$(()=>{
	$('body').append("hello,world");
	let uim=new UiMaker();
	console.log(uim.abc());

})();
