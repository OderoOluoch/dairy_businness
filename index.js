totalProduction(){
    //create an array variable to store the sales per shade in one day
    var shades = [];

    //we push the data that the user will give into the array.
    shades.push(document.getElementById("shade_a").value);
    shades.push(document.getElementById("shade_b").value);
    shades.push(document.getElementById("shade_c").value);
    shades.push(document.getElementById("shade_d").value);

    //the values of the array are hereby tanfered into variables a,b,c,d
    var [a,b,c,d] = shades;

    var displayShadesSales = document.getElementById("display_shades_sales");
    if(a.length === 0 || b.length === 0 || c.length || d.length){
        displayShadesSales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    }else{
    //we get to convert the user input from string variables, to number variables
        a = parseFloat(a);
        b = parseFloat(b);
        b = parseFloat(c);
        c = parseFloat(d);
        totalProductionCalculation()
    }
}