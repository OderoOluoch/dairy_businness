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

var display_incomeOverTime_sales = document.getElementById("display_incomeOverTime_sales");


var getIncomeOverTime = function (){
    //Declare an array that will hold income and time
    var sellingPriceAndTIme = [];

     //we push the data that the user will give into the array.
     sellingPriceAndTIme.push(document.getElementById("timeLine").value);
     sellingPriceAndTIme.push(document.getElementById("price").value);


      //the values of the array are hereby tanfered into variables a,b,c,d
      var [timeLine, sellingPrice] = sellingPriceAndTIme;

      display_incomeOverTime_sales = document.getElementById("display_incomeOverTime_sales");
      if(timeLine.length === 0 || sellingPrice.length === 0 ){
        display_incomeOverTime_sales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
      }else{
      //we get to convert the user input from string variables, to number variables
           time = parseFloat(timeLine);
           sell = parseFloat(sellingPrice);
           console.log(time,sell)
           incomeOverTime(sell,time);
       }

}

var incomeOverTime = function(sellingPrice, time){
    console.log(sellingPrice,time +" Hii ndio nataka")
    if(time===7){
        document.getElementById("display_incomeOverTime_sales").innerHTML =  "<p>Your weekly income will be Ksh " + (1876 * sellingPrice * time)+ " </p>"
        console.log(1876 * sellingPrice * time)
    }
    else if(time===365){
        document.getElementById("display_incomeOverTime_sales").innerHTML =  "<p>Your yearly income will be Ksh "+ (1876 * sellingPrice * time) +" </p>"
        console.log(1876 * sellingPrice * time)
    }
}



var leapYearReport = function(){
    var months ={
        January:31,
        February:29,
        March:31,
        April:30,
        May:31,
        June:30,
        July:31,
        August:31,
        September:30,
        October:31,
        November:30,
        December:31
    }
    monthArray = Object.keys(months)
    var i=0;
    for (x in months) {
       console.log("Your income for " + monthArray[i] + " is " + 84420 * months[x]);
       document.getElementById("leap-year").innerHTML =  "This should display" + i 
        console.log(monthArray[i])
        console.log(months[x])
       i++;
      }
    }

    var comparePriceChange = function(){
        incomeOverTime(),
        incomeOverTime()
    }
