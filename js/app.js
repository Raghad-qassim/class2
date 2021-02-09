'use strict';
let userName="";
 userName=prompt('what is your name?');
//console.log(userName);
 alert('welcome  '+ userName );

 alert('There are five questions answer it with yes or no  ' );



let score=0;

//Question one
 let message="";
 let study="";
study =prompt("I was study computer information system?");
//console.log(study);
if(study==="yes"||study==="y"||study==="Y"||study==="YES"){
message=("That is right "+ userName);
score=score+1;
}
else if(study==="no"||study==="n"||study==="N"||study==="NO"){
 message=("That is wrong "+userName);
 score=score-1;

}else{

    message=("wrong input");

}

alert(message);

//Question two
let graduated="";
graduated =prompt("I was graduated in 2019?");
//console.log(graduated);
if(graduated==="yes"||graduated==="y"||graduated==="Y"||graduated==="YES"){
    message=("That is wrong "+userName);
    score=score-1;

}
else if(graduated==="no"||graduated==="n"||graduated==="N"||graduated==="NO"){
    message=("That is right "+ userName);
    score=score+1;
}else{

    message=("wrong input");

}
alert(message);





//Question three
let University="";
University =prompt("I was study in the University of Jordan?");
//console.log(University);
if(University==="yes"||University==="y"||University==="Y"||University==="YES"){
 message=("That is right   "+ userName);
 score=score+1;
 
}
else if(University==="no"||University==="n"||University==="N"||University==="NO"){
 message=("That is wrong   "+userName); 
 score=score-1;
}else{

    message=("wrong input");
    

}
alert(message);

//Question four
let GPA="";
GPA=prompt("my GPA was 3.38 from 4 in the university?");
//console.log(GPA);
if(GPA==="yes"||GPA==="y"||GPA==="Y"||GPA==="YES"){
 message=("That is right   "+ userName);
 score=score+1;
}
else if(GPA==="no"||GPA==="n"||GPA==="N"||GPA==="NO"){
 message=("That is wrong   "+userName);
 score=score-1;
}else{

    message=("wrong input"); 
   

}
alert(message);


//Question five
let experience="";
experience=prompt("I have one years experience?");
//console.log(experience);
if(experience==="yes"||experience==="y"||experience=="Y"||experience==="YES"){
    message=("That is wrong   "+userName);
    score=score-1;
}
else if(experience==="no"||experience==="n"||experience==="N"||experience==="NO"){

 message=("That is right   "+ userName);
 score=score+1;
}else{

    message=("wrong input");

}
alert(message);

//alert("good bye " +userName + " come back soon");

//Question five
let place="";
place=prompt(" How many strange place i mentionsed in my page?"," The answer must be anumber");
//console.log(place);

//Question six
let i=0;
let answer=" ";
for(i=0;i<3;i++){
    if(place==10){
        answer= ("That is right");
        alert(answer);
        score=score+1;
        break;
         }else if(place>10){
       
       answer=("That is too high");
       alert(answer);
       place=prompt(" How many strange place i mentionsed in my page?"," The answer must be anumber");
       
       
      
    } else{
        
       answer= ("That is too low");
       alert(answer);
       place=prompt(" How many strange place i mentionsed in my page?"," The answer must be anumber");
       
      

       
    }
   
    }
   
    //console.log(score);
   
    
    let fun =prompt("This question  for fun :Type the name of one of the governorates of Jordan?")
    let governorates=['irbid','ajloun','jerash','mafraq','balqa','amman','zarqa','madaba','karak','tafilah','maan','aqaba','Irbid','Ajloun','Jerash','Mafraq','Balqa','Amman','Zarqa','Madaba','Karak','Tafilah','Maan','Aqaba'];
    
    //console.log(governorates);
       let a=0; 
       let x=0; 
       console.log(fun);
    for(a=0;a<5;a++){
        if(governorates.includes(fun)){
            score=score+1;
            break;
        }
        else
        {
            fun =prompt("Try again :Type the name of one of the governorates of Jordan?")
        }
       
    
    }
    alert("your score is "+score);
  

    
    











