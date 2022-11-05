/*==========================================================
===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====================================*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                numberUpp(animItem);
                animItem.classList.add('_active');
                
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                     animItem.classList.remove('_active');
                }
            }
        }
        var header = document.querySelector(".header-menu");
        var sticky = header.offsetTop + 10;
        if (window.pageYOffset >= sticky) {
            console.log(sticky);
            console.log(window.pageYOffset);
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
   /* ------- ЗАДЕРЖКА АНИМАЦИИ --------*/
    setTimeout(() => {
        animOnScroll();
    },300);

}

function numberUpp(num) {
    function animateValue(id, start, end, duration) {
        
        var obj = id;
        var range = end - start;
        var minTimer = 50;
        var stepTime = Math.abs(Math.floor(duration / range));
        
        stepTime = Math.max(stepTime, minTimer);
        
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
        
        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = value;
            
            if (value == end) {
                obj.innerHTML = value.toLocaleString();
                clearInterval(timer);
            }
        }
        timer = setInterval(run, stepTime);
        run();
    }
    if (num.classList.contains("count-num")) {
        if (!num.classList.contains("_active")) {
            console.log(123333);
            let maxNum = num.getAttribute('data-num');
            animateValue(num, 0, maxNum, 3000);
            }
    }
    
}
