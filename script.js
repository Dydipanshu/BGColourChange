var index=0 ;
function changeColour(){
    var colours = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "black", "brown", "grey"];
    document.getElementsByTagName("body")[0].style.backgroundColor = colours[index++];
    if(index > colours.length - 1)
        index = 0;
}