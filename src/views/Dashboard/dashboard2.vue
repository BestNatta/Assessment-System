<template>
    <div>
        <apex-chart width="310px" height="350px" type="donut" ref="chart" :options="chartOptions"
            :series="series"></apex-chart>
        {{ this.getData() }}
    </div>
</template>

<script>
export default {
    name: 'dashbord-donut',
    data() {
        return {
            series: [],
            chartOptions: {
                animations: {
                    enabled: true
                },
                labels: ['PLC', 'ELC'],
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: 'Title',
                    align: 'center',
                    margin: 40,
                    offsetY: -10,
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
                    }
                }],
                legend: {
                    position: 'bottom',
                    offsetY: 5,
                },
                plotOptions: {
                    pie: {
                        customScale: 1.1,
                        // size: '60%'
                        donut: {
                            size: '70%',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '25px',

                                },
                                total: {
                                    show: true,
                                    showAlways: false,
                                    fontSize: '25px',
                                    fontWeight: 600,
                                    color: '#000'
                                }
                            }
                        }
                    }
                }
            },
        }
    },

    created() {
        this.getData();
        this.$refs.chart.updateOptions(this.series, true);
    },

    updated() {
        this.getData();
        this.$refs.chart.updateOptions(this.series, true);
    },

    props: ['valuePLC', 'valueELC'],

    methods: {
        getData() {
            this.series[0] = this.valuePLC;
            this.series[1] = this.valueELC;
        },
    },
}
</script>