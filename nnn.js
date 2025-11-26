// user events

// user event = something happened on the page  

// 1st step : grab an element to respond to an user event
const btn = document.querySelector('button')

// 2nd step : attach an event listener to this element
btn.addEventListener('click', function(){
    // alert('Pop up coming from the callback function')
alert("oui")
    // at click, remove the ul element
    const ul = document.querySelector('ul')
    // ul.remove()
    ul.remove()
})



// deal with formulas

// input : a basic interaction

// 1) grab the input html element

const input = document.querySelector('input')

// 2 ) attach an event listener


let firstName = []

const onInputChange =  function onInputChange(event){ // we can check for the details of an event using the first parameter
    // console.log('input event fired')

    // console.log(event) // a lot of properties : the target one is the most relevant here

    // console.dir(event.target) // the target property points to the element that triggered the event

    console.log(event.target.value)
    console.log(event.target.value.length)
    if(event.target.value.length <4) {
        // input.value
        btn.disabled = true;
        return;
    }
  
    firstName = event.target.value 

    btn.disabled = false;

    // console.log('firstName grabbed from the input is : ', firstName)

    // console.log(guests)

    // const varInsideAChildScope = null
}

// console.log(varInsideAChildScope)

input.addEventListener('input', onInputChange)

// Ex : we want to add some guests to a guest list and make them appear inside the browser

// When we added the guest, we want the input to be clear of any letters

// Enable the button 'Add guest' when the guest's name is at least 4 characters

const guests = []
const ulGuests = document.querySelector('ul#guests')

btn.addEventListener('click', function(){
    console.log('Add a guest')

    // add a guest inside my guests array

    console.log(firstName)

    guests.push(firstName)
    console.log('guests = ', guests)

    // add the guests array inside the DOM

    const li = document.createElement('li')
    // li.textContent = firstName;

    // ex : when click on the X button, the guest is no more invited
    li.innerHTML = `<strong>${firstName}</strong> <button id="x">X</button>`
    ulGuests.append(li)

const inpot = input.variable.trim();
//amin did this extra

    // clear selection
    input.value = '';

    // focus on the input to type again a guest
    input.focus()

    // disable the button again
    btn.disabled = true;
    

   let xbtn =  document.getElementById('x')
xbtn.addEventListener('click', function(){
    
    firstName.pop();
    ulGuests.pop();
li.remove();
    return;})
    
    return;

 
})



// a reminder about scope

// scope = how far can I acess from my variables

// the children can access the parent but not the contrary#
