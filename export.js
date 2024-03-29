

Highcharts.getJSON('https://raw.githubusercontent.com/mc265/export-of-forest-products/main/wood%20fuel%20export.json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

    // Create the chart
    Highcharts.stockChart('container', {
       
     rangeSelector: {
    //buttons: [ {
     //   type: 'year',
      //  count: 5,
       // text: '5years'
  //  },  {
      //  type: 'year',
      //  count: 10,
     //   text: '10years'
   // }, {
    //    type: 'all',
    //    text: 'All'
  //  }]
enabled:false
},

        title: {
            text: 'Forest Product Exports 1961-2021',
	       align: 'left'
        },
        subtitle: {
        text: 'Data Source: <a href="https://www.fao.org/faostat/en/#data/FO">FAOSTAT Forestry</a>.',
        align: 'left'
    },
    
    
       xAxis: {
            type: 'date ',
            title: {
            enabled: true,
            text: 'Year'
            }
        },
        
         
         yAxis: {
          title:{
            enabled:true,
            text: 'cubic meters(m3)'
          }
        },
        series: [{
            name: 'Wood fuel',
            data: formattedData,
            tooltip: {
                valueDecimals: 0,
               valueSuffix: 'm3'
            }
        }]
    });
});
