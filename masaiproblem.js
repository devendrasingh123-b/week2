// q=11
// let age=50;

// let bag=(0>=age)?"Invalid Age":(age>=60)?"Eligible for Senior Discount":"Not Eligible for Senior Discount"
// console.log(bag)


//q12

// function larNum(num1,num2,num3){

// let bag=(num1>num2)?(num1>num3)?num1:num3:(num2>num3)?num2:num3
// return bag
// }

// console.log(larNum(200,50,400))


//q13

// function priceTag(price){

// let bag=(price>=1000)?"Expensive":(price>=500 && price<=999)?"Moderate":(price<500 && price>0)?"Affordable":(price==0)?"Free":"Invalid price"

// return bag
// }

// console.log(priceTag(-1))


//q=14

function mapCharAndSum(N,K,str) {
    // Write code here
  
  let obj={};
  let bag=0;
for(let i=0;i<=25;i++){
    obj[String.fromCharCode(97+i)]=(N+i) 
}

for(let i=0;i<K;i++){
let charec=str[i]

bag+=obj[charec]
console.log(bag)
}
  
      
  }
  
mapCharAndSum(30,3,"z")  