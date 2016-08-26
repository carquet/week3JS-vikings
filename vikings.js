var Viking = function(name) {
    this.name = name;
    this.health = 4;
    this.fight = function() {
        var punchstrength = Math.random();
            
            return Math.floor(punchstrength * 100);
        };
};


var Pit = function(viking1,viking2) {
    this.fight = function(){
        var fight= 0;
        while ((viking1.health > 1) && (viking2.health > 1)){
            if (viking1.fight() === viking2.fight()) {
                    viking1.health = viking1.health;
                    viking2.health = viking2.health;
                console.log("Its a tie! Nobody loses life!");
                console.log(viking1.name + " remaining life is: "+ viking1.health);
                console.log(viking2.name + " remaining life is: "+ viking1.health);
            } else if (viking1.fight() > viking2.fight()) {
                console.log(viking1.name + " wins :");
                console.log(viking2.name + " remaining lives :", viking2.health -= 1);
            } else {
                console.log(viking2.name + " wins :");
                console.log(viking1.name +"remaining lives :", viking1.health -= 1);
            }
            fight++;
        }; 
    };
};

  


var myViking = new Viking("Urkul");
var myOtherviking = new Viking("Zunkar");
pit1 = new Pit(myViking,myOtherviking);
pit1.fight();
// console.log(myViking.fight())
// console.log ("here are the two constestants: " + myViking.name + " " + myOtherviking.name);

// console.log ("Your viking: " + myViking.name + " gave a punch, his strengh is: " + myViking.fight());

// console.log ("Your viking: " + myOtherviking.name + " gave a punch, his strengh is: " + myOtherviking.fight());
