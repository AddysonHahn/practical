var array =[{number:-30},
            {number:14},
            {number:66},
            {number:21},
            {number:72},
            {number:-4},
           ];
var num =[];
function numbers (number){
  var that=this
  this.number=number;
  this.ele.=document.createElement("div");
  this.ele.innerHTML="The number is "+this.number+;
  this.ele.addEventListener("click", function(){
  that.increaseNumber();  
  })
  document.body.appendChild(this.ele);
}

numbers.prototype.increaseNumber=function (){
  this.number=this.number+1;
  this.ele.innerHTML=this.number;
}


for(var i = 0; i < array.length; i++){
   num.push(new numbers(data[i].number))
  if (this.ele[i]>0) {
    document.querySelector(".wrapper").innerHTML = "and it is less than 0.";
  } else if (this.ele[i]>50) {
    document.querySelector(".wrapper").innerHTML = "and it is greater than 50.";
  } else if (this.ele[i]=14){
    document.querySelector(".wrapper").innerHTML = "and it equals 14.";
  }

   num[0].increaseNumber();