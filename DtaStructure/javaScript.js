
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

function person(first_name,last_name, gender){

    var output;
    var output1;

        if(gender === 'male'){

             output = 'Mr.' +first_name+ ' ' +last_name;

           

        }else if(gender === 'female')
        {
             output1 = 'Mrs.' +first_name+ ' ' +last_name;
             
             return output1;

        }else{

            return 'kew na'

        }
        return output;
       

}

console.log(person('shourav','khan','male'))