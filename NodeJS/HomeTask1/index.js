let cmds = process.argv;
//finding the index 
let operationIndx = cmds.indexOf("--operation");
  
if (operationIndx === -1) {
    console.log("Invalid command. Please enter a valid command.");
}
 
let ans = 0;
let op = cmds[operationIndx + 1];

if(op === "addition"){
    for (let i = operationIndx + 2; i < cmds.length; i++)
        ans += Number.parseInt(cmds[i]);
    
    console.log(`${op} result : ${ans}`);
}
else if (op === "multiply"){
    ans = 1;

    for (let i = operationIndx + 2; i < cmds.length; i++)
    ans = ans * Number.parseInt(cmds[i]);
    console.log(`${op} result : ${ans}`);
}
else if (op === "subtraction"){
    if (cmds.length !== 6) {
      console.error("Incorrect command only two operands allowed for this operation.");
    }

    if(cmds[operationIndx + 2] > cmds[operationIndx + 3])
        ans = Number.parseInt(cmds[operationIndx + 2]) - Number.parseInt(cmds[operationIndx + 3]);

    else
    ans = Number.parseInt(cmds[operationIndx + 3]) - Number.parseInt(cmds[operationIndx + 2]);

    console.log(`${op} result : ${ans}`);
}
else if (op === "division"){
    if (cmds.length !== 6) {
       console.error("Incorrect command only two operands allowed for this operation.");
    }

    if(cmds[operationIndx + 2] > cmds[operationIndx + 3])
        ans = Number.parseInt(cmds[operationIndx + 2]) / Number.parseInt(cmds[operationIndx + 3]);
    else
        ans = Number.parseInt(cmds[operationIndx + 3]) / Number.parseInt(cmds[operationIndx + 2]);
        
    console.log(`${op} result : ${ans}`);
}
else{
    console.error("Invalid Operation");
}
  
  