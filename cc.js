$(function () {
        $('#overall').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Community Colleges'
            },
            xAxis: {
                categories: [
                    '2 Years',
                    '3 Years',
                    '4 Years',
                ],
		labels: {
			style: {
                    		fontSize:'150%'
                	}
		}
            },
            yAxis: {
                min: 0,
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
                data: [7.7, 16.6, 0],
		drilldown:'national'
    
            }, {
                name: 'SUNY',
                data: [12.0, 24.1, 29.0],
		drilldown:'suny'
               }]

        });
    });

