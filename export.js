
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/IRW%20export%20edited.json', function (data) {
  
  

     

    // Create the chart
    Highcharts.stockChart('container', {
       
        rangeSelector: {
            selected: 3
        },

        title: {
            text: 'Industrial Roundwood'
        },
    
      xAxis: {
            type: 'datetime',
            labels: {
              format: '{value:%Y}'
            }
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
