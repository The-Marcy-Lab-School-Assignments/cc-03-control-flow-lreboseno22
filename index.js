//1
function countFromOne(integer){
  for (let i = 1; i <= integer; i++){
      console.log(i);
  }
}
console.log(countFromOne(5));
//2
function countEveryOdd(integer){
  for (let i = 1; i < integer; i ++){
      if (i % 2 !== 0){
          console.log(i);
      }
  }
} 
console.log(countEveryOdd(10));
//3
function isNegative(num){
   if (num < 0) {
       return true;
   } else {
       return false;
   }
}  
console.log(isNegative(-8));
//4
function betweenFiveAndTwenty(num){
  if(num >= 5 & num <= 20){
         return true;
     } else {
         return false;
     }
}
console.log(betweenFiveAndTwenty(22));
//5 
function isAllLowerCase(string){
  for (let i = 0; i < string.length; i++) {
      if (string === string.toLowerCase()){
          return true;
      } else {
          return false;
      }
  }
}
console.log(isAllLowerCase("HELLO"));