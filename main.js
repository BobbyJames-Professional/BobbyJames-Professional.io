//This may work outside of iFrames but could lead to bad displays
function toggleVisibleIFrame(elementID) {
    var element = document.getElementById(elementID);
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}


function runOnLoadThingy() {
    const linkHash = (window.location.hash).substring(1,(window.location.hash).length);
    const ids = Array.from(document.getElementsByTagName('object')).map(obj => obj.id);

    for (var i=0;i<ids.length;i++) {
        var tempElement = document.getElementById(ids[i])
        tempElement.style.display = ids[i] == linkHash ? 'block' : 'none'
    }
}

window.addEventListener('DOMContentLoaded', runOnLoadThingy)
window.addEventListener('hashchange', runOnLoadThingy);
