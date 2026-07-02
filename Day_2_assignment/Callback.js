// Step 1: Declare a global variable
let browser = "Chrome";
// Step 2: Function that accepts a callback and async operation with setTimeout
function checkBrowserVersion(callback) {
    setTimeout(() => {
        // After 2 seconds, invoke the callback with the browser value
        callback(browser)

    }, 2000);

}
// Step 3: Callback function
function inovkeBrowserVersion(version) {
    // Log the browser version when the callback is executed
    console.log(`Browser version ${version}`);
}
// Step 4: Call checkBrowserVersion and pass the callback
checkBrowserVersion(inovkeBrowserVersion)