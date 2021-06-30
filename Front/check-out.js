const displayOrderId = ()=> {
    const getOrderId = JSON.parse(localStorage.getItem("checkOut"));
    console.log(getOrderId.orderId)
    document.getElementById("orderId").textContent = getOrderId.orderId;
}

displayOrderId();

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    localStorage.clear()
});