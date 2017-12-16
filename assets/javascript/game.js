$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var randomNumber = getRandomInt();

    function getRandomInt() {
        return Math.floor((Math.random() * 80) +10);    
        };
    function assignRandomNumber() {
        return $(".randomNumber").html(randomNumber);
    };
    
    assignRandomNumber();

    console.log(randomNumber);

 //Crystal 1 value
    var randomCrystalValue1 = getCrystalValue1();

    function getCrystalValue1() {
        return Math.floor((Math.random() * 5) + 1);    
        };

    console.log(randomCrystalValue1);

//Crystal 2 value
    var randomCrystalValue2 = getCrystalValue2();
    
    function getCrystalValue2() {
        return Math.floor((Math.random() * 25) + 1);    
        };
    
    console.log(randomCrystalValue2);

//Crystal 3 value
    var randomCrystalValue3 = getCrystalValue3();
        
    function getCrystalValue3() {
        return Math.floor((Math.random() * 25) + 1);    
        };
        
    console.log(randomCrystalValue3);

//Crystal 4 value
    var randomCrystalValue4 = getCrystalValue4();

    function getCrystalValue4() {
        return Math.floor((Math.random() * 25) + 1);    
        };

    console.log(randomCrystalValue4);

    
    function assignCrystal1() {$(".crystal-1").attr("value", randomCrystalValue1);};
    function assignCrystal2() {$(".crystal-2").attr("value", randomCrystalValue2);};
    function assignCrystal3() {$(".crystal-3").attr("value", randomCrystalValue3);};
    function assignCrystal4() {$(".crystal-4").attr("value", randomCrystalValue4);};
    
    assignCrystal1();
    assignCrystal2();
    assignCrystal3();
    assignCrystal4();

    var scoreCalculator = [0];

    //thank you w3 schools! https://www.w3schools.com/jsref/jsref_reduce.asp
    function getSum(total, num) {
        return total + num;
    }
    
    // function reset() {
        // $(".totalScore").html("");
        // scoreCalculator.length = [0];

    //     var randomNumber = getRandomInt();
        
    //     function getRandomInt() {
    //         return Math.floor((Math.random() * 80) +10);    
    //         };
    //     function assignRandomNumber() {
    //         return $(".randomNumber").html(randomNumber);
    //     };
            
    //     assignRandomNumber();
    //     console.log(randomNumber);
    //      //Crystal 1 value
    //     var randomCrystalValue1 = getCrystalValue1();
    
    //     function getCrystalValue1() {
    //         return Math.floor((Math.random() * 5) + 1);    
    //         };
    
    //     console.log(randomCrystalValue1);
    
    //     //Crystal 2 value
    //     var randomCrystalValue2 = getCrystalValue2();
        
    //     function getCrystalValue2() {
    //         return Math.floor((Math.random() * 25) + 1);    
    //         };
        
    //     console.log(randomCrystalValue2);
    
    //     //Crystal 3 value
    //     var randomCrystalValue3 = getCrystalValue3();
            
    //     function getCrystalValue3() {
    //         return Math.floor((Math.random() * 25) + 1);    
    //         };
            
    //     console.log(randomCrystalValue3);
    
    //     //Crystal 4 value
    //     var randomCrystalValue4 = getCrystalValue4();
    
    //     function getCrystalValue4() {
    //         return Math.floor((Math.random() * 25) + 1);    
    //         };
    
    //     console.log(randomCrystalValue4);
    
        
    //     function assignCrystal1() {$(".crystal-1").attr("value", randomCrystalValue1);};
    //     function assignCrystal2() {$(".crystal-2").attr("value", randomCrystalValue2);};
    //     function assignCrystal3() {$(".crystal-3").attr("value", randomCrystalValue3);};
    //     function assignCrystal4() {$(".crystal-4").attr("value", randomCrystalValue4);};
        
    //     assignCrystal1();
    //     assignCrystal2();
    //     assignCrystal3();
    //     assignCrystal4();

    // };


    //assign onclick handlers for each crystal
    $(".crystal-1").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value"))); 
        $(".totalScore").html(scoreCalculator.reduce(getSum));
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        } else if (scoreCalculator.reduce(getSum) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses); 
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        };
    });
    $(".crystal-2").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum));
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        } else if (scoreCalculator.reduce(getSum) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses); 
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        };
    });
    $(".crystal-3").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum)); 
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        } else if (scoreCalculator.reduce(getSum) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses); 
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        };
    });
    $(".crystal-4").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum));  
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);
            // reset();
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
        } else if (scoreCalculator.reduce(getSum) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses);
            // reset();
            scoreCalculator.length = [0]; 
            $(".totalScore").html("");
            getRandomInt();
        };      
    });
}); //close for document.ready