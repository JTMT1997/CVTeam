const efect = document.getElementById("tron");
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    // console.log("offset " + offset);
    // console.log("offset efect " + offset * 0.7);
    efect.style.backgroundPositionY = offset * 0.6 + "px";
});
