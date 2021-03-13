totalProduction(){
    //create an array variable to store the sales per shade in one day
    var shades = [];

    shades.push(document.getElementById("shade_a").value);
    shades.push(document.getElementById("shade_b").value);
    shades.push(document.getElementById("shade_c").value);
    shades.push(document.getElementById("shade_d").value);

    var [a,b,c,d] = shades;
}