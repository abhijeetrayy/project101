const ham = document.querySelector('.barlogo')

const navUL = document.querySelector('.nav-ul')

ham.addEventListener('click', () =>{
    navUL.classList.toggle('show')
})



let random = Math.floor(Math.random() * (6 - 1) ) + 1;
  
console.log(random)

if (random == 1){
    document.querySelector('.name').innerHTML = "Arpan Kumar"
    document.querySelector('.statusword').innerHTML = "UnSafe"
    document.querySelector('.barstatus').style.backgroundColor = 'rgb(224, 88, 78)'
    document.querySelector('.dose').innerHTML = "Vaccine Doses: 0"
    document.querySelector('.id').innerHTML = "1000011235"
    document.querySelector(".qrimg").src="images/unsafe.png";
}


if (random == 2){
    document.querySelector('.name').innerHTML = "Abhijeet Ray"
    document.querySelector('.statusword').innerHTML = "Safe"
    document.querySelector('.barstatus').style.backgroundColor = 'rgb(97, 228, 130)'
    document.querySelector('.dose').innerHTML = "Vaccine Doses: 2"
    document.querySelector(".qrimg").src="images/safe.png";
}


if (random == 3){
    document.querySelector('.name').innerHTML = "Dr. Sisir Kumar Jena"
    document.querySelector('.statusword').innerHTML = "Safe"
    document.querySelector('.barstatus').style.backgroundColor = 'rgb(97, 228, 130)'
    document.querySelector('.dose').innerHTML = "Vaccine Doses: 2"
    document.querySelector('.id').innerHTML = ""
    document.querySelector('.course').innerHTML = "Assistant Professor"
    document.querySelector('.info').style.backgroundColor = "rgb(240, 81, 41)"
    document.querySelector(".qrimg").src="images/safe.png";

}

if (random == 4){
    document.querySelector('.name').innerHTML = "Rahul Bhatt"
    document.querySelector('.statusword').innerHTML = "1 Dose"
    document.querySelector('.barstatus').style.backgroundColor = 'rgb(53, 152, 218)'
    document.querySelector('.dose').innerHTML = "Vaccine Doses: 1"
    document.querySelector('.id').innerHTML = "100001586"
    document.querySelector(".qrimg").src="images/singledose.png";
}

if (random == 5){
    document.querySelector('.name').innerHTML = "Saurav Singh Bisht"
    document.querySelector('.statusword').innerHTML = "UnSafe"
    document.querySelector('.barstatus').style.backgroundColor = 'rgb(224, 88, 78)'
    document.querySelector('.dose').innerHTML = "Vaccine Doses: 0"
    document.querySelector('.id').innerHTML = "100001574"
    document.querySelector(".qrimg").src="images/unsafe.png";
}