<template>
    <div>
        <apex-chart class="dashboard-donut-1 " width="500" type="donut" ref="chart" :options="chartOptions"
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
                    text: '(Process-Level Controls: ELC)',
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
                            width: 400,
                        },
                    }
                }],
                legend: {
                    show: true,
                    position: 'right',
                    offsetY: 0,
                    offsetX: 0,
                    itemMargin: {
                        horizontal: 1,
                        vertical: 10
                    },
                },
                plotOptions: {
                    pie: {
                        customScale: 1,
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

    props: ['sendELC'],

    watch: {
        sendELC(newVal) {
            newVal.forEach((value) => {
                this.series[0] = value.heightValue;
                this.series[1] = value.moderateValue;
                this.series[2] = value.lowValue;
                this.series[3] = value.aicValue;

                this.$refs.chart.updateOptions(this.series, true);
            })
        }
    },
}
</script>