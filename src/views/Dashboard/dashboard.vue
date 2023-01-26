<template>
    <div class="con-dashboard d-flex justify-content-between">
        <div id="chart" class="apex-chart">
            <apex-chart ref="chart" type="bar" height="400" :options="chartOptions" :series="series" />
        </div>
        <div class="donut-dash">
            <chart-donut />
        </div>
    </div>
</template>

<script>
import chartDonut from './dashboard_donut.vue'
import { api } from '../../helpers/Helpers';
export default {
    name: 'HelloWorld',
    components: {
        chartDonut
    },
    data() {
        return {

            series: [
                {
                    name: 'สูง',
                    data: [],
                },
                {
                    name: 'ปานกลาง',
                    data: []
                },
                {
                    name: 'ต่ำ',
                    data: []
                }, {
                    name: 'AIC',
                    data: []
                }
            ],
            title: {
                text: 'Datasdasdasdasa',
            },
            chartOptions: {
                chart: {
                    type: 'bar',
                    // height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    },
                    animations: {
                        enabled: true
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 3,
                        dataLabels: {
                            total: {
                                enabled: true,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                }
                            }
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
                },
                yaxis: {
                    min: 0,
                    max: 10,
                    title: {
                        text: 'จำนวน',
                        offsetX: 0,
                        style: {
                            fontSize: '16px'
                        }
                    }
                },
                legend: {
                    position: 'right',
                    offsetY: 40,
                    markers: {
                        fillColors: ['#C00000', '#FFC000', '#92D050', '#00B0F0'],
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'vertical',
                        shadeIntensity: 0,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    },
                    opacity: 1,
                    colors: ['#C00000', '#FFC000', '#92D050', '#00B0F0'],
                },
            },

            // เก็บค่าจาก api
            getValue: {},
            
            getDataArr:[],

            getData1: '',
            getData2: '',
            getData3: '',
            getData4: '',
            getData6: '',
            getData7: '',
            getData8: '',
            getData9: '',
            getData10: '',
            getData11: '',
            getData12: '',
            getData13: '',
            getData14: '',
            getData15: '',
            getData16: '',
            getData17: '',
            getData18: '',
            getData19: '',
            getData20: '',
            getData21: '',
            getData22: '',
            getData23: '',
            getData24: '',
            getData25: '',

            getDataPlc: '',
            getDataElc: ''
        }
    },

    async created() {
        this.getValue = await api.gettask(this.$route.params.id)
        this.getData()
        // window.dispatchEvent(new Event('resize'))   
    },

    async mounted() {
        // this.getValue = await api.gettask(this.$route.params.id)
    },

    methods: {
        getData() {
            let getFormHeight = [];
            let getFormModerate = [];
            let getFormLow = [];
            let getFormAic = [];
            let formHeight = this.getValue.form;
            console.log(formHeight);
            //  ข้อที่ 1

            getFormHeight[0] = this.getValue.form1.form1_1.height + this.getValue.form1.form1_2.height + this.getValue.form1.form1_3.height + this.getValue.form1.form1_4.height;
            getFormModerate[0] = this.getValue.form1.form1_1.moderate + this.getValue.form1.form1_2.moderate + this.getValue.form1.form1_3.moderate + this.getValue.form1.form1_4.moderate;
            getFormLow[0] = this.getValue.form1.form1_1.low + this.getValue.form1.form1_2.low + this.getValue.form1.form1_3.low + this.getValue.form1.form1_4.low;
            getFormAic[0] = this.getValue.form1.form1_1.aic + this.getValue.form1.form1_2.aic + this.getValue.form1.form1_3.aic + this.getValue.form1.form1_4.aic;
            this.series[0].data[0] = getFormHeight[0];
            this.series[1].data[0] = getFormModerate[0];
            this.series[2].data[0] = getFormLow[0];
            this.series[3].data[0] = getFormAic[0];

            //  ข้อที่ 2

            getFormHeight[1] = this.getValue.form2.form2_1.height + this.getValue.form2.form2_2.height + this.getValue.form2.form2_3.height + this.getValue.form2.form2_4.height + this.getValue.form2.form2_5.height + this.getValue.form2.form2_6.height;
            getFormModerate[1] = this.getValue.form2.form2_1.moderate + this.getValue.form2.form2_2.moderate + this.getValue.form2.form2_3.moderate + this.getValue.form2.form2_4.moderate + this.getValue.form2.form2_5.moderate + + this.getValue.form2.form2_6.moderate;
            getFormLow[1] = this.getValue.form2.form2_1.low + this.getValue.form2.form2_2.low + this.getValue.form2.form2_3.low + this.getValue.form2.form2_4.low + this.getValue.form2.form2_5.low + this.getValue.form2.form2_6.low;
            getFormAic[1] = this.getValue.form2.form2_1.aic + this.getValue.form2.form2_2.aic + this.getValue.form2.form2_3.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_6.aic;
            this.series[0].data[1] = getFormHeight[1];
            this.series[1].data[1] = getFormModerate[1];
            this.series[2].data[1] = getFormLow[1];
            this.series[3].data[1] = getFormAic[1];

            //  ข้อที่ 3

            getFormHeight[2] = this.getValue.form3.form3_1.height + this.getValue.form3.form3_2.height + this.getValue.form3.form3_3.height;
            getFormModerate[2] = this.getValue.form3.form3_1.moderate + this.getValue.form3.form3_2.moderate + this.getValue.form3.form3_3.moderate;
            getFormLow[2] = this.getValue.form3.form3_1.low + this.getValue.form3.form3_2.low + this.getValue.form3.form3_3.low;
            getFormAic[2] = this.getValue.form3.form3_1.aic + this.getValue.form3.form3_2.aic + this.getValue.form3.form3_3.aic;
            this.series[0].data[2] = getFormHeight[2];
            this.series[1].data[2] = getFormModerate[2];
            this.series[2].data[2] = getFormLow[2];
            this.series[3].data[2] = getFormAic[2];

            //  ข้อที่ 4

            getFormHeight[3] = this.getValue.form4.form4_1.height + this.getValue.form4.form4_2.height + this.getValue.form4.form4_3.height + this.getValue.form4.form4_4.height + this.getValue.form4.form4_5.height;
            getFormModerate[3] = this.getValue.form4.form4_1.moderate + this.getValue.form4.form4_2.moderate + this.getValue.form4.form4_3.moderate + this.getValue.form4.form4_4.moderate + this.getValue.form4.form4_5.moderate;
            getFormLow[3] = this.getValue.form4.form4_1.low + this.getValue.form4.form4_2.low + this.getValue.form4.form4_3.low + this.getValue.form4.form4_4.low + this.getValue.form4.form4_5.low;
            getFormAic[3] = this.getValue.form4.form4_1.aic + this.getValue.form4.form4_2.aic + this.getValue.form4.form4_3.aic + this.getValue.form4.form4_4.aic + this.getValue.form4.form4_5.aic;
            this.series[0].data[3] = getFormHeight[3];
            this.series[1].data[3] = getFormModerate[3];
            this.series[2].data[3] = getFormLow[3];
            this.series[3].data[3] = getFormAic[3];

            //  ข้อที่ 5

            getFormHeight[4] = this.getValue.form5.form5_1.height + this.getValue.form5.form5_2.height + this.getValue.form5.form5_3.height + this.getValue.form5.form5_4.height;
            getFormModerate[4] = this.getValue.form5.form5_1.moderate + this.getValue.form5.form5_2.moderate + this.getValue.form5.form5_3.moderate + this.getValue.form5.form5_4.moderate;
            getFormLow[4] = this.getValue.form5.form5_1.low + this.getValue.form5.form5_2.low + this.getValue.form5.form5_3.low + this.getValue.form5.form5_4.low;
            getFormAic[4] = this.getValue.form5.form5_1.aic + this.getValue.form5.form5_2.aic + this.getValue.form5.form5_3.aic + this.getValue.form5.form5_4.aic;
            this.series[0].data[4] = getFormHeight[4];
            this.series[1].data[4] = getFormModerate[4];
            this.series[2].data[4] = getFormLow[4];
            this.series[3].data[4] = getFormAic[4];

            //  ข้อที่ 6

            getFormHeight[5] = this.getValue.form6.form6_1.height + this.getValue.form6.form6_2.height + this.getValue.form6.form6_3.height + this.getValue.form6.form6_4.height;
            getFormModerate[5] = this.getValue.form6.form6_1.moderate + this.getValue.form6.form6_2.moderate + this.getValue.form6.form6_3.moderate + this.getValue.form6.form6_4.moderate;
            getFormLow[5] = this.getValue.form6.form6_1.low + this.getValue.form6.form6_2.low + this.getValue.form6.form6_3.low + this.getValue.form6.form6_4.low;
            getFormAic[5] = this.getValue.form6.form6_1.aic + this.getValue.form6.form6_2.aic + this.getValue.form6.form6_3.aic + this.getValue.form6.form6_4.aic;
            this.series[0].data[5] = getFormHeight[5];
            this.series[1].data[5] = getFormModerate[5];
            this.series[2].data[5] = getFormLow[5];
            this.series[3].data[5] = getFormAic[5];

            //  ข้อที่ 7

            getFormHeight[6] = this.getValue.form7.form7_1.height + this.getValue.form7.form7_2.height + this.getValue.form7.form7_3.height + this.getValue.form7.form7_4.height + this.getValue.form7.form7_5.height;
            getFormModerate[6] = this.getValue.form7.form7_1.moderate + this.getValue.form7.form7_2.moderate + this.getValue.form7.form7_3.moderate + this.getValue.form7.form7_4.moderate + this.getValue.form7.form7_5.moderate;
            getFormLow[6] = this.getValue.form7.form7_1.low + this.getValue.form7.form7_2.low + this.getValue.form7.form7_3.low + this.getValue.form7.form7_4.low + this.getValue.form7.form7_5.low;
            getFormAic[6] = this.getValue.form7.form7_1.aic + this.getValue.form7.form7_2.aic + this.getValue.form7.form7_3.aic + this.getValue.form7.form7_4.aic + this.getValue.form7.form7_5.aic;
            this.series[0].data[6] = getFormHeight[6];
            this.series[1].data[6] = getFormModerate[6];
            this.series[2].data[6] = getFormLow[6];
            this.series[3].data[6] = getFormAic[6];

            //  ข้อที่ 8

            getFormHeight[7] = this.getValue.form8.form8_1.height + this.getValue.form8.form8_2.height + this.getValue.form8.form8_3.height + this.getValue.form8.form8_4.height;
            getFormModerate[7] = this.getValue.form8.form8_1.moderate + this.getValue.form8.form8_2.moderate + this.getValue.form8.form8_3.moderate + this.getValue.form8.form8_4.moderate;
            getFormLow[7] = this.getValue.form8.form8_1.low + this.getValue.form8.form8_2.low + this.getValue.form8.form8_3.low + this.getValue.form8.form8_4.low;
            getFormAic[7] = this.getValue.form8.form8_1.aic + this.getValue.form8.form8_2.aic + this.getValue.form8.form8_3.aic + this.getValue.form8.form8_4.aic;
            this.series[0].data[7] = getFormHeight[7];
            this.series[1].data[7] = getFormModerate[7];
            this.series[2].data[7] = getFormLow[7];
            this.series[3].data[7] = getFormAic[7];

            //  ข้อที่ 9

            getFormHeight[8] = this.getValue.form9.form9_1.height + this.getValue.form9.form9_2.height + this.getValue.form9.form9_3.height;
            getFormModerate[8] = this.getValue.form9.form9_1.moderate + this.getValue.form9.form9_2.moderate + this.getValue.form9.form9_3.moderate;
            getFormLow[8] = this.getValue.form9.form9_1.low + this.getValue.form9.form9_2.low + this.getValue.form9.form9_3.low;
            getFormAic[8] = this.getValue.form9.form9_1.aic + this.getValue.form9.form9_2.aic + this.getValue.form9.form9_3.aic;
            this.series[0].data[8] = getFormHeight[8];
            this.series[1].data[8] = getFormModerate[8];
            this.series[2].data[8] = getFormLow[8];
            this.series[3].data[8] = getFormAic[8];

            //  ข้อที่ 10

            getFormHeight[9] = this.getValue.form10.form10_1.height + this.getValue.form10.form10_2.height + this.getValue.form10.form10_3.height + this.getValue.form10.form10_4.height + this.getValue.form10.form10_5.height;
            getFormModerate[9] = this.getValue.form10.form10_1.moderate + this.getValue.form10.form10_2.moderate + this.getValue.form10.form10_3.moderate + this.getValue.form10.form10_4.moderate + this.getValue.form10.form10_5.moderate;
            getFormLow[9] = this.getValue.form10.form10_1.low + this.getValue.form10.form10_2.low + this.getValue.form10.form10_3.low + this.getValue.form10.form10_4.low + this.getValue.form10.form10_5.low;
            getFormAic[9] = this.getValue.form10.form10_1.aic + this.getValue.form10.form10_2.aic + this.getValue.form10.form10_3.aic + this.getValue.form10.form10_4.aic + this.getValue.form10.form10_5.aic;
            this.series[0].data[9] = getFormHeight[9];
            this.series[1].data[9] = getFormModerate[9];
            this.series[2].data[9] = getFormLow[9];
            this.series[3].data[9] = getFormAic[9];

            //  ข้อที่ 11

            getFormHeight[10] = this.getValue.form11.form11_1.height + this.getValue.form11.form11_2.height + this.getValue.form11.form11_3.height + this.getValue.form11.form11_4.height;
            getFormModerate[10] = this.getValue.form11.form11_1.moderate + this.getValue.form11.form11_2.moderate + this.getValue.form11.form11_3.moderate + this.getValue.form11.form11_4.moderate;
            getFormLow[10] = this.getValue.form11.form11_1.low + this.getValue.form11.form11_2.low + this.getValue.form11.form11_3.low + this.getValue.form11.form11_4.low;
            getFormAic[10] = this.getValue.form11.form11_1.aic + this.getValue.form11.form11_2.aic + this.getValue.form11.form11_3.aic + this.getValue.form11.form11_4.aic;
            this.series[0].data[10] = getFormHeight[10];
            this.series[1].data[10] = getFormModerate[10];
            this.series[2].data[10] = getFormLow[10];
            this.series[3].data[10] = getFormAic[10];

            //  ข้อที่ 12

            getFormHeight[11] = this.getValue.form12.form12_1.height + this.getValue.form12.form12_2.height + this.getValue.form12.form12_3.height + this.getValue.form12.form12_4.height + this.getValue.form12.form12_5.height + this.getValue.form12.form12_6.height + this.getValue.form12.form12_7.height;
            getFormModerate[11] = this.getValue.form12.form12_1.moderate + this.getValue.form12.form12_2.moderate + this.getValue.form12.form12_3.moderate + this.getValue.form12.form12_4.moderate + this.getValue.form12.form12_5.moderate + this.getValue.form12.form12_6.moderate + this.getValue.form12.form12_7.moderate;
            getFormLow[11] = this.getValue.form12.form12_1.low + this.getValue.form12.form12_2.low + this.getValue.form12.form12_3.low + this.getValue.form12.form12_4.low + this.getValue.form12.form12_5.low + this.getValue.form12.form12_6.low + this.getValue.form12.form12_7.low;
            getFormAic[11] = this.getValue.form12.form12_1.aic + this.getValue.form12.form12_2.aic + this.getValue.form12.form12_3.aic + this.getValue.form12.form12_4.aic + this.getValue.form12.form12_5.aic + this.getValue.form12.form12_6.aic + this.getValue.form12.form12_7.aic;
            this.series[0].data[11] = getFormHeight[11];
            this.series[1].data[11] = getFormModerate[11];
            this.series[2].data[11] = getFormLow[11];
            this.series[3].data[11] = getFormAic[11];

            //  ข้อที่ 13

            getFormHeight[12] = this.getValue.form13.form13_1.height + this.getValue.form13.form13_2.height + this.getValue.form13.form13_3.height + this.getValue.form13.form13_4.height + this.getValue.form13.form13_5.height + this.getValue.form13.form13_6.height;
            getFormModerate[12] = this.getValue.form13.form13_1.moderate + this.getValue.form13.form13_2.moderate + this.getValue.form13.form13_3.moderate + this.getValue.form13.form13_4.moderate + this.getValue.form13.form13_5.moderate + this.getValue.form13.form13_6.moderate;
            getFormLow[12] = this.getValue.form13.form13_1.low + this.getValue.form13.form13_2.low + this.getValue.form13.form13_3.low + this.getValue.form13.form13_4.low + this.getValue.form13.form13_5.low + this.getValue.form13.form13_6.low;
            getFormAic[12] = this.getValue.form13.form13_1.aic + this.getValue.form13.form13_2.aic + this.getValue.form13.form13_3.aic + this.getValue.form13.form13_4.aic + this.getValue.form13.form13_5.aic + this.getValue.form13.form13_6.aic;
            this.series[0].data[12] = getFormHeight[12];
            this.series[1].data[12] = getFormModerate[12];
            this.series[2].data[12] = getFormLow[12];
            this.series[3].data[12] = getFormAic[12];

            //  ข้อที่ 14

            getFormHeight[13] = this.getValue.form14.form14_1.height + this.getValue.form14.form14_2.height + this.getValue.form14.form14_3.height;
            getFormModerate[13] = this.getValue.form14.form14_1.moderate + this.getValue.form14.form14_2.moderate + this.getValue.form14.form14_3.moderate;
            getFormLow[13] = this.getValue.form14.form14_1.low + this.getValue.form14.form14_2.low + this.getValue.form14.form14_3.low;
            getFormAic[13] = this.getValue.form14.form14_1.aic + this.getValue.form14.form14_2.aic + this.getValue.form14.form14_3.aic;
            this.series[0].data[13] = getFormHeight[13];
            this.series[1].data[13] = getFormModerate[13];
            this.series[2].data[13] = getFormLow[13];
            this.series[3].data[13] = getFormAic[13];

            //  ข้อที่ 15

            getFormHeight[14] = this.getValue.form15.form15_1.height + this.getValue.form15.form15_2.height;
            getFormModerate[14] = this.getValue.form15.form15_1.moderate + this.getValue.form15.form15_2.moderate;
            getFormLow[14] = this.getValue.form15.form15_1.low + this.getValue.form15.form15_2.low;
            getFormAic[14] = this.getValue.form15.form15_1.aic + this.getValue.form15.form15_2.aic;
            this.series[0].data[14] = getFormHeight[14];
            this.series[1].data[14] = getFormModerate[14];
            this.series[2].data[14] = getFormLow[14];
            this.series[3].data[14] = getFormAic[14];

            //  ข้อที่ 16

            getFormHeight[15] = this.getValue.form16.form16_1.height + this.getValue.form16.form16_2.height + this.getValue.form16.form16_3.height + this.getValue.form16.form16_4.height + this.getValue.form16.form16_5.height + this.getValue.form16.form16_6.height;
            getFormModerate[15] = this.getValue.form16.form16_1.moderate + this.getValue.form16.form16_2.moderate + this.getValue.form16.form16_3.moderate + this.getValue.form16.form16_4.moderate + this.getValue.form16.form16_5.moderate + this.getValue.form16.form16_6.moderate;
            getFormLow[15] = this.getValue.form16.form16_1.low + this.getValue.form16.form16_2.low + this.getValue.form16.form16_3.low + this.getValue.form16.form16_4.low + this.getValue.form16.form16_5.low + this.getValue.form16.form16_6.low;
            getFormAic[15] = this.getValue.form16.form16_1.aic + this.getValue.form16.form16_2.aic + this.getValue.form16.form16_3.aic + this.getValue.form16.form16_4.aic + this.getValue.form16.form16_5.aic + this.getValue.form16.form16_6.aic;
            this.series[0].data[15] = getFormHeight[15];
            this.series[1].data[15] = getFormModerate[15];
            this.series[2].data[15] = getFormLow[15];
            this.series[3].data[15] = getFormAic[15];

            //  ข้อที่ 17

            getFormHeight[16] = this.getValue.form17.form17_1.height + this.getValue.form17.form17_2.height;
            getFormModerate[16] = this.getValue.form17.form17_1.moderate + this.getValue.form17.form17_2.moderate;
            getFormLow[16] = this.getValue.form17.form17_1.low + this.getValue.form17.form17_2.low;
            getFormAic[16] = this.getValue.form17.form17_1.aic + this.getValue.form17.form17_2.aic;
            this.series[0].data[16] = getFormHeight[16];
            this.series[1].data[16] = getFormModerate[16];
            this.series[2].data[16] = getFormLow[16];
            this.series[3].data[16] = getFormAic[16];

            //  ข้อที่ 18

            getFormHeight[17] = this.getValue.form18.form18_1.height + this.getValue.form18.form18_2.height + this.getValue.form18.form18_3.height + this.getValue.form18.form18_4.height + this.getValue.form18.form18_5.height + this.getValue.form18.form18_6.height;
            getFormModerate[17] = this.getValue.form18.form18_1.moderate + this.getValue.form18.form18_2.moderate + this.getValue.form18.form18_3.moderate + this.getValue.form18.form18_4.moderate + this.getValue.form18.form18_5.moderate + this.getValue.form18.form18_6.moderate;
            getFormLow[17] = this.getValue.form18.form18_1.low + this.getValue.form18.form18_2.low + this.getValue.form18.form18_3.low + this.getValue.form18.form18_4.low + this.getValue.form18.form18_5.low + this.getValue.form18.form18_6.low;
            getFormAic[17] = this.getValue.form18.form18_1.aic + this.getValue.form18.form18_2.aic + this.getValue.form18.form18_3.aic + this.getValue.form18.form18_4.aic + this.getValue.form18.form18_5.aic + this.getValue.form18.form18_6.aic;
            this.series[0].data[17] = getFormHeight[17];
            this.series[1].data[17] = getFormModerate[17];
            this.series[2].data[17] = getFormLow[17];
            this.series[3].data[17] = getFormAic[17];

            //  ข้อที่ 19

            getFormHeight[18] = this.getValue.form19.form19_1.height + this.getValue.form19.form19_2.height + this.getValue.form19.form19_3.height + this.getValue.form19.form19_4.height;
            getFormModerate[18] = this.getValue.form19.form19_1.moderate + this.getValue.form19.form19_2.moderate + this.getValue.form19.form19_3.moderate + this.getValue.form19.form19_4.moderate;
            getFormLow[18] = this.getValue.form19.form19_1.low + this.getValue.form19.form19_2.low + this.getValue.form19.form19_3.low + this.getValue.form19.form19_4.low;
            getFormAic[18] = this.getValue.form19.form19_1.aic + this.getValue.form19.form19_2.aic + this.getValue.form19.form19_3.aic + this.getValue.form19.form19_4.aic;
            this.series[0].data[18] = getFormHeight[18];
            this.series[1].data[18] = getFormModerate[18];
            this.series[2].data[18] = getFormLow[18];
            this.series[3].data[18] = getFormAic[18];

            //  ข้อที่ 20

            getFormHeight[19] = this.getValue.form20.form20_1.height + this.getValue.form20.form20_2.height + this.getValue.form20.form20_3.height;
            getFormModerate[19] = this.getValue.form20.form20_1.moderate + this.getValue.form20.form20_2.moderate + this.getValue.form20.form20_3.moderate;
            getFormLow[19] = this.getValue.form20.form20_1.low + this.getValue.form20.form20_2.low + this.getValue.form20.form20_3.low;
            getFormAic[19] = this.getValue.form20.form20_1.aic + this.getValue.form20.form20_2.aic + this.getValue.form20.form20_3.aic;
            this.series[0].data[19] = getFormHeight[19];
            this.series[1].data[19] = getFormModerate[19];
            this.series[2].data[19] = getFormLow[19];
            this.series[3].data[19] = getFormAic[19];

            //  ข้อที่ 21

            getFormHeight[20] = this.getValue.form21.form21_1.height + this.getValue.form21.form21_2.height + this.getValue.form21.form21_3.height + this.getValue.form21.form21_4.height + this.getValue.form21.form21_5.height;
            getFormModerate[20] = this.getValue.form21.form21_1.moderate + this.getValue.form21.form21_2.moderate + this.getValue.form21.form21_3.moderate + this.getValue.form21.form21_4.moderate + this.getValue.form21.form21_5.moderate;
            getFormLow[20] = this.getValue.form21.form21_1.low + this.getValue.form21.form21_2.low + this.getValue.form21.form21_3.low + this.getValue.form21.form21_4.low + this.getValue.form21.form21_5.low;
            getFormAic[20] = this.getValue.form21.form21_1.aic + this.getValue.form21.form21_2.aic + this.getValue.form21.form21_3.aic + this.getValue.form21.form21_4.aic + this.getValue.form21.form21_5.aic;
            this.series[0].data[20] = getFormHeight[20];
            this.series[1].data[20] = getFormModerate[20];
            this.series[2].data[20] = getFormLow[20];
            this.series[3].data[20] = getFormAic[20];

            //  ข้อที่ 22

            getFormHeight[21] = this.getValue.form22.form22_1.height + this.getValue.form22.form22_2.height + this.getValue.form22.form22_3.height + this.getValue.form22.form22_4.height + this.getValue.form22.form22_5.height + this.getValue.form22.form22_6.height + this.getValue.form22.form22_7.height + this.getValue.form22.form22_8.height;
            getFormModerate[21] = this.getValue.form22.form22_1.moderate + this.getValue.form22.form22_2.moderate + this.getValue.form22.form22_3.moderate + this.getValue.form22.form22_4.moderate + this.getValue.form22.form22_5.moderate + this.getValue.form22.form22_6.moderate + this.getValue.form22.form22_7.moderate + this.getValue.form22.form22_8.moderate;
            getFormLow[21] = this.getValue.form22.form22_1.low + this.getValue.form22.form22_2.low + this.getValue.form22.form22_3.low + this.getValue.form22.form22_4.low + this.getValue.form22.form22_5.low + this.getValue.form22.form22_6.low + this.getValue.form22.form22_7.low + this.getValue.form22.form22_8.low;
            getFormAic[21] = this.getValue.form22.form22_1.aic + this.getValue.form22.form22_2.aic + this.getValue.form22.form22_3.aic + this.getValue.form22.form22_4.aic + this.getValue.form22.form22_5.aic + this.getValue.form22.form22_6.aic + this.getValue.form22.form22_7.aic + this.getValue.form22.form22_8.aic;
            this.series[0].data[21] = getFormHeight[21];
            this.series[1].data[21] = getFormModerate[21];
            this.series[2].data[21] = getFormLow[21];
            this.series[3].data[21] = getFormAic[21];

            //  ข้อที่ 23

            getFormHeight[22] = this.getValue.form23.form23_1.height + this.getValue.form23.form23_2.height + this.getValue.form23.form23_3.height + this.getValue.form23.form23_4.height + this.getValue.form23.form23_5.height + this.getValue.form23.form23_6.height;
            getFormModerate[22] = this.getValue.form23.form23_1.moderate + this.getValue.form23.form23_2.moderate + this.getValue.form23.form23_3.moderate + this.getValue.form23.form23_4.moderate + this.getValue.form23.form23_5.moderate + this.getValue.form23.form23_6.moderate;
            getFormLow[22] = this.getValue.form23.form23_1.low + this.getValue.form23.form23_2.low + this.getValue.form23.form23_3.low + this.getValue.form23.form23_4.low + this.getValue.form23.form23_5.low + this.getValue.form23.form23_6.low;
            getFormAic[22] = this.getValue.form23.form23_1.aic + this.getValue.form23.form23_2.aic + this.getValue.form23.form23_3.aic + this.getValue.form23.form23_4.aic + this.getValue.form23.form23_5.aic + this.getValue.form23.form23_6.aic;
            this.series[0].data[22] = getFormHeight[22];
            this.series[1].data[22] = getFormModerate[22];
            this.series[2].data[22] = getFormLow[22];
            this.series[3].data[22] = getFormAic[22];

            //  ข้อที่ 24

            getFormHeight[23] = this.getValue.form24.form24_1.height + this.getValue.form24.form24_2.height + this.getValue.form24.form24_3.height + this.getValue.form24.form24_4.height + this.getValue.form24.form24_5.height + this.getValue.form24.form24_6.height;
            getFormModerate[23] = this.getValue.form24.form24_1.moderate + this.getValue.form24.form24_2.moderate + this.getValue.form24.form24_3.moderate + this.getValue.form24.form24_4.moderate + this.getValue.form24.form24_5.moderate + this.getValue.form24.form24_6.moderate;
            getFormLow[23] = this.getValue.form24.form24_1.low + this.getValue.form24.form24_2.low + this.getValue.form24.form24_3.low + this.getValue.form24.form24_4.low + this.getValue.form24.form24_5.low + this.getValue.form24.form24_6.low;
            getFormAic[23] = this.getValue.form24.form24_1.aic + this.getValue.form24.form24_2.aic + this.getValue.form24.form24_3.aic + this.getValue.form24.form24_4.aic + this.getValue.form24.form24_5.aic + this.getValue.form24.form24_6.aic;
            this.series[0].data[23] = getFormHeight[23];
            this.series[1].data[23] = getFormModerate[23];
            this.series[2].data[23] = getFormLow[23];
            this.series[3].data[23] = getFormAic[23];

            //  ข้อที่ 25

            getFormHeight[24] = this.getValue.form24.form24_1.height;
            getFormModerate[24] = this.getValue.form24.form24_1.moderate;
            getFormLow[24] = this.getValue.form24.form24_1.low;
            getFormAic[24] = this.getValue.form24.form24_1.aic;
            this.series[0].data[24] = getFormHeight[24];
            this.series[1].data[24] = getFormModerate[24];
            this.series[2].data[24] = getFormLow[24];
            this.series[3].data[24] = getFormAic[24];

            // นำตัวแปรด้านบนมาบวกกัน

            for (let i = 0; i <= 25; i++) { 
                this.getDataArr[i] = getFormHeight[i] + getFormModerate[i] + getFormLow[i] + getFormAic[i];
                console.log(this.getDataArr)
            }

            // this.getData1 = getFormHeight1 + getFormModerate1 + getFormLow1 + getFormAic1;
            // this.getData2 = getFormHeight2 + getFormModerate2 + getFormLow2 + getFormAic2;
            // this.getData3 = getFormHeight3 + getFormModerate3 + getFormLow3 + getFormAic3;
            // this.getData4 = getFormHeight4 + getFormModerate4 + getFormLow4 + getFormAic4;
            // this.getData5 = getFormHeight5 + getFormModerate5 + getFormLow5 + getFormAic5;
            // this.getData6 = getFormHeight6 + getFormModerate6 + getFormLow6 + getFormAic6;
            // this.getData7 = getFormHeight7 + getFormModerate7 + getFormLow7 + getFormAic7;
            // this.getData8 = getFormHeight8 + getFormModerate8 + getFormLow8 + getFormAic8;
            // this.getData9 = getFormHeight9 + getFormModerate9 + getFormLow9 + getFormAic9;
            // this.getData10 = getFormHeight10 + getFormModerate10 + getFormLow10 + getFormAic10;
            // this.getData11 = getFormHeight11 + getFormModerate11 + getFormLow11 + getFormAic11;
            // this.getData12 = getFormHeight12 + getFormModerate12 + getFormLow12 + getFormAic12;
            // this.getData13 = getFormHeight13 + getFormModerate13 + getFormLow13 + getFormAic13;
            // this.getData14 = getFormHeight14 + getFormModerate14 + getFormLow14 + getFormAic14;
            // this.getData15 = getFormHeight15 + getFormModerate15 + getFormLow15 + getFormAic15;
            // this.getData16 = getFormHeight16 + getFormModerate16 + getFormLow16 + getFormAic16;
            // this.getData17 = getFormHeight17 + getFormModerate17 + getFormLow17 + getFormAic17;
            // this.getData18 = getFormHeight18 + getFormModerate18 + getFormLow18 + getFormAic18;
            // this.getData19 = getFormHeight19 + getFormModerate19 + getFormLow19 + getFormAic19;
            // this.getData20 = getFormHeight20 + getFormModerate20 + getFormLow20 + getFormAic20;
            // this.getData21 = getFormHeight21 + getFormModerate21 + getFormLow21 + getFormAic21;
            // this.getData22 = getFormHeight22 + getFormModerate22 + getFormLow22 + getFormAic22;
            // this.getData23 = getFormHeight23 + getFormModerate23 + getFormLow23 + getFormAic23;
            // this.getData24 = getFormHeight24 + getFormModerate24 + getFormLow24 + getFormAic24;
            // this.getData25 = getFormHeight25 + getFormModerate25 + getFormLow25 + getFormAic25;

            // console.log(this.getData1, this.getData2, this.getData3, this.getData4, this.getData5,
            //     this.getData6, this.getData7, this.getData8, this.getData9, this.getData10,
            //     this.getData11, this.getData12, this.getData13, this.getData14, this.getData15,
            //     this.getData16, this.getData17, this.getData18, this.getData19, this.getData20,
            //     this.getData21, this.getData22, this.getData23, this.getData24, this.getData25,)

            // เอาตัวแปร 1-17 มาบวกกัน และ 18-25 มาบวกกัน

            // this.getDataPlc = this.getData1 + this.getData2 + this.getData3 + this.getData4 +
            //     this.getData5 + this.getData6 + this.getData7 + this.getData8 +
            //     this.getData9 + this.getData10 + this.getData11 + this.getData12 +
            //     this.getData13 + this.getData14 + this.getData15 + this.getData16 +
            //     this.getData17

            // console.log(this.getDataPlc)

            // this.getDataElc = this.getData18 + this.getData19
            //   this.getData22 + this.getData23 + this.getData24 + this.getData25 +

            // console.log(this.getDataElc)

            this.$refs.chart.updateOptions({
                series: this.series
            })

        }
    },


}
</script>
