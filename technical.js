$(function () {
        $('#overall').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Technical'
            },
            xAxis: {
                categories: [
                    '4 Years',
                    '5 Years',
                    '6 Years',
                ],
		labels: {
			style: {
                    		fontSize:'150%'
                	}
		}
            },
            yAxis: {
                min: 10,
		title: {
			text: 'Students Graduating',
			style: {
                    		fontSize: '150%',
				margin: '10px'
			}
                },
		labels: {
			formatter: function() {
				return this.value + '%';
			},
                	style: {
                    		fontSize: '150%'
                	}
            	}
            },
            tooltip: {
                headerFormat: '<span style="font-size:150%;">{point.key}</span><table>',
                pointFormat: '<tr><td style="font-size:125%;color:{series.color};padding:3">{series.name}: </td>'+'<td style="padding:3;font-size:125%;">{point.y:.1f}%</td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'National Publics',
                data: [17.1, 29.5, 35.0],
		drilldown:'national'
    
            }, {
                name: 'SUNY',
                data: [24.6, 38.6, 41.8],
		drilldown:'suny'
               }]

        });
    });

