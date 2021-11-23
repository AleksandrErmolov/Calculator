let a = ''; //Первое число
let b = ''; //Второе число
let sign = ''; //Знак операции
let finish = false;


const digint = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/']

//Вывод калькулятора
const out = document.querySelector('.calc-screen p')

function clearAll() {
    a = ''; //Первое число
    b = ''; //Второе число
    sign = ''; //Знак операции
    finish = false;
    out.textContent = 0
}

document.querySelector('.ac').addEventListener('click', clearAll)

document.querySelector('.buttons').addEventListener('click', (event) => {
    //Нажата не кнопка
    if (!event.target.classList.contains("btn")) return;
    //Нажата кнопка clearAll
    if (event.target.classList.contains('ac')) return;

    out.textContent = "";

    const key = event.target.textContent

    //Проверка на нажатие кнопки цифры
    if (digint.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
    
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }


    }
    //Проверка на действия
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return
        }
        


    //Нажата кнопка =
    if (key === '=') {
        if (b === "") b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case 'X':
                a = (+a) * (+b)
                break;
            case '/':
                if (b == '0') {
                    out.textContent = "Ошибка"
                    a = "";
                    b = "";
                    sign = "";
                    return
                }
                a = (+a) / (+b)
                break;
        }
        finish = true;
        out.textContent = a;

    }

})