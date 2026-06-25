const browserName = "Chrome"  // 1. Declare a const name as browserName (global)//2. Assign value as Chrome
function getBrowserNameVar(){ // 3. Create a function by name getBrowserName
if (browserName === "Chrome") { //gCreate if condition inside function to check if browser is chrome, then
    console.log(browserName);
    var browserName = "Firefox"
    console.log("Inside if block (var):", browserName);
} 
  console.log("Outside if block but inside function (var):", browserName);
}
function getBrowserNameLet(){ // 3. Create a function by name getBrowserName
if (browserName === "Chrome") { //create if condition inside function to check if browser is chrome, then
   //console.log(browserName);
    let browserName = "MSEdge"
    console.log("Inside if block (Let):", browserName);
} 
  console.log("Outside if block but inside function (Let):", browserName);
}
console.log("Const browserName:", browserName);
console.log("browser name using var ---");
getBrowserNameVar();
console.log("browser name using let");
getBrowserNameLet();


 
