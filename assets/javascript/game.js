$(document).ready(function() {

    var wins = 0;
    $(".wins").html("<h2>Wins: </h2>" + wins);
    var losses = 0;
    $(".losses").html("<h2>Losses: </h2>" + losses);   

//game play random number
    var randomNumber = getRandomInt();
    
    function getRandomInt() {
        var random = Math.floor((Math.random() * 80) +10);
        randomNumber = random;
    };

    getRandomInt();
        console.log(randomNumber);
    function assignRandomNumber() {
        return $(".randomNumber").html(randomNumber);
    };
    
    assignRandomNumber();
    

//Crystal 1 value
    var randomCrystalValue1 = getCrystalValue1();

    function getCrystalValue1() {
        var random = Math.floor((Math.random() * 5) + 1);    
        randomCrystalValue1 = random;
        };


//Crystal 2 value
    var randomCrystalValue2 = getCrystalValue2();
    
    function getCrystalValue2() {
        var random = Math.floor((Math.random() * 25) + 5);    
        randomCrystalValue2 = random;
        };
    

//Crystal 3 value
    var randomCrystalValue3 = getCrystalValue3();
        
    function getCrystalValue3() {
        var random = Math.floor((Math.random() * 25) + 1);    
        randomCrystalValue3 = random;
        };
        

//Crystal 4 value
    var randomCrystalValue4 = getCrystalValue4();

    function getCrystalValue4() {
        var random = Math.floor((Math.random() * 25) + 1);    
        randomCrystalValue4 = random;
        };


    getCrystalValue1();
    getCrystalValue2();
    getCrystalValue3();
    getCrystalValue4();
    console.log(randomCrystalValue1);
    console.log(randomCrystalValue2);
    console.log(randomCrystalValue3);
    console.log(randomCrystalValue4);

    function assignCrystal1() {
        $(".crystal-1").attr("value", randomCrystalValue1);
    };
    function assignCrystal2() {
        $(".crystal-2").attr("value", randomCrystalValue2);
    };
    function assignCrystal3() {
        $(".crystal-3").attr("value", randomCrystalValue3);
    };
    function assignCrystal4() {
        $(".crystal-4").attr("value", randomCrystalValue4);
    };
    
    assignCrystal1();
    assignCrystal2();
    assignCrystal3();
    assignCrystal4();

    var scoreCalculator = [0];

    function getSum(total, num) {
        return total + num;
    }

    //assign onclick handlers for each crystal
    $(".crystal-1").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value"))); 
        $(".totalScore").html(scoreCalculator.reduce(getSum, 0));
        if (scoreCalculator.reduce(getSum, 0) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);            
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();            
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();
        } else if (scoreCalculator.reduce(getSum, 0) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses);             
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();
        };
    });
    $(".crystal-2").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum, 0));
        if (scoreCalculator.reduce(getSum, 0) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);            
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();          
        } else if (scoreCalculator.reduce(getSum, 0) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses);             
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();           
        };
    });
    $(".crystal-3").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum, 0)); 
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);        
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();      
        } else if (scoreCalculator.reduce(getSum, 0) >= randomNumber) {
            losses++;
            $(".losses").html("<h2>Losses: </h2>" + losses);             
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();        
        };
    });
    $(".crystal-4").on("click", function() {
        scoreCalculator.push(parseInt($(this).attr("value")));         
        $(".totalScore").html(scoreCalculator.reduce(getSum, 0));  
        if (scoreCalculator.reduce(getSum) === randomNumber) {
            wins++;
            $(".wins").html("<h2>Wins: </h2>" + wins);            
            scoreCalculator.length = [0];
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();  
        } else if (scoreCalculator.reduce(getSum, 0) >= randomNumber) {
            losses++;           
            $(".losses").html("<h2>Losses: </h2>" + losses);            
            scoreCalculator.length = [0]; 
            $(".totalScore").html("");
            getRandomInt();
            assignRandomNumber();
            console.log(randomNumber);
            getCrystalValue1();
            getCrystalValue2();
            getCrystalValue3();
            getCrystalValue4();
            assignCrystal1();
            assignCrystal2();
            assignCrystal3();
            assignCrystal4();                        
        };      
    });
}); //close for document.ready