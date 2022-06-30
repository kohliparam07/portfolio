const text = document.getElementById('text');
const mail = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
let validName = false;
let validMail = false;
let validSubject = false;
let validMessage = false;

text.addEventListener('blur', ()=>{
    // console.log('name clicked');
    let reg = /^([a-zA-Z])/;
    let temp = text.value;
    if(reg.test(temp))
    {
        // console.log('name is valid');
        validName = true;
        document.getElementById('errorName').style.visibility = 'hidden';
    }
    else
    {
        // console.log('name is invalid');
        validName = false;
        document.getElementById('errorName').style.visibility = 'visible';
    }
});

mail.addEventListener('blur', ()=>{
    // console.log('mail clicked');
    let reg = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let temp = mail.value;
    if(reg.test(temp))
    {
        // console.log('email is valid');
        validMail = true;
        document.getElementById('errorMail').style.visibility = 'hidden';
    }
    else
    {
        // console.log('email is invalid');
        validMail = false;
        document.getElementById('errorMail').style.visibility = 'visible';
    }
});

subject.addEventListener('blur', ()=>{
    // console.log('subject clicked');
    let reg = /^([a-zA-Z])/;
    let temp = subject.value;
    if(reg.test(temp))
    {
        // console.log('subject is valid');
        validSubject = true;
        document.getElementById('errorSubject').style.visibility = 'hidden';
    }
    else
    {
        // console.log('subject is invalid');
        validSubject = false;
        document.getElementById('errorSubject').style.visibility = 'visible';
    }
});

message.addEventListener('blur', ()=>{
    // console.log('message clicked');
    let reg = /^([0-9a-zA-Z])/;
    let temp = message.value;
    if(reg.test(temp))
    {
        // console.log('message is valid');
        validMessage = true;
        document.getElementById('errorMessage').style.visibility = 'hidden';
    }
    else
    {
        // console.log('message is invalid');
        validMessage = false;
        document.getElementById('errorMessage').style.visibility = 'visible';
    }
});

const submit = document.getElementById('subBtn');
submit.addEventListener('click', (e)=>{
    // e.preventDefault();
    if((validName==false || validMail==false || validSubject==false || validMessage==false) || (text.value==null || mail.value==null || subject.value==null || message.value==null))
    {
        e.preventDefault();
        alert('Kindly recheck your form');
    }
});

document.getElementById('menu').addEventListener('click', ()=>{
    document.getElementById('mobileMenuBg').classList.toggle('showBg');
    document.getElementById('topnavLinksMobile').classList.toggle('showLinks');
})
