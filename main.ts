import inquirer from "inquirer";
const todos:string[]=[];
let loop = true
while(loop){
    const ans :{
        todo:string,
        retry:boolean,
    }= await inquirer.prompt([{
        type:"input",
        name:"todo",
        message:"what you want to enter "
   },
{
    type:"confirm",
    name:"retry",
    message:"do you want enter more",
    default:false
}])
const {todo,retry}= ans;
loop=retry;
if(todo){
    todos.push(todo)

}
else{
    console.log("kindly enter valid input")
}
}
console.log(todos)


