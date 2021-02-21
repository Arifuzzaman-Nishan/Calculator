const getId = (id) => {
    return document.getElementById(id);
}

let strNumber = "";
let strSum = "";
let sum = 0;


let add = 0;
let sub = 0;
let mul = 0;
let div = 0;

let delF = 0;
let cnt = 0;

getId("calc-body").addEventListener("click", (event) => {

    const currentNumber = event.target.innerText;
    cnt = 0;

    if (currentNumber.length <= 3) {
        if (isNaN(currentNumber)) {
            if (currentNumber === "AC") {
                getId("display").value = "";
                sum = 0;
            }
            else if (currentNumber === "DEL") {
                let number = getId("display").value;
                number = number.slice(0, number.length - 1);
                getId("display").value = number;
                strNumber = strNumber.slice(0,strNumber.length-1);
                if(strNumber.length === 0){
                    cnt++;
                }
                if(cnt >= 3){
                    strSum = sum.toString();
                    strSum = strSum.slice(0,strSum.length-1);
                    sum = parseInt(strSum);
                }
            }
            else {
                // if (delF === 1) sum = 0;
                switch (currentNumber) {
                    case '+':
                        // console.log( strNumber);
                        getId("display").value += currentNumber;

                        if (strNumber != "") {
                            sum += parseInt(strNumber);
                        }
                        // console.log(sum);
                        strNumber = "";
                        add = 1;
                        sub = 0;
                        mul = 0;
                        div = 0;
                        break;
                    case '-':
                        getId("display").value += currentNumber;
                        if (strNumber != "") {
                            if (sum === 0) {
                                sum += parseInt(strNumber);
                                strNumber = "";
                            }
                            else {
                                sum -= parseInt(strNumber);
                                strNumber = "";
                            }
                        }
                        // console.log(sum);
                        add = 0;
                        sub = 1;
                        mul = 0;
                        div = 0;
                        break;
                    case '*':
                        getId("display").value += currentNumber;
                        if (strNumber != "") {
                            if (sum === 0) {
                                sum += parseInt(strNumber);
                                strNumber = "";
                            }
                            else {
                                sum *= parseInt(strNumber);
                                strNumber = "";
                            }
                        }
                        // console.log(sum);
                        add = 0;
                        sub = 0;
                        mul = 1;
                        div = 0;
                        break;
                    case '/':
                        getId("display").value += currentNumber;
                        if (strNumber != "") {
                            if (sum === 0) {
                                sum += parseInt(strNumber);
                                strNumber = "";
                            }
                            else {
                                sum /= parseFloat(strNumber);
                                strNumber = "";
                            }
                        }
                        //console.log(sum);
                        add = 0;
                        sub = 0;
                        mul = 0;
                        div = 1;
                        break;
                    default:
                        if (add === 1) {
                            sum += parseInt(strNumber);
                        }
                        else if (sub === 1) {
                            sum -= parseInt(strNumber);
                        }
                        else if (mul === 1) {
                            sum *= parseInt(strNumber);
                        }
                        else if (div === 1) {
                            sum /= parseFloat(strNumber);
                        }
                        console.log(sum);
                        getId("display").value = "";
                        getId("display").value = sum;
                        strNumber = "";
                }
            }
        }
        else {
            getId("display").value += currentNumber;
            strNumber += currentNumber;
        }
    }

})
