$(document).ready(function(){
    var izbor;
    var score = 12;
    function date(){
        var date = new Date();
        let h = date.getTime();
        return h;
    }
    date();
    //Rules
    $('.rules').click(function(){
        $('.modal').css('display' , 'block');
    });
    $('.close').click(function(){
        $('.modal').css('display' , 'none');
    });
    $('.modal').click(function(){
        $('.modal').css('display' , 'none');
    });
    //Computer
    function computer(bot){
        if(bot == 1){
            $('.bot img').attr('src' , 'img/icon-paper.svg');
            $('.step-2 .bot').css('display','flex')
            $('.bot img').attr('class' , 'paper');
        }
        else if(bot == 2){
            $('.bot img').attr('src' , 'img/icon-scissors.svg');
            $('.step-2 .bot').css('display','flex')
            $('.bot img').attr('class' , 'sciss');
        }
        else if(bot == 3){
            $('.bot img').attr('src' , 'img/icon-rock.svg');
            $('.step-2 .bot').css('display','flex')
            $('.bot img').attr('class' , 'rock');
        }
    }
    
    //Function for click button paper
    $('.bttpaper').click(function(){
        izbor = Math.floor(Math.random()*3+1);
        $('.game').css('display', 'none');        
        $('.main').css('display', 'block');        
        $('.your img').attr('src' , 'img/icon-paper.svg').attr('class' , 'paper');
        setTimeout(function(){
            computer(izbor);
          }, 1000);
        
        if(izbor == 1){ $('.win_lose h1').text('Draw'); } 
        else if (izbor == 2){
            score-=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Lose');
        }
        else if (izbor == 3){
            score+=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Win');
        }
        date();

    });
    //End Function 

    //Function for click button scissors
    $('.bttsciss').click(function(){
        izbor = Math.floor(Math.random()*3+1);
        $('.game').css('display', 'none');        
        $('.main').css('display', 'block');        
        $('.your img').attr('src' , 'img/icon-scissors.svg').attr('class' , 'sciss');
        setTimeout(function(){
            computer(izbor);
          }, 1000);
        if(izbor == 2){ $('.win_lose h1').text('Draw'); } 
        else if (izbor == 3){
            score-=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Lose');
        }
        else if (izbor == 1){
            score+=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Win');
        }
        date()
    });
    //End Function

    //Function for click button rock
    $('.bttrock').click(function(){
        izbor = Math.floor(Math.random()*3+1);
        $('.game').css('display', 'none');        
        $('.main').css('display', 'block');        
        $('.your img').attr('src' , 'img/icon-rock.svg').attr('class' , 'rock');
        setTimeout(function(){
            computer(izbor);
          }, 1000);
        if(izbor == 3){ $('.win_lose h1').text('Draw'); } 
        else if (izbor == 1){
            score-=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Lose');
        }
        else if (izbor == 2){
            score+=1;
            $('.poeni h1').text(score);
            $('.win_lose h1').text('You Win');
        }
        date();
    });
    //End Function
    
    //Play Again
    $('.play_again').click(function(){
        $('.game').css('display' , 'block');
        $('.main').css('display', 'none');
        $('.step-2 .bot').css('display', 'none');
    });
    function remember_the_result(){
        var new_date = new Date();
        let new_time = new_date.getTime();
        return new_time;
    }
    $( window ).bind('beforeunload', function(){
        remember_the_result() = date();
});
});