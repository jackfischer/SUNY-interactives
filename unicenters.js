$(function () {
        $('#unicenters').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'University Centers'
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
                min: 30,
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
                headerFormat: '<span style="font-size:120%;">{point.key}</span><table>',
                pointFormat: '<tr><td style="font-size:70%;color:{series.color};padding:3">{series.name}: </td>'+'<td style="padding:3;font-size:90%;"><b>{point.y:.1f}%</b></td></tr>',
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
                data: [38.0, 58.2, 63.3],
		drilldown:'national'
    
            }, {
                name: 'SUNY',
                data: [51.5, 66.8, 69.5],
		drilldown:'suny'
               }]

        });
    });

