let ele = document.getElementsByClassName('projectCard');
console.log(ele);
for (let i = 0; i < ele.length; i++) 
{
    ele[i].addEventListener('mouseover', () => {
        console.log(`i am in div ${i}`);
        ele[i].classList.add('changeBg');
        inn = document.getElementsByClassName('projectHeading');
        inn[i].style.backgroundColor = 'white';
        inn[i].style.boxShadow = '-9.5px -9.5px rgb(0, 168, 112)';
        tag = inn[i].getElementsByTagName('a');
        for (let k = 0; k < tag.length; k++) 
        {
            tag[k].style.color = 'rgb(0, 168, 112)';
        }
    });

    ele[i].addEventListener('mouseout', () => {
        console.log(`i am in div ${i}`);
        ele[i].classList.remove('changeBg');
        inn = document.getElementsByClassName('projectHeading');
        inn[i].style.backgroundColor = 'rgb(0, 255, 170)';
        inn[i].style.boxShadow = '-9.5px -9.5px rgba(255, 255, 255, 0.1)';
        tag = inn[i].getElementsByTagName('a');
        for (let k = 0; k < tag.length; k++) 
        {
            tag[k].style.color = '#0f171e';
        }
    });
}

document.getElementById('menu').addEventListener('click', ()=>{
    document.getElementById('mobileMenuBg').classList.toggle('showBg');
    document.getElementById('topnavLinksMobile').classList.toggle('showLinks');
})



