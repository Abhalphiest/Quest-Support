"use strict";

var app = app || {};

//--------------------------------- 
//
// renderer.js handles all rendering logic, using HTML5 Canvas
//
//-----------------------------------

// see main .js for more on IIFEs, and how this module is instantiated
app.renderer = function(){

	// this will eventually be app.renderer
	var obj = {};

	// these variables are declared locally (using var)
	// instead of as members (using this.) so that only things inside of renderer can access them.
	// this way, we can be sure that any changes made to the canvas happened inside this file.
	// this aids both in debugging and in code modularity - we could theoretically swap this renderer out with
	// a WebGL one, for example, and as long as it had the same members and methods,
	// the rest of the app will just work.

	var canvas = undefined; // will be initialized onload (see addOnLoadEvent below)
	var ctx = undefined;

	//var VERYIMPORTANTDEBUGIMAGE; // delete soon. very, very soon.



	// the main renderer update
	obj.draw = function(){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		//ctx.drawImage(VERYIMPORTANTDEBUGIMAGE, 0, 0);
        
        // if showing a sprite
        //if (in battle){
            var enemySprite = app.sprites.getCurrentSprite();
            //console.log(enemySprite);
            switch (app.main.currentState) {
                case 0:
                    for (var i = 0; i < enemySprite.length; i++) {
                        ctx.drawImage(enemySprite[i], (canvas.width * .5) - (enemySprite[i].width / 2.5 / 2), (canvas.height * .2) + (enemySprite[i].height / 2.5 / 2), enemySprite[i].width / 2.5, enemySprite[i].height / 2.5);
                        //console.log(i);
                    }
                    break;

                case 1:

                    break;

                case 2:

                	break;

                case 3: // the start screen 
                	ctx.save();
                	ctx.font = "30px Special Elite";
                	ctx.fillText("Welcome to Quest Support!", 10, 50);
                	ctx.fillText("You are the adventurer. This screen is for your eyes only, and should not be shown to the guide.", 10, 100);
                	ctx.fillText("Do not look at the manual at any time while playing!", 10, 150);
                	ctx.fillText("(Click Anywhere to Continue)", 10, 200);
                	ctx.restore();
                	break;

            }
            
        //}
        
        
	};


	// initialization that needs to wait until after the browser has loaded the html
	// completely
	addOnLoadEvent(function(){

		// note: The canvas does not exist in the HTML until this code runs!
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
		document.body.appendChild(canvas);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		// resize the canvas to fit the window
		window.onresize = function(){
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		//VERYIMPORTANTDEBUGIMAGE = new Image();
		//VERYIMPORTANTDEBUGIMAGE.src = "assets/feelincagey.jpg";

	}.bind(obj)); // we need the .bind(this) here, because the scope of the function will be wiped out
				  // when composed with other functions and added to an event listener 


	return obj;
}();