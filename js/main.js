
/**
 * Duel Fight Game - Susan Todd
 * Date: 4/03/14

 Assignment 1
 Part 1/3 of series
*/
// self-executing function
(function(){

    console.log("fight");//returns the same

    /*I have converted the fighter stats into an array in this program. */

    var player1 = [ "Foxey", 100, 20 ];
      /*player1[0] = "Foxey";
        player1[1] = health;
        player1[2] = damage;
        */

    var player2 = [ "Moxey", 100, 20 ];
      /*player12[0] = "Foxey";
        player2[1]    = health;
        player2[2]    = damage;
        */
    console.log( player1[0] + " and " + player2[0]);// returns the same, testing val of my name vars


             //initialise the rounds//create loop for 10 rounds
     var round=0;//initial count

             //begin fight fn
    function fight(){
 
            alert(player1[0] + ":" + player1[1] + "  *START*  " + player2[0] + ":" + player2[1]);
        
                      //loop for 10 rounds
            for(var i=0;1<10;i++){

                       //assign minDamage to specific player
                var minDamage1 = player1[2] * .5;
                var minDamage2 = player2[2] * .5;

                       //random formula is -
                       //Math.floor(Math.random()*(max - min) + min);
                var f1 = Math.floor(Math.random()*(player1[2]-minDamage1)+minDamage1);
                var f2 = Math.floor(Math.random()*(player2[2]-minDamage2)+minDamage2);

                       //inflict damage
                player1[1] -=f1; //minus equals same as  playerOneHealth = player1Health - f1 ;
                player2[1] -=f2;

                   console.log(f1 + f2);//testing the var f1 and f2


                    //testing
                   console.log( player1[0] +":"+ player1[1] + " " + player2[0] +":"+ player2[1] );

                    //now check for winner
                    //winnerCheck();//make this into a var after creating the if statements
                var result = winnerCheck();
                
                console.log(result);//if I get results here then I know my program is processing inside the winnercheck fn below

                    //conditional for running the loop again
                if(result === "no winner"){
                    round++; //increases the rounds

                    //displays following info per round
                    alert(player1[0] + ":"+ player1[1] + " " + "*ROUND" + ":" + round + " " + " OVER* " + " "+ player2[0] +":"+ player2[1] );
                }else{
                    alert(result);
                    break;//stops loop is there is a winner or both die
                };//close if

            };//close loop
     };//close fight fn       

     function winnerCheck(){

                //console.log("in winnerCheck ");/testing if the program reaches inside the fn winnerCheck

                //this code checks to see who the winner is or if both players die 
            var result = "no winner";//defining result

                //compare player ones health against player 2 health, if they are both less than 1 :result=both die
            if( player1[1] < 1 && player2[1] < 1 ){

                  result = "You both die !";

                //is plyaer ones health less than 1 : result= player2 wins
             }else if( player1[1] <1 ){

                 result = player2[0] + " " + "WINS!!!"  + " " + "*GAME OVER*";

                //is player twos health less than 1 : result= player1 wins
            }else if( player2[1] <1){

                 result = player1[0] + " "+ "WINS!!!" + " " + "*GAME OVER*";

            };//go back up to winnerCheck fn call and turn this into a variable after creating the condionals

         return result;

     };//close winnerCheck fn     


            //start program by calling the fn
    fight();//this calls the fight fn above; essentially the fight fn parameters are defined above

})();//close doc
