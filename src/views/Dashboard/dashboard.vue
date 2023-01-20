<template>
    <div id="chart" class="apex-chart">
        <apex-chart type="bar" height="550" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
export default {
    name: 'HelloWorld',
    data() {
        return {

            series: [{
                name: 'สูง',
                data: [],
            }, {
                name: 'ปานกลาง',
                data: []
            }, {
                name: 'ต่ำ',
                data: []
            }, {
                name: 'AIC',
                data: []
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                },

                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: true,
                                offsetX: 0,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900,
                                }
                            }
                        }
                    },
                },

                stroke: {
                    width: 1,
                    colors: ['#fff']
                },

                title: {
                    text: 'ชื่อบริษัท',
                    align: 'center',
                    style: {
                        fontSize: '20px',
                    }
                },

                xaxis: {
                    categories: ['ข้อที่ 1', 'ข้อที่ 2', 'ข้อที่ 3', 'ข้อที่ 4', 'ข้อที่ 5', 'ข้อที่ 6', 'ข้อที่ 7', 'ข้อที่ 8'],
                    labels: {
                        style: {
                        }
                    },

                },
                yaxis: {
                    min: 0,
                    max: 20,
                    labels: {
                        style: {
                            fontSize: '13px',
                        }
                    }

                },
                fill: {
                    opacity: 1,
                    colors: ['#C00000', '#FFC000', '#92D050', '#00B0F0'],
                },

                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    labels: {
                    },
                    markers: {
                        fillColors: ['#C00000', '#FFC000', '#92D050', '#00B0F0'],
                    },
                    getValue: {}
                },
            },
        }
    },
    // created() {
    //     this.getData()
    // },
    mounted() {
        this.getValue = api.gettasks(this.$route.params.id)
        console.log(this.getValue)
    },

    methods: {
       getData() {
        let seriesData = this.getValue.series.map((e) => {
            return {
                x: e.data
            }
        });
        this.series  = [{
            name: 'test',
            data: seriesData
        }]
        console.log(this.series);
       }
    }
}
</script>
