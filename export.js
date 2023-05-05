
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/IRW%20export.json', function (data) {
  
     var start = +new Date();

     

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
