
console.log("pig")

let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let showDom = document.querySelector('.show')

console.log(showDom)

nextDom.onclick = function() {
    showSlider('next')
}
prevDom.onclick = function() {
    showSlider('prev')
}
let runTimeOut;

function showSlider(type) {
    
    let imgSlider = document.querySelectorAll('.show img')
    
    if (type ==='next') {
        showDom.classList.add('next')

        clearTimeout(runTimeOut)
        runTimeOut = setTimeout(() => {
            showDom.appendChild(imgSlider[0])
            showDom.classList.remove('next')
        }, 2000);
        
    }
    else if (type ==='prev') {
        showDom.classList.add('prev')
        runTimeOut = setTimeout(()=> {
            let positionLastItem = imgSlider.length - 1;
            showDom.prepend(imgSlider[positionLastItem])
            showDom.classList.remove('prev')
        }, 2000)
        
    }
    // clearTimeout(runTimeOut)
    // runTimeOut = setTimeout(() => {
    //     showDom.classList.remove('next')
    // }, 1000)

}