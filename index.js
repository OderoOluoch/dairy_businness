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

    document.getElementById("results").innerHTML = " <p>Your production in Shed A " + 
        a + " litres per day <br> Your production in Shed B " + 
        b + " litres per day <br> Your production in Shed C " + 
        c + " litres per day <br> Your production in Shed D " +
        d + " litres per day <br><br>"

    document.getElementById("total").innerHTML = "The total production is " +total + " litres per day"
}

var reset = function(){
    
} 


var getIncomeAndTime = function (){
    //Declare an array that will hold income and time
    var incomeAndTIme = [];

     //we push the data that the user will give into the array.
    incomeAndTIme.push(document.getElementById("timeLine").value);
    incomeAndTIme.push(document.getElementById("price").value);


      //the values of the array are hereby tanfered into variables a,b,c,d
      var [income,time] = incomeAndTIme;

      var display_incomeOverTime_sales = document.getElementById("display_incomeOverTime_sales");
      if(income.length === 0 || time.length === 0 ){
        display_incomeOverTime_sales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
      }else{
            console.log(income,time);

      //we get to convert the user input from string variables, to number variables
        //   a = parseFloat(a);
        //   b = parseFloat(b);
        //   c = parseFloat(c);
        //   d = parseFloat(d);
        //   totalProductionCalculation(a,b,c,d)
      }

}




var incomeOverTime=function(selling_price, time){
    console.log(1876*selling_price*time)
    if(time===7){
        console.log(1876*selling_price*time)
    }
    else if(time===365){
        console.log(1876*selling_price*time)
    }
}

