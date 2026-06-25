function launchBrowser(browserName) {

if (browserName === "Chrome") {
    console.log(browserName, "Browser launched");
      
} else {

     console.log("Launching ", browserName ," browser");
}    
}
launchBrowser("Chrome")
launchBrowser("Safari")

function runTests(testType) {

    switch (testType) {
        case "smoke":
            console.log("Test type for the run test is :", testType );
            
            break;
        case "sanity":
            console.log("Test type for the run test is :", testType );
            
            break;

        case "regression":
            console.log("Test type for the run test is :", testType );
            
            break;   
    
        default:
            console.log("Defaut Test type for the run test is : Chrome" );
            
            break;
    }
    
}
runTests("smoke")
runTests("Unit")