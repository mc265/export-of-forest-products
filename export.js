
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/convertcsv.json', function (data) {
  
  

     

    // Create the chart
    Highcharts.stockChart('container', {
       
        rangeSelector: {
            selected: 3
        },

        title: {
            text: 'Industrial Roundwood'
        },

        series: [{
            name: 'Export quantity',
            data: data,
            tooltip: {
                valueDecimals: 0
            }
        }]
    });
});
