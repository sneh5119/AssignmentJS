
// console.log("Input n");
 
function enterInput(){
    var n=window.prompt(" Enter n : ");
    // var arr=window.prompt("Enter color of socks : ")
    
    var arr=[];
for(var i=0; i<n; i++) {
	//Taking Input from user
	arr[i] = prompt('Enter Element ' + (i+1));
}
 
let count=0;
for(let i=0;i<n;i++){
  if(arr[i]===arr[i+1]){
    count++;
    i++;
  }

}
document.getElementById("demo").innerHTML="The number of pairs : "+count;

}

    //  ccc(arr,n);   

    // function ccc(arr,n){
   

var arr=[ 10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40 ]


function countPair(arr){
  
  let count=0;

  for(let i=0;i<arr.length;i++){
      if(arr[i]===arr[i+1]){
         count++;
         i++;
      }
  }


// console.log(count);
// console.log(arr.length);
return count;
}

countPair(arr)

