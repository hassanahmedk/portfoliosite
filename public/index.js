console.log("local working");

setTimeout(()=>{
    // console.log("inside timeout");
    // console.log(document.getElementById("hubspot-messages-iframe-container"));
    // document.getElementById("hubspot-messages-iframe-container").addEventListener("click", function(event) {
    //     if(document.querySelector(".hs-shadow-container").classList.contains("active")){
    //         console.log(12);
    //     }
    // }, false)
    document.getElementById("hubspot-conversations-iframe").addEventListener("click", ()=>{
        console.log(12);
    })
    console.log(document.querySelector(".hs-shadow-container").classList.contains("active"));
    
}, 2000)



// document.onload=doa();


// function doa() {
//     alert(12)
// document.getElementById("live-chat-widget").style.transform="translateY(40px)"
// }