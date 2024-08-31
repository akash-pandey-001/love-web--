const target=document.getElementById("target");
const yes=document.getElementById("yes")

function movetarget(){
    const maxWidth=400;
    const maxHeight=400;

    const randomX=Math.floor(Math.random()*maxWidth)
    const randomY=Math.floor(Math.random()*maxHeight)

    target.style.left=randomX + "px";
    target.style.top=randomY + "px";
}

target.addEventListener('mouseenter', function(){
    movetarget()
})

target.addEventListener('touchstart', function() {
    movetarget();
})

yes.addEventListener('click', function() {
    alert("Thank you so much. \u{1F60D} I love you too \u{1F49E}");
});