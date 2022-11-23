let $form = document.querySelector('#form');
let $btn = document.querySelector('#btn');
let $size = document.querySelector('#measurement');
const inputs = document.getElementsByName('size');
const checkBoks = document.getElementsByName('choosee_pizza');
const boksCheck = document.getElementsByName('pizza_choosee')

let userArray = [

]



$form.addEventListener('submit', (evt)=> {
    evt.preventDefault()


    let { user_name, user_phone, user_address, size } = evt.target.elements
    let sum = 0

    let sum2 = 0

    let sum3 = 0

    let sum4 = 0

    if (inputs[0].value == 'Thin') {
        sum = 10
    } else if(inputs[0].value == 'Medium') {
        sum = 15
    } else if (inputs[0].value == 'Thick') {
        sum =20
    } else {
        alert("Hato ma'lumot")
    }


    if (size.value == '25') {
        sum2 = 10
    } else if(size.value == '30') {
        sum2 = 12
    } else if (size.value == '35') {
        sum2 =15
    } else {
        alert("Hato ma'lumot")
    }


    if (checkBoks[0].value == 'Tomato') {
        sum3 = 5
    } else if(checkBoks[0].value == 'Turkey meat') {
        sum3 = 5
    } else if (checkBoks[0].value == 'Olive') {
        sum3 = 5
    } else if(checkBoks[0].value == 'Pickled cucember'){
        sum3= 5
    } else if(checkBoks[0].value == 'Mushroom'){
        sum3= 5
    } else if(checkBoks[0].value == 'Horse meat'){
        sum3= 5
    }
    else {
        alert("Hato ma'lumot")
    }


    if (boksCheck[0].value == 'Pepper'){
        sum4 = 3
    } else if(boksCheck[0].value == 'Sausages'){
        sum4 = 3
    }
    else {
        alert("Hato ma'lumot")
    }


    let newObj = {
            id: userArray.length + 1,
            name: user_name.value.trim(),
            phone: user_phone.value.trim(),
            address: user_address.value.trim(),
            sizePizza: inputs[0].value,
            size: size.value,
            boks: checkBoks[0].value,
            moks: boksCheck[0].value,
            add: sum + sum2 + sum3 + sum4


    }



    userArray.push(newObj)
    console.log(userArray);
    renderFunction(userArray, $btn)




})


var renderFunction = (array , element)=>{
    element.innerHTML = null
    for(let i =0; i <array.length; i++ ){
        element.innerHTML +=`
            <li element.className = 'li'>
            <p element.className ='p' > Check number: ${array[i].id}</p>
            <p className = 'p'>Name: ${array[i].name}</p>
            <p className = 'p'>Phone: ${array[i].phone}</p>
            <p className = 'p'>Address: ${array[i].address}</p>
            <p className = 'p'>Size: ${array[i].sizePizza}</p>
            <p className = 'p'>Pizza: ${array[i].size}</p>
            <p className = 'p'>Qo'shimcha: ${array[i].boks},${array[i].moks} </p>
            <p className = 'p'>Add: ${array[i].add}</p>
            </li>
        `

    }
}

renderFunction(userArray, $btn)