
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


//////////////////////////////////////////////////////////

// // Linear Search

// function linearSearch(arr,val){

//     for(let i=0; i<arr.length;i++){

//         if(arr[i] == val) {
//             return i
//         }

//     }

//     return -1
// }

// console.log(linearSearch([2,28,33,12,100],100))


//////////////////////////////////////////////////////////////

// Binary Linear search

// function binarySearch(arr, value){

//     let start = 0;
//     let end = arr.length - 1 ;

//     while(start<=end){

//         let middle = Math.round((start+end)/2);

//         if(value === arr[middle]) return middle;

//         if(value > middle){

//             start = middle + 1


//         }else if(value < middle){

//             end = middle - 1

//         }

//     }

//     return -1

// }

// console.log(binarySearch([1,3,5,7,9,11,15,17],15))


///////////////////////////////////////////////////////////////

// Sorting Algorithm

//////////////////////////////////////////////////////////////

// Bubble Sort


// function bubbleSort(arr)
// {

//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-1 ;j++){

//            if(arr[j]>arr[j+1]){

//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp

//            }
            
//         }
//     }

//     return arr

// }

// console.log(bubbleSort([1,8,4,9,-2,4]))


///////////////////////////////////////////////////////////


