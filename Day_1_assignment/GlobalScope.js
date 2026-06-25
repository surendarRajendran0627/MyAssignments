let genderType = "Female"
function printGender() {
    let color = "brown"
     console.log("Inside the function :" ,color);
    if (genderType.startsWith("Female")) {
        var age = 30

        let color = "Pink"
        console.log("Inside the if condition:" ,color);
        
    }
     console.log("Outside if condition:",age);
     console.log("Outside if condition:",color);
}
printGender()


console.log("Global variable genderType:", genderType);

genderType ="Male"
console.log("Global variable after change:", genderType);

printGender() 

