var totalProduction = function(){
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
    if(a.length === 0 || b.length === 0 || c.length === 0 || d.length === 0){
        displayShadesSales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    }else{
    //we get to convert the user input from string variables, to number variables
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        d = parseFloat(d);
        totalProductionCalculation(a,b,c,d)
    }
}

var totalProductionCalculation = function(a,b,c,d){
    var total = a + b + c + d;
    console.log("Your production in Shed A " + a + " litres per day ")
    console.log("Your production in Shed B " + b + " litres per day ")
    console.log("Your production in Shed C " + c + " litres per day ")
    console.log("Your production in Shed D " + d + " litres per day ")
    console.log("The total production is " +total + " litres per day")
}

var reset = function(){
    
} 