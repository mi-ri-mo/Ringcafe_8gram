var toggle = false;

const onToggle = () => {
    toggle = !toggle;
    if(toggle) {
        document.getElementById("nav").style.background="white";
    }
    else {
        document.getElementById("nav").style.background = "rgba(0,0,0,0)";
    }
}