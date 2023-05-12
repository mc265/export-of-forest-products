
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/export-of-forest-products/main/convertcsv%20(1).json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

    // Create the chart
    Highcharts.stockChart('container', {
       
      rangeSelector: {
    buttons: [{
        type: 'year',
        count: 1,
        text: '1year',
    }, {
        type: 'year',
        count: 3,
        text: '3years'
    }, {
        type: 'year',
        count: 5,
        text: '5years'
    },  {
        type: 'year',
        count: 10,
        text: '10years'
    }, {
        type: 'all',
        text: 'All'
    }]
},

        title: {
            text: 'EXPORT OF FOREST PRODUCTS'
        },
    
      xAxis: {
            type: 'datetime',
         labels: {
              format: '{value:%Y}'
          
            }
         
        },
        series: [{
            name: 'Export quantity',
            data: formattedData,
            tooltip: {
                valueDecimals: 0,
               valueSuffix: 'm3'
            }
        }]
    });
});
