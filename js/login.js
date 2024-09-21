console.log("paici mama")
document.getElementById('button-login').addEventListener('click', function(event){
    console.log('mama')
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '01409012843' && pinNumber === '1234' ) {
        window.location.href = '/home.html';
    }
    else{
        alert('Your Number is 01409012843 & Your pin 1234')
    }
    console.log(phoneNumber)
})