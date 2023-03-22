<template>
    <div>
        <div class="title-dash">
            <h4> ชื่อบริษัท : {{ getAIP.company_name }}</h4>
        </div>
        <div class="con-dashboard1 mt-3">
            <div class="chart-col">
                <chart-culumn ref="chartColumn" :getSum="getSum" />
                <div class="text-center mt-3">
                    <router-link :to="{ name: 'result', params: { id: getAIP._id } }">
                        <button class="btn btn-primary px-5 py-2">ดูเพิ่มเติม</button>
                    </router-link>
                </div>
            </div>
            <div class="con-chartDonut">
                <div class="apex-chart1">
                    <apex-chart type="donut" ref="chart" :options="chartOptions" :series="series" />
                </div>
                <div class="apex-chart2">
                    <chart-donut ref="chartDonut" :getValuePLC="getValuePLC" />
                </div>
            </div>
            <!-- <div class="box-result d-flex align-items-center justify-content-center">
                <h1>รวม</h1>
                <h3></h3>
            </div> -->
        </div>

    </div>
</template>

<script>
import chartDonut from './dashboard2.vue';
import chartCulumn from './dashboard3.vue';
import { api } from '../../helpers/Helpers';
export default {
    name: 'dashbord-1',
    components: {
        chartDonut,
        chartCulumn
    },
    data() {
        return {
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
                    text: '(Entity-Level Controls: ELC)',
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
                        customScale: 1.2,
                        size: '60%',
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
                },
            },
            getAIP: [],
            getValue: [],
            mapData: [],

            getValuePLC: [],
            getValueELC: [],
            getSum: []
        }
    },


    async mounted() {
        this.getAIP = await api.gettask(this.$route.params.id);
        // console.log(this.getAIP);
        this.getValue = this.getAIP.mainForm
        this.calValue();

    },
    updated() {
        this.update();
        this.updateCol();

    },

    methods: {
        update() {
            this.$refs.chartDonut.getData();
        },

        updateCol() {
            this.$refs.chartColumn.chartColumn();
        },

        calValue() {
            const mapData = this.getValue.map(mainForm => {
                return mainForm.subForm.map(subForm => {
                    return {
                        heightValue: subForm.heightValue,
                        moderateValue: subForm.moderateValue,
                        lowValue: subForm.lowValue,
                        aicValue: subForm.aicValue,
                    }
                }).reduce((acc, cur) => {
                    return {
                        heightValue: acc.heightValue + cur.heightValue,
                        moderateValue: acc.moderateValue + cur.moderateValue,
                        lowValue: acc.lowValue + cur.lowValue,
                        aicValue: acc.aicValue + cur.aicValue,
                        totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue

                    }
                }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })
            })

            this.getValueELC = [mapData.slice(0, 17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })]

            // console.log(this.getValueELC);

            this.getValuePLC = [mapData.slice(17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })]

            // console.log(this.getValuePLC);

            this.getSum = [mapData.reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })]

            // console.log(this.getSum);

            this.getValueELC.forEach((value) => {
                this.series[0] = value.heightValue;
                this.series[1] = value.moderateValue;
                this.series[2] = value.lowValue;
                this.series[3] = value.aicValue;

                this.$refs.chart.updateOptions(this.series, true);
            })
        },
    },
}
</script>
