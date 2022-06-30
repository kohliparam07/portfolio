document.getElementById('menu').addEventListener('click', ()=>{
    document.getElementById('mobileMenuBg').classList.toggle('showBg');
    document.getElementById('topnavLinksMobile').classList.toggle('showLinks');
})

const skillsSec = document.getElementById('skillsSection');
const bar = document.querySelectorAll('.skillbarProgress');
// const bar = document.querySelectorAll('.prog');
// const bar = document.getElementsByTagName('span');

function showProgress(){
    for(let i=0;i<bar.length;i++){
        const value = bar[i].dataset.progress;
        bar[i].style.opacity = 1;
        bar[i].style.width = `${value}%`;
    }
}
function hideProgress(){
    for(let j=0;j<bar.length;j++){
        bar[j].style.opacity = 0;
        bar[j].style.width = 0;
    }
}

window.addEventListener('scroll', ()=>{
    const secPos = skillsSec.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log(secPos);
    console.log(screenPos);
    if(secPos < screenPos){
        showProgress();
        console.log('scroll');
    }
    else{
        hideProgress();
        console.log('hide');
    }
})