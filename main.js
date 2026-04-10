//This may work outside of iFrames but could lead to bad displays
function toggleVisibleIFrame(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
