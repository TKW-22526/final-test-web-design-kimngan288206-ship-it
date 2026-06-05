function orderDrink() {
    let drink = document.getElementById("drink").value;

    document.getElementById("result").innerHTML =
        "☕ Bạn đã chọn " + drink +
        ". Cảm ơn bạn đã ghé Dewdrop Cafe!";
}