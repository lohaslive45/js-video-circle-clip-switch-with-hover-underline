//!---影片背景切換
const btns = document.querySelectorAll(".nav-btn")
const videos = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".slide")

var sliderNav = function(manual){
    btns.forEach((btn)=> {
        btn.classList.remove("active")
    });

    videos.forEach((video)=> {
        video.classList.remove("active")
    });

    contents.forEach((content)=> {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    videos[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    })
})
