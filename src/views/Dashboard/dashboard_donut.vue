<template>
    <div>
        <apex-chart width="100%" type="donut" :options="chartOptions" :series="series"></apex-chart>
    </div>
</template>

<script>
export default {
    name: 'dashbord-donut',
    data() {
        return {
            series: [5, 4],
            chartOptions: {
                chart: {
                    type: 'donut',
                    width: '340px'
                },
                labels:['PLC', 'ELC'],
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: 'Title',
                    align: 'center',
                    margin: 20,
                    style: {
                        fontSize: '16px'
                    }
                },                
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        }
    },
    
}
</script>