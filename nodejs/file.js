 const fs=require("fs")

fs.writeFileSync("./test.txt","hey hii")

const result=fs.readFileSync("./contacts.txt","utf-8")
console.log(result);
fs.readFile("./contacts.txt","utf-8",(err,result) =>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result)
    }
})

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
fs.appendFileSync("./test.txt",`${Date.now()}hey there\n`)
fs.appendFileSync("./test.txt",`${Date.now()} hey there \n `)
fs.unlinkSync("./copy.txt")//command use for delete 
console.log(fs.statSync("./test.txt"))
fs.mkdir("my-docs")