// let obj={
//     name:"devendra",
//     class:12,
//     rollNO:123345,
//     bol:true,
//     f:function(){
//     return "ram"
//    },
//   c(){
//     console.log("DEVEMDRA")
//   }
// }

// obj.course=function(){
//     return "mcsta"
// }

// console.log(obj) 

// function con(n,m,r){

//     return{
//         NAME:"DEVENDRA",
//         MS:n,
//         roll:m,
//         mark:r
//     }
// }

// console.log(con("dev",1232,660))
// console.log(con("RALA"))

 
// function Data(nam,rol,sta){

//     let bag={
// name:nam,
// role:rol,
// status:sta
// }

// // console.log(bag.role)
// // console.log(bag.status)

// let massage=(bag.role=="admin" && bag.status==true)?"Admin Access Granted!":(bag.role=="admin"&&bag.status==false)?"Admin Access Revoked":(bag.role=="user" && bag.status==true)?"User Access Granted":(bag.role=="user"&&bag.status==false)?"User Access revoked":"Access Denied"


// console.log(massage)
// }
// Data("Devendra","admin",true)
// Data("ravi","user",true)


//q=15

function adManagement(nam,rol,exp,act,depart){

let person={

    name:nam,
    role:rol,
    experience:exp,
    active:act,
    department:depart
}//console.log(person)
//for the Admin Role

let massage=(person.role=="admin" && person.experience>5 && person.department=="IT"&&person.active==true)?"Full It Admin Access":(person.role=="admin" && person.experience>5 &&person.active==true)?"Full General Admin Access":(person.role=="admin" && person.experience<=5 && person.department=="IT"&&person.active==true)?"Limited Admin Access":(person.role=="admin"&&person.active==false)?"Admin Access Revoked":(person.role=="Manager" && person.experience>3 && person.department=="Sales"&&person.active==true)?"Full Sales Manager Access":(person.role=="Manger" && person.experience>3 &&person.active==true)?"Full Manager Access":(person.role=="Manager" && person.experience<=3 &&person.active==true)?"Limited Manager Access":(person.role=="Manager" && person.active==false)?"Manager Access Reviked":"OK"

console.log(massage)


}


adManagement("devendra","admin",5,false,"IT")