document.getElementById('main-form').addEventListener('submit', checkForm);// находим необходимый 
// объект через id main-form 
// и вешаем на него обработчик событий,
//  и добавляем события напримен submit и вызываем необходимую форму 

function checkForm(event){ //создаем функцию с переменной event так как обрабатываем событие
    event.preventDefault(); // отключает стандартное поведение отменяет перезагрузку страницы при нажатии на кнопку
    let el = document.getElementById('main-form');// заносим в переменную помещаем форму

    let name = el.name.value; //заносим в переменную значение из формы
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;
    
    
    let fail = ""; //создаем переменную сообщения ошибки


    //Далее обработчик заполнения полей 
    if(name == "" || pass == "" || state == ""){
        fail = "Fill the gaps";
    }
    else if((name.length) <= 1 || (name.lenght) > 50){
        fail = "Enter right name";
    }
    else if (pass != repass){
        fail = "password must be similars";
    }
    else if (pass.split("&").length>1){
        fail = "uncorrect password";
    }
    
    if (fail != ""){
        document.getElementById('error').innerHTML = fail; 
        
    } else {
        alert ('all right');
        window.location = 'https://itproger.com'; //после успешного заполнения полей переадресовка на любую страницу
      
    }
  
}
// INTERVALS
// let inter = setInterval(myFunc, 1000);
//  let counter = 0;
//  function myFunc(){
//      counter++;
//      console.log('Counter: '+ counter);
//     if(counter == 3){
//         clearInterval(inter);
//     }
//  }


// setInterval(function(){
//     counter++;
//     console.log('Counter: '+ counter);
// }, 1000);

// TIMERS
// setTimeout(function(){
//     console.log('Timer is working');
// }, 2000);

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
 
class Person{
    constructor(name, age, happiness){
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info(){
        console.log("Man: "+this.name+ " Age: "+this.age);
    
    }
}
 
let alex = new Person('Alex', 45, true);
console.log(alex.name);
alex.info();
