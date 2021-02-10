'use strict';
let userName = '';
userName = prompt('what is your name?');
//console.log(userName);
alert('welcome  ' + userName);

alert('There are five questions answer it with yes or no  ');



let score = 0;
//Question one
let study = prompt('I was study computer information system?');
alert(q1(study));

function q1(answer) {
    if (answer === 'yes' || answer === 'y' || answer === 'Y' || answer === 'YES') {
        score = score + 1;
        return ('That is right ' + userName);

    }
    else if (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {
        return ('That is wrong ' + userName);

    } else {

        return ('wrong input');

    }
}

//console.log(study);




//Question two

let graduated = prompt('I was graduated in 2019?');
alert(q2(graduated));
function q2(answer) {
    if (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {
        score = score + 1;
        return ('That is right ' + userName);

    }
    else if (answer === 'yes' || answer === 'y' || answer === 'Y' || answer === 'YES') {
        return ('That is Wrong ' + userName);

    } else {

        return ('wrong input');

    }

}
//console.log(graduated);


//Question three

let university = prompt('I was study in the University of Jordan?');
alert(q3(university));
function q3(answer) {
    if (answer === 'yes' || answer === 'y' || answer === 'Y' || answer === 'YES') {
        score = score + 1;
        return ('That is right   ' + userName);

    }
    else if (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {
        return ('That is wrong   ' + userName);

    } else {

        return ('wrong input');


    }
}

//console.log(University);

//Question four
let GPA = prompt('my GPA was 3.38 from 4 in the university?');
alert(q4(GPA));

function q4(answer) {
    if (answer === 'yes' || answer === 'y' || answer === 'Y' || answer === 'YES') {
        score = score + 1;
        return ('That is right   ' + userName);
    }
    else if (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {
        return ('That is Wrong   ' + userName);

    } else {

        return ('wrong input');


    }

}

//console.log(GPA);

//Question five

let experience = prompt('I have one years experience?');
alert(q5(experience));

function q5(answer) {
    if
    (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {

        score = score + 1;
        return ('That is Right   ' + userName);
    }else if

    (answer === 'yes' || answer === 'YES' || answer === 'y' || answer === 'Y') {

        return ('That is Wrong   ' + userName);

    } else {
        return ('wrong input');

    }

}


//console.log(experience);



//Question six


let place = prompt(' How many Top 10 strange place i mentionsed in my page?', ' The answer must be anumber');

alert(q6(place));

function q6(answer) {

    let i = 0;
    for (i = 0; i < 3; i++) {
        if (parseInt(answer) === 10) {
            score = score + 1;

            return ('That is right the currect number is '+ answer);

        } else if (parseInt(answer) > 10) {

            alert('That is too high');
            answer = prompt(' How many strange place i mentionsed in my page?', ' The answer must be anumber');

        } else {

            alert('That is too low');
            answer = prompt(' How many strange place i mentionsed in my page?', ' The answer must be anumber');
        }

    }
}



//console.log(place);



//console.log(score);

// question 7

let fun = prompt('This question  for fun :Type the name of one of the governorates of Jordan?');
let governorates = ['irbid', 'ajloun', 'jerash', 'mafraq', 'balqa', 'amman', 'zarqa', 'madaba', 'karak', 'tafilah', 'maan', 'aqaba', 'Irbid', 'Ajloun', 'Jerash', 'Mafraq', 'Balqa', 'Amman', 'Zarqa', 'Madaba', 'Karak', 'Tafilah', 'Maan', 'Aqaba'];
alert(q7(fun));
function q7(answer) {
    let a = 0;
    for (a = 0; a < 5; a++) {
        if (governorates.includes(answer)) {
            score = score + 1;
            return ('You are right ');
        }
        else {
            answer = prompt('Try again :Type the name of one of the governorates of Jordan?');
        }

    }
}




//console.log(governorates);


//console.log(fun);
alert('your score is ' + score);















