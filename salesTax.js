var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};
  
var companySalesData = [
    {
        name: "Telus",
        province: "BC",
        sales: [ 100, 200, 400 ]
    },
    {
        name: "Bombardier",
        province: "AB",
        sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
        name: "Telus",
        province: "SK",
        sales: [ 500, 100 ]
    }
];

function calculateSalesTax(salesData, taxRates) {
    // Implement your code here
    var output = {}
    for (sd in salesData) {
        if (!output.hasOwnProperty(salesData[sd].name)) {
            output[salesData[sd].name] = {
                totalSales: 0,
                totalTaxes: 0,
            }
        }
        sales = salesData[sd].sales.reduce((total,num)=>total+num)
        output[salesData[sd].name].totalSales += salesData[sd].sales.reduce((total,num)=>total+num)
        output[salesData[sd].name].totalTaxes += sales * taxRates[salesData[sd].province]
    }
    console.log(output)
    return output
  }
  
  var results = calculateSalesTax(companySalesData, salesTaxRates);
  
  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */