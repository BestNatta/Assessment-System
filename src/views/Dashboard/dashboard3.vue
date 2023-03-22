<template>
    <div>
        <apex-chart ref="chart" type="radialBar" height="530" :options="chartOptions" :series="series"></apex-chart>
    </div>
</template>

<script>
export default {
    name: "dashbord3",
    data() {
        return {
            // series: [],
            // chartOptions: {
            //     chart: {
            //         height: 350,
            //         type: 'radialBar',
            //         colors: ['#900c27', '#c70039', '#f6c667', '#c9356c'],
            //     },
            //     plotOptions: {
            //         radialBar: {
            //             dataLabels: {
            //                 name: {
            //                     fontSize: '22px',
            //                 },
            //                 value: {
            //                     fontSize: '16px',
            //                 },
            //                 total: {
            //                     show: true,
            //                     label: 'Total',
            //                 }
            //             }
            //         }
            //     },
            //     labels: ['สุง', 'ปานกลาง', 'ต่ำ', 'AIC'],
            // },

            series: [],
            chartOptions: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                    animations: {
                        enabled: true,
                        easing: 'easeinout',
                        speed: 500,
                    },
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#342056'],
                labels: ['สูง', 'ปานกลาง', 'ต่ำ', 'AIC', 'รวม'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '16px',
                    position: 'left',
                    offsetX: 160,
                    offsetY: 15,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 8,
                        horizontal: 40,
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },

        }
    },

    async mounted() {
        // console.log(this.getSum);
        // this.formatter(40);
        console.log(this.getSum);

    },

    props: ["getSum"],

    methods: {
        chartColumn() {
            this.getSum.forEach((value) => {
                this.series[0] = value.heightValue;
                this.series[1] = value.moderateValue;
                this.series[2] = value.lowValue;
                this.series[3] = value.aicValue;
                this.series[4] = value.totalValue;
            });

            this.$refs.chart.updateOptions(this.series, true);
        },
        // formatter: function (x) {
        //     console.log(x);
        //     // return 249
        // }

    },
};
</script>
