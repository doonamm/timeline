window.addEventListener('load', ()=>{
    const milestones = document.querySelectorAll('.timeline .content');
    showMiles();
    window.addEventListener('scroll', showMiles);
    window.addEventListener('resize', showMiles);
    function showMiles(){
        for(el of milestones){
            if(isElementInViewport(el)){
                el.classList.add('show');
            }
            else{
                el.classList.remove('show');
            }
        }
    }
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top + rect.height >= 0 
          && rect.bottom - rect.height <= (window.innerHeight || document.documentElement.offsetHeight)
        );
    }
});

