function add() {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    // Use /api/... so Nginx handles the forwarding
    fetch(`/api/add?a=${n1}&b=${n2}`)
        .then(res => res.json())  // backend sends JSON
        .then(data => {
            document.getElementById("result").innerText = "Result: " + data.result;
        });
}

function multiply() {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    fetch(`/api/multiply?a=${n1}&b=${n2}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerText = "Result: " + data.result;
        });
}