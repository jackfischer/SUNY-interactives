Highcharts.theme = {
    colors: ['#838687', '#009EE0', '#EC098D', '#FFE512', '#009EE0', '#54B948', 
             '#F56600', '#FFE512', '#54B948'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 0, 0],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
    },
    title: {
        style: {
            color: '#000',
            fontSize: '1.8em'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 1.2em'
        }
    },
    legend: {
        itemStyle: {
            fontSize: '1.4em',
	    fontWeight: ''
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
