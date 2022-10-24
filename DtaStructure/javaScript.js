
// Two Numbers +,-,*,/ then sum all

// function parent(a,b){

//     function sum(){

//         return a+b;

//     }

//     console.log(sum());

//     function sub(){

//         return a-b;
//     }

//     console.log(sub())

//     function multiple(){

//         return a*b;
//     }

//     console.log(multiple())

//     function div(){

//         return a/b;
//     }

//     console.log(div())

//     return sum() + sub() + multiple() +div();


// }

// let add = parent(10,5)
// console.log(add);


/////////////////////////////////////
// Male or female detect
/////////////////////////////////////

// function person(first_name,last_name, gender){

//     var output;
//     var output1;

//         if(gender === 'male'){

//              output = 'Mr.' +first_name+ ' ' +last_name;

           

//         }else if(gender === 'female')
//         {
//              output1 = 'Mrs.' +first_name+ ' ' +last_name;
             
//              return output1;

//         }else{

//             return 'kew na'

//         }
//         return output;
       

// }

// console.log(person('shourav','khan','male'))


// let me = {
//     name : 'shourav',
//     age :22,
//     email : 'shourav@gmail.com'
// }

// function printMySelf(person, callback){

//     console.log('Hi '+  person.name +' '+ 'age is '+' '+ person.age)

//     if(person.age > 18){

//         callback(person.email);

//     }
// }

//  printMySelf(me, function(email){

//     console.log('Eamil has sent by '+ email );

//  });


// function information(data, callback1, callback2){

//     console.log('Trust me: '+ data )
//     callback1(data);
//     callback2(data);

// }

// information('There has no peace in my mind, earnival company is responsible for this', function(data){

//     var u = data.toUpperCase();

//     console.log(u);
// }, function(data){

//     var l = data.toLowerCase();

//     console.log(l);

// });



// let x = 'Hello sanin';

// function stName(){

//     console.log('This is from '+ x)

// }

// console.log(stName());

//////////////////////////////////
// object sorting by age
///////////////////////////////////

// let personDetails = [

//     {name: 'Rakib', age:18},
//     {name: 'Hossen', age:22},
//     {name: 'khan', age:30},
//     {name: 'shourav', age:44}
    

// ]

// personDetails.sort(function(a,b){


//     if(a.name > b.name){

//             return 1

//     }else if(a.name < b.name){

//         return -1

//     }else{
//         return 0
//     }

// })

// console.log(personDetails);

// let arr = [2,4,6,8,0,6,44556,7];



// arr.forEach(function(elements,index,arr){

//     console.log(elements,index,arr);
// });

// function array(arr, callback){
//     for(let i=0; i<arr.length; i++){
//        callback(arr[i]);

//     }
// }


// array(arr, function(element){

//     console.log(element);


// });





/////////////////////////////////////////////////
// 1+2+3+............+nth term
/////////////////////////////////////////////////

// function series(){

//    let i,n,sum=0;

//    console.log("Enter the number: ");
//     let x =  prompt(n);
//    console.log(`1+2+3+..........+${x}`);

//    for(i=1; i<=x; i=i+1){

//     sum = sum + i;

//    }

//    console.log(sum);

// }

// series();

////////////////////////////////////////////

// function summation(){

//     let sum=0,i,n;

//     let x = prompt(n);

//     console.log(`1+2+3+............+ ${x}`);

//     for(i=33; i<=x; i=i+10){

       

//         sum = sum+i;



//     }

//     console.log(`= ${sum}`);


// }

// summation();

///////////////////////////////////////////
// 1-2+3-4+............+nth term
///////////////////////////////////////////


// function evenOdd(){

//     let n,i,even=0,odd=0;

//     console.log("Enter Number: ");
//     let x = prompt(n);

//     for(i=1; i<=x; i++){

//         if(i%2==0){

//             even = even + i;
            
//         }else{

//             odd = odd + i;
//         }
//     }

//     console.log(`numbers ${odd}-${even}`);
// }

// evenOdd();













