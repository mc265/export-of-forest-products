Highcharts.chart('container', {

  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy'
  },
  credits: {
        enabled:false
        

    },
  legend: {
    enabled: false
  },

  title: {
    text: 'CONIFEROUS WOOD FUEL PRODUCTION AND TRADE BY COUNTRY(2021) '},

  subtitle: {
    text: 'Source: <a href="https://www.fao.org/faostat/en/#data/FO">FAOSTAT</a>' 
  },

  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
    }
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: 'Production quantity'
    },
    labels: {
      format: '{value} m3'
    },
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 65,
      label: {
        rotation: 0,
        y: 15,
        style: {
          fontStyle: 'italic'
        },
        text: 'Import (m3)'
      },
      zIndex: 3
    }],
    accessibility: {
      rangeDescription: 'Range: 1000000 to 3000000cubic metres.'
    }
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: 'Import Quantity'
    },
    labels: {
      format: '{value} m3'
    },
    maxPadding: 0.2,
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 50,
      label: {
        align: 'right',
        style: {
          fontStyle: 'italic'
        },
        text: 'production (m3)',
        x: -10
      },
      zIndex: 3
    }],
    accessibility: {
      rangeDescription: 'Range: 0 to 1000000000 cubic metres.'
    }
  },

  tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
      '<tr><th>Production Quantity:</th><td>{point.x}m3</td></tr>' +
      '<tr><th>Import Quantity:</th><td>{point.y}m3</td></tr>' +
      '<tr><th>Import Value:</th><td>{point.z}US$</td></tr>',
    footerFormat: '</table>',
    followPointer: true
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },

  series: [{
    data: [
      {x: 598544, y: 0, z: 10, name: 'Afg', country: 'Afghanistan' },
      { x: 6036710, y: 0, z: 2, name: 'Al', country: 'Algeria' },
      { x:0, y: 24, z: 2, name: 'Ad', country: 'Andorra' },
      { x:  13505, y: 0, z: 0, name: 'Ar', country: 'Argentina' },
      { x: 0, y: 0, z: 0.01, name: 'Arm', country: 'Armenia' },
      { x: 23525, y: 303, z: 288, name: 'Aus', country: 'Australia' },
{ x: 2992895, y: 91534, z: 7895.15, name: 'Austria', country: 'Austria'},
      { x: 0, y: 0, z: 0, name: 'Az', country: 'Azerbaijan'},
      { x: 0, y: 1, z: 6, name: 'Bah', country: 'Bahamas' },
      { x: 63.4, y: 51.8, z: 15.4, name: 'Bar', country: 'Barbados' },
      { x: 6925800, y: 0, z: 0, name: 'Bes', country: 'Belarus' },
       { x: 61570, y: 14900, z: 1581, name: 'Bel', country: 'Belgium' },
{ x: 0, y: 54, z: 36, name: 'Ber', country: 'Bermuda'},
      { x: 10000, y: 1120, z: 28.42, name: 'Bosi', country: 'Bosnia' },
      { x: 0, y: 117.13, z: 37.14, name: 'Bots', country: 'Botswana' },
      { x: 3299000, y: 0, z: 0, name: 'Braz', country: 'Brazil' },
      { x: 0, y: 1, z: 0, name: 'Bd', country: 'Brunei Darussalam' },
      { x: 607655, y: 228, z: 26.54, name: 'Bul', country: 'Bulgaria' },
      { x: 600426, y: 1, z: 1.36, name: 'Can', country: 'Canada' },
      { x: 0, y: 0, z: 0, name: 'Cha', country: 'Chad' },
      { x: 2325789, y: 0, z: 0, name: 'Chi', country: 'Chile' },
     { x: 62382209, y: 20488, z: 1667, name: 'China', country: 'China' },
    { x: 62377588, y: 17975.13, z: 1387, name: 'China(m)', country: 'China(mainland)' },
  { x: 4621, y:2459, z: 251, name: 'China(t)', country: 'China(Taiwan Province)' },
       { x: 1489680, y: 0, z: 0, name: 'Col', country: 'Colombia' },
      { x: 0, y: 247.58, z: 104.21, name: 'Com', country: 'Comoros' },
      { x: 50109, y: 1587, z: 220.46, name: 'Cro', country: 'Croatia' },
   { x: 6339, y: 202, z: 86.79, name: 'Cy', country: 'Cyprus'},
   { x: 6186000, y: 3600, z: 359.94, name: 'Czech', country: 'Czechia' },
      { x: 4010427, y: 0, z: 0, name: 'Korea', country: 'Democratic People Republic of Korea' },
   { x: 1357500, y: 35430, z: 3622.78, name: 'Den', country: 'Denmark' },
   { x:1275430 , y:0, z: 0, name: 'Ec', country: 'Ecuador'},
   { x: 13000, y: 0, z: 0, name: 'Els', country: 'El Salvador' },
    { x: 1430909, y: 11100, z: 1757.82, name: 'Est', country: 'Estonia'},
{ x: 120000, y: 601260.7, z: 18056.12, name: 'Esw', country:'Eswatini' },
      { x: 8005134, y: 0, z: 0, name: 'Eth', country:'Ethiopia' },
    { x: 4297127, y: 110325, z: 4575.83, name: 'Fin', country: 'Finland'},
    { x: 2672681, y: 177800, z: 16414.12, name: 'Fr', country: 'France' },
      { x: 78386, y:82146, z: 5851.37, name: 'Gr', country: 'Greece'},
      { x: 9264898, y:90356, z: 11903.24, name: 'Ger', country:'Germany'},
  { x: 13628145, y: 0, z: 0, name: 'Gua', country: 'Guatemala' },
   { x:2670498, y:0, z: 0, name: 'Hon', country: 'Honduras'},
   { x: 141953, y: 696, z: 116.87, name: 'Hun', country: 'Hungary' },
    { x: 9023649, y: 742, z: 620, name: 'In', country: 'India'},
{ x: 271000, y: 6800, z: 2423.7, name: 'Ir', country:'Ireland' },
      { x: 1180000, y: 66615, z: 6772.34, name: 'It', country:'Italy' },
    { x: 0, y: 163, z:287, name: 'Fin', country: 'japan'},
    { x: 31000, y: 5821, z: 310.67, name: 'Fr', country:'kazakhstan' },
      { x: 2495000, y:29, z: 30, name: 'ken', country: 'kenya'},
      { x: 315000, y:18600, z: 1481.5, name: 'Lat', country:'Latvia'},
      { x: 986163, y:415725, z: 23481.54, name: 'Rom', country:'Romania'},
      { x: 10751630, y:469, z: 79.54, name: 'Ru', country:'Russia'},
      { x: 33759552, y:34126, z: 8537.03, name: 'USA', country:'United States of America'},
       { x: 1571200, y:81622, z: 20074.89, name: 'UK', country:'United Kingdom'}
      
    ],
    colorByPoint: true
  }]

});