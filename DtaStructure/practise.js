
// function getHigherLowerValue(arr){

//     let higher = arr[0];
//     let lower = arr[0];

//     for(let i=0; i<arr.length; i++){

//         if(higher < arr[i]){

//             higher = arr[i];

//         }

//         if(lower > arr[i]){

//             lower =arr[i];

//         }

//     }
//     console.log(higher,lower);

// }


// getHigherLowerValue([9, -9, 2, 3, -5])




/////////////////////////////////////////////



// function charCount(str){

//     let allChar={}

//     for(let i=0; i<str.length; i++){

//         let char = str[i];
//         if(allChar[char]>0){

//             allChar[char]++;

//         }else{
//             allChar[char] = 1;
//         }

//     }
// }


// charCount("Hello Everyone");


////////////////////////////////////////////////



// function sameNumber(arr1,arr2){

// if(arr1.length !== arr2.length){

//     return false;

// }

// for(let i=0; i<arr1.length; i++){

//     let currentVal = arr2.indexOf(arr1[i] ** 2)

//    if(currentVal === -1){

//     return false;

//    }

//    arr2.splice(currentVal,1);

// }

// return true;

// }

// console.log(sameNumber([2,4,7,6],[4,16,49,36]));


//////////////////////////////////////////////////////


// function sumOfNumber(n)
// {
//     if(n<0) return 0;

//     return n + sumOfNumber(n-1);

// }



// console.log(sumOfNumber(10))


//////////////////////////////////////////////////////


// function getOddNumber(arr){

//     let arrayOfOddNum = [];
//     function helpKor(input)
//     {

//         if(input.length === 0 ) return 0;
        

//         if(input[0]%2 !== 0){

//             arrayOfOddNum.push(input[0]);

//         }

//         helpKor(input.slice(1));

//     }

//     helpKor(arr);

//     return arrayOfOddNum;

// }



// console.log(getOddNumber([1,2,4,7,4,8,0,3,6,8,9,11]))