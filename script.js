let img = document.querySelector('#lunboimg img');
let span = document.querySelectorAll('#selector span');
let left = document.getElementById('left');
let right = document.getElementById('right');
let index = 0;
let timer;
function show(){        
    img.src = `./introduce/${index}.jpg`;     /*---------根据index的值来决定播放哪张图片--------*/
}

function autoPlay() {               /*---------定时自动轮播图片--------*/
    timer = setInterval(function() {
        show();
        index++;
        if (index == span.length) {
            index = 0;
        }
    }, 3000);
}
autoPlay();

function ctrlPlay(){             /*---------每一个导航点设置监听器，点击就播放对应图片--------*/
    for(let i = 0; i < span.length; i++){
        span[i].onclick = function(){
            index = i;
            show();
        }
    }
}
ctrlPlay();

function clickPlay(){       /*---------左右箭头设置监听器,点击就改变index的值然后调用show函数播放图片--------*/
    left.onclick = function(){
        if(index <= 0){
            index = span.length - 1;
        }else{
            index --;
        }
        show();
    }
    right.onclick = function(){
        if(index >= span.length - 1){
            index = 0;
        }
        else {
            index ++;
        }
        show();
    }
}
clickPlay();

function eventList(){      /*---------给每个导航点和左右箭头设置监听器,当鼠标放在上面则停止自动播放图片,当离开时启动自动播放图片--------*/
    for(let i = 0; i < span.length; i++){
        span[i].addEventListener('mouseenter',function(){         /*---------导航点设置监听器,当鼠标放在上面则将对应图片呈现且停止轮播图片--------*/
            clearInterval(timer);
            index = i;
            show();
        },false);
        span[i].addEventListener('mouseleave',function(){
            autoPlay();
        },false);
    }
    left.addEventListener('mouseenter',function(){
        clearInterval(timer);
    },false)
    left.addEventListener('mouseleave',function(){
        autoPlay();
    },false);
    right.addEventListener('mouseenter',function(){
        clearInterval(timer);
    },false)
    right.addEventListener('mouseleave',function(){
        autoPlay();
    },false);
}
eventList();