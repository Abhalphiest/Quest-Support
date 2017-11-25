"use strict";

// -------------------------------------------
//
// sprites.js composes sprites out of various parts
//
// -------------------------------------------

var app = app || {};

app.sprites = function(){
    
	// this will eventually be app.renderer
	var obj = {};
    
    // held, skin, robe, face, accent1, accent2
    var wizlock = [];
    
    // inside, outside
    var slime = [];
    
    var currentSprite = [];
    
    obj.setSprite = function(enemy){
        console.log(enemy);
        if (enemy.type === 'slime'){
            
            slime[0].src = "assets/empty.png";
            slime[1].src = "assets/empty.png";
            
            if (enemy.trait1 === 'cherry'){
                slime[1].src = "assets/slime/cherry.png";
            } else if (enemy.trait1 === 'lime'){
                slime[1].src = "assets/slime/lime.png";
            } else if (enemy.trait1 === 'strawberry'){
                slime[1].src = "assets/slime/strawberry.png";
            } else if (enemy.trait1 === 'grape'){
                slime[1].src = "assets/slime/grape.png";
            }
            
            if (enemy.trait2 === 'stagnant'){
                slime[0].src = "assets/slime/stagnant.png";
            } else if (enemy.trait2 === 'jiggling'){
                slime[0].src = "assets/slime/jiggling.png";
            } else if (enemy.trait2 === 'sagacious'){
                slime[0].src = "assets/slime/sagacious.png";
            } else if (enemy.trait2 === 'aggressive'){
                slime[0].src = "assets/slime/aggressive.png";
            }
            
            currentSprite = slime;
        } else if (enemy.type === 'wizlock'){
            
            wizlock[0].src = "assets/empty.png"; // held
            wizlock[1].src = "assets/empty.png"; // skin
            wizlock[2].src = "assets/empty.png"; // robe
            wizlock[3].src = "assets/empty.png"; // face
            wizlock[4].src = "assets/empty.png"; // accent1
            wizlock[5].src = "assets/empty.png"; // accent2
            
            // randomize default held item
            var rand = (Math.random() * 2);
            if (rand <= 1){
                wizlock[0].src = "assets/wizlock/held_wand.png";
            } else if (rand <= 2){
                wizlock[0].src = "assets/wizlock/held_staff.png";
            }
            
            // randomize skin color
            rand = (Math.random() * 3);
            if (rand <= 1){
                wizlock[1].src = "assets/wizlock/skin_dark.png";
            } else if (rand <= 2){
                wizlock[1].src = "assets/wizlock/skin_mid.png";
            } else if (rand <= 3){
                wizlock[1].src = "assets/wizlock/skin_pale.png";
            }
            
            // randomize robe color
            rand = (Math.random() * 3);
            if (rand <= 1){
                wizlock[2].src = "assets/wizlock/robe_blue.png";
            } else if (rand <= 2){
                wizlock[2].src = "assets/wizlock/robe_purple.png";
            } else if (rand <= 3){
                wizlock[2].src = "assets/wizlock/robe_red.png";
            }
            
            // set face to default
            wizlock[3].src = "assets/wizlock/face_normal.png"; // face
            
            if (enemy.trait1 === 'dastardly'){
                wizlock[3].src = "assets/wizlock/face_mean.png";
            } else if (enemy.trait1 === 'foppish'){
                wizlock[4].src = "assets/wizlock/accent_fancy.png";
            } else if (enemy.trait1 === 'grumpy'){
                wizlock[3].src = "assets/wizlock/face_grumpy.png";
            } else if (enemy.trait1 === 'sassy'){
                wizlock[3].src = "assets/wizlock/face_smirk.png";
            } else if (enemy.trait1 === 'timid'){
                wizlock[4].src = "assets/wizlock/accent_timid.png";
            } else if (enemy.trait1 === 'determined'){
                wizlock[4].src = "assets/wizlock/accent_determined.png";
            }
            
            if (enemy.trait2 === 'sashaying'){
                wizlock[5].src = "assets/wizlock/accent_sashay.png";
            } else if (enemy.trait2 === 'timid'){
                wizlock[5].src = "assets/wizlock/accent_timid.png";
            } else if (enemy.trait2 === 'mesmerizing'){
                wizlock[0].src = "assets/wizlock/held_mesmerize.png";
            } else if (enemy.trait2 === 'evangelizing'){
                wizlock[0].src = "assets/wizlock/held_pamphlet.png";
            } else if (enemy.trait2 === 'feisty'){
                wizlock[0].src = "assets/wizlock/held_feisty.png";
            } else if (enemy.trait2 === 'talkative'){
                wizlock[3].src = "assets/wizlock/face_talking.png";
            } else if (enemy.trait2 === 'happy'){
                wizlock[3].src = "assets/wizlock/face_happy.png";
            } else if (enemy.trait2 === 'caring'){
                wizlock[0].src = "assets/wizlock/held_tea.png";
            }
            
            
            currentSprite = wizlock;
        }
        console.log(currentSprite);
    };
    
    obj.getCurrentSprite = function(){
        return currentSprite;
    };
    
	// initialization that needs to wait until after the browser has loaded the html
	// completely
	addOnLoadEvent(function(){

        wizlock[0] = new Image(); // held
        wizlock[1] = new Image(); // skin
        wizlock[2] = new Image(); // robe
        wizlock[3] = new Image(); // face
        wizlock[4] = new Image(); // accent1
        wizlock[5] = new Image(); // accent2
        wizlock[0].src = "assets/empty.png"; // held
        wizlock[1].src = "assets/empty.png"; // skin
        wizlock[2].src = "assets/empty.png"; // robe
        wizlock[3].src = "assets/empty.png"; // face
        wizlock[4].src = "assets/empty.png"; // accent1
        wizlock[5].src = "assets/empty.png"; // accent2
        
        
        slime[0] = new Image();
        slime[1] = new Image();
        slime[0].src = "assets/empty.png";
        slime[1].src = "assets/empty.png";

	}.bind(obj)); // we need the .bind(this) here, because the scope of the function will be wiped out
				  // when composed with other functions and added to an event listener 
    return obj;
}();