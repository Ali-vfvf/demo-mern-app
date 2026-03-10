function add() {

    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    fetch(`http://172.28.5.10:5000/add?a=${n1}&b=${n2}`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("result").innerText = "Result: " + data;
        });

}

function multiply() {

    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    fetch(`http://172.28.5.10:5000/multiply?a=${n1}&b=${n2}`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("result").innerText = "Result: " + data;
        });

}