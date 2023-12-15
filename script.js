let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video-background');
    const videos = ['C:\Users\Dhanushree\Downloads\video....mp4', 'C:\Users\Dhanushree\Downloads\video.mp4'];
    let currentVideo = 0;

    function playNextVideo() {
        video.src = videos[currentVideo];
        video.play();
        currentVideo = (currentVideo + 1) % videos.length;
        video.src = videos[currentVideo];
    video.play();
    }

    // Play the first video
    video.src = videos[currentVideo];
    video.play();

    video.addEventListener('ended', playNextVideo);
});


AOS.init({
    duration: 800,
    delay: 400
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


