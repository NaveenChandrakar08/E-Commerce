const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".MenuItem");
menuItems.forEach((item,index) =>{
    item.addEventListener("click" , () =>{
        wrapper.style.transform = `translateX(${-100 *index}vw)`
    }); 
});
document.addEventListener("DOMContentLoaded", function() {
    const BuyButtons = document.querySelectorAll(".BuyButton");
    const Payment = document.querySelector(".payment");
    const close = document.querySelector(".close");
    const checkout = document.querySelector(".paybutton")

    BuyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            Payment.style.display = "flex";
        });
    });
    checkout.addEventListener("click", () =>{
        alert("Order Confirmed !")
    })

    close.addEventListener("click", () => {
        Payment.style.display = "none";
    });
});
