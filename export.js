
Highcharts.getJSON('https://raw.githubusercontent.com/mc265/data/main/convertcsv.json', function (data) {
  
  var formattedData = data.map(function (point) {
    var date = new Date(point[0]);
    return [Date.UTC(date.getFullYear(), 0, 1), point[1]];
  });

     

    // Create the chart
    Highcharts.stockChart('container', {
       
      rangeSelector: {
    buttons: [{
        type: 'year',
        count: 5,
        text: '1year',
        events: {
            click: function() {
                alert('Clicked button');
            }
        }
    }, {
        type: 'month',
        count: 3,
        text: '3m'
    }, {
        type: 'month',
        count: 6,
        text: '6m'
    }, {
        type: 'ytd',
        text: 'YTD'
    }, {
        type: 'year',
        count: 1,
        text: '1y'
    }, {
        type: 'all',
        text: 'All'
    }]
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
                valueDecimals: 0,
               valueSuffix: 'm3'
            }
        }]
    });
});
