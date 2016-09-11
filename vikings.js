var Viking = function(name) {
    this.name = name
    this.health = Math.floor(Math.random()*(12-3)+ 3);
    this.fight = function() {
        var punchstrength = Math.random();
            
            return Math.floor(punchstrength * 100);
        };
};

var Saxon = function() {
    this.health = Math.floor(Math.random()*(10-0)+0);
    this.fight = function() {
        var punchstrength = Math.random();
            
            return Math.floor(punchstrength * 90);
    };
};



var Pit = function(viking1,viking2) {
    this.fight = function(){
        var round = 0;
        while ((viking1.health > 1) && (viking2.health > 1)){
            if (viking1.fight() === viking2.fight()) {
                    viking1.health = viking1.health;
                    viking2.health = viking2.health;
               
                console.log(viking1.name + " remaining life is: "+ viking1.health);
                console.log(viking2.name + " remaining life is: "+ viking1.health);
            } else if (viking1.fight() > viking2.fight()) {
                console.log(viking1.name + " wins : ");
                console.log(viking2.name + " remaining lives :", viking2.health -= 1);
            } else {
                console.log(viking2.name + " wins :");
                console.log(viking1.name +"remaining lives :", viking1.health -= 1);
            }
            round++;
        }; 
    };
};




var Village = function(viking, saxon) {
    this.fight = function(){
        var round = 0;
        while ((viking.health > 0) && (saxon.health > 0)){
            if (viking.fight() === saxon.fight()) {
                    viking.health = viking.health;
                    saxon.health = saxon.health;
               // console.log("Its a tie! Nobody loses life!");
                console.log(viking.name + " remaining lives is: "+ viking.health);
                console.log("Saxon remaining lives is: "+ saxon.health);
            } else if (viking.fight() > saxon.fight()) {
                console.log(viking.name + " wins!");
                console.log("Saxon remaining lives : ", saxon.health -= 1);
            } else {
                console.log("Saxon wins !");
                console.log(viking.name + "remaining lives :", viking.health -= 1);
            }
            round ++;
        }; 
    };
};


var myViking = new Viking("Urkul");
//var myOtherviking = new Viking("Zunkar");
//var myThirdViking = new Viking("Blurb");
var saxon1 = new Saxon();

var village1 = new Village(myViking,saxon1);
village1.fight();


//var vikingArmy = [myViking, myOtherviking, myThirdViking];


//pit1 = new Pit(myViking,myOtherviking);
//pit1.fight();