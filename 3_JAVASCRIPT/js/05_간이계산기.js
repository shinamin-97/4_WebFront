const num1 =  document.getElementById("num1");
const num2 =  document.getElementById("num2");

function plus() { // 함수 정의 (코드가 있다는 것을 인식하고 호출 전까지 수행x)

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행
    // const n1 = Number(num1.value);
    // const n2 = Number(num2.value);

    // colculration.innerHTML = n1 + n2;
    
    colculration.innerHTML = Number(num1.value) + Number(num2.value);
}

function minus() {
    colculration.innerHTML = Number(num1.value) - Number(num2.value);
}

function multiple() {
    colculration.innerHTML = Number(num1.value) * Number(num2.value);
}

function divison() {
    colculration.innerHTML = Number(num1.value) / Number(num2.value);
}

function rest() {
    colculration.innerHTML = Number(num1.value) % Number(num2.value);
}