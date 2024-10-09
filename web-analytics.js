function trackInteraction (action,callback) {
setTimeout(()=>{
    let d=`User ${action}ed `;
callback(d)
    },3000);
}
trackInteraction("click", function(data) {
    console.log(data); // Expected: "User clicked on button"
});
trackInteraction("page view", function(data) {
    console.log(data); // Expected: "User viewed the page"
});
    
trackInteraction("click", function(data) {
    console.log(data); // Expected: "User clicked on button"
});
trackInteraction("page view", function(data) {
    console.log(data); // Expected: "User viewed the page"
});
