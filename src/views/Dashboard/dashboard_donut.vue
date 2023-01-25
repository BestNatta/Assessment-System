<template>
    <div>
        <apex-chart type="donut" :options="chartOptions" :series="series"></apex-chart>
    </div>
</template>

<script>
export default {
    name: 'dashbord-donut',
    data() {
        return {
            series: [44, 100],
            chartOptions: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false,
                            position: 'top',
                        }
                    }
                }],
                title: {
                    text: 'TEST'
                },
                dataLabels: {
                    
                }
                // theme: {
                //     mode: 'dark',
                //     palette: 'palette1',
                //     monochrome: {
                //         enabled: false,
                //         color: '#255aee',
                //         shadeTo: 'light',
                //         shadeIntensity: 0.65
                //     },
                // }
            },
        }
    }
}
</script>