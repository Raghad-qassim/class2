'use strict';
var userName="";
 userName=prompt('what is your name?');
console.log(userName);
 alert('welcome  '+ userName );

 alert('There are five questions answer it with yes or no  ' );





//Question one
 var message="";
 var study="";
study =prompt("I was study computer information system?");
//console.log(study);
if(study==="yes"||study==="y"||study==="Y"||study==="YES"){
message=("That is right "+ userName);
}
else if(study==="no"||study==="n"||study==="N"||study==="NO"){
 message=("That is wrong "+userName);

}else{

    message=("wrong input");

}

alert(message);

//Question two
var graduated="";
graduated =prompt("I was graduated in 2019?");
//console.log(graduated);
if(graduated==="yes"||graduated==="y"||graduated==="Y"||graduated==="YES"){
    message=("That is wrong "+userName);
}
else if(graduated==="no"||graduated==="n"||graduated==="N"||graduated==="NO"){
    message=("That is right "+ userName);
}else{

    message=("wrong input");

}
alert(message);





//Question three
var University="";
University =prompt("I was study in the University of Jordan?");
//console.log(University);
if(University==="yes"||University==="y"||University==="Y"||University==="YES"){
 message=("That is right   "+ userName);
}
else if(University==="no"||University==="n"||University==="N"||University==="NO"){
 message=("That is wrong   "+userName); 
}else{

    message=("wrong input");

}
alert(message);

//Question four
var GPA="";
GPA=prompt("my GPA was 3.38 from 4 in the university?");
//console.log(GPA);
if(GPA==="yes"||GPA==="y"||GPA==="Y"||GPA==="YES"){
 message=("That is right   "+ userName);
}
else if(GPA==="no"||GPA==="n"||GPA==="N"||GPA==="NO"){
 message=("That is wrong   "+userName);
}else{

    message=("wrong input"); 

}
alert(message);


//Question five
var experience="";
experience=prompt("I have one years experience?");
//console.log(experience);
if(experience==="yes"||experience==="y"||experience=="Y"||experience==="YES"){
    message=("That is wrong   "+userName); 
}
else if(experience==="no"||experience==="n"||experience==="N"||experience==="NO"){

 message=("That is right   "+ userName);
}else{

    message=("wrong input");

}
alert(message);

alert("good bye " +userName + " come back soon");

