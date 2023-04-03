<template>
    <div>
        <apex-chart class="dashboard-donut-2" width="500" type="donut" ref="chart" :options="chartOptions"
            :series="series" />
    </div>
</template>

<script>
export default {
    name: "dashboard-1",
    data() {
        return {
            getPropELC: [],

            series: [],
            chartOptions: {
                animations: {
                    enabled: true
                },
                labels: ['สูง', 'ปานกลาง', 'ต่ำ', 'AIC'],
                dataLabels: {
                    enabled: false,
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                title: {
                    text: '(Process-Level Controls: PLC)',
                    align: 'center',
                    margin: 40,
                    offsetY: -10,
                    style: {
                        fontSize: '14px'
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
                        size: 400,
                        donut: {
                            size: '65%',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '25px',
                                },
                                total: {
                                    show: true,
                                    label: 'รวม',
                                    showAlways: false,
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#000'
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    mounted() {

    },

    props: ['sendPLC'],

    watch: {
        sendPLC(newVal) {
            newVal.forEach((value) => {
                this.series[0] = value.heightValue;
                this.series[1] = value.moderateValue;
                this.series[2] = value.lowValue;
                this.series[3] = value.aicValue;

                this.$refs.chart.updateOptions(this.series, true);
            })
        }
    }
}
</script>