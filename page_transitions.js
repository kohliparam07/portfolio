window.onload = ()=>{

    const transition_ele = document.querySelector('.transition');
    const links = document.getElementsByTagName('a');

    setTimeout(() => {
        transition_ele.classList.remove('is-active');
    }, 500);

    for(let i=0;i<links.length;i++)
    {
        const link = links[i];
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            let target = e.target.href;
            transition_ele.classList.add('is-active');
            
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
};