//q11

// let book={

//     title:"The Hoit",
//     author:"J.R.R Tok",
//     year:1957
// }
// let bag=""
// for(let key in book){

//     bag+=`${key}:${book[key]}`+" "

// }
// console.log(bag)

//q12

// let str="aabacdeg";

// let obj={}

// for(let i=0;i<=str.length-1;i++){

//     if(obj[str[i]]){
//          obj[str[i]]++
//     }else{
//         obj[str[i]]=1
//     }
// }



// console.log(obj)

//happy no

// function HappyNum( n ){
  
//     num=n
    
//     obj = {}
    
//     while(num !==1   &&   !obj[num]){
       
//       obj[num]=true
//        total=0
//        while(num>0){
//          d= num%10
//          total+=d*d
//          num= num/10
//          num=Math.floor(num)
//        }
       
//        num=total
//     }
    
//     if(num==1){
//       console.log(`number ${n} is happy `)
//     }
//     else{
//       console.log(`number ${n} is not happy `)
//     }
  
    
//   }
//   HappyNum( 19 )
//   HappyNum( 14 )
//   HappyNum( 83 )
//   HappyNum( 1 )  


// for(let i=1;i<=4;i++){

//   let bag="";
//   for(let j=1;j<=4;j++){
//     if((i+j)%2==0){
//       bag+="1"+" "
//     }else{
//       bag+= "0"+" "
//     }
    
//   }
//   console.log(bag)


// }

//let n=4
// for(let i=1;i<=n;i++ ){
// let bag="";
//   for(let j=1;j<=n;j++){
// if(i==1||j==1||j==n||i==n){
//   bag+="*"
// }else{
//   bag+=" "
// }
//   }
//   console.log(bag)


// }

