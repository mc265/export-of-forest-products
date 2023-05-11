
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/IRW%20export%20edited.json', function (data) {
  
  
var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });
     

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
