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
            getValue: {}
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

            //  ข้อที่ 1

            let getFormHeight1 = this.getValue.form1.form1_1.height + this.getValue.form1.form1_2.height + this.getValue.form1.form1_3.height + this.getValue.form1.form1_4.height;
            let getFormModerate1 = this.getValue.form1.form1_1.moderate + this.getValue.form1.form1_2.moderate + this.getValue.form1.form1_3.moderate + this.getValue.form1.form1_4.moderate;
            let getFormLow1 = this.getValue.form1.form1_1.low + this.getValue.form1.form1_2.low + this.getValue.form1.form1_3.low + this.getValue.form1.form1_4.low;
            let getFormAic1 = this.getValue.form1.form1_1.aic + this.getValue.form1.form1_2.aic + this.getValue.form1.form1_3.aic + this.getValue.form1.form1_4.aic;
            this.series[0].data[0] = getFormHeight1;
            this.series[1].data[0] = getFormModerate1;
            this.series[2].data[0] = getFormLow1;
            this.series[3].data[0] = getFormAic1;

            //  ข้อที่ 2

            let getFormHeight2 = this.getValue.form2.form2_1.height + this.getValue.form2.form2_2.height + this.getValue.form2.form2_3.height + this.getValue.form2.form2_4.height + this.getValue.form2.form2_5.height + this.getValue.form2.form2_6.height;
            let getFormModerate2 = this.getValue.form2.form2_1.moderate + this.getValue.form2.form2_2.moderate + this.getValue.form2.form2_3.moderate + this.getValue.form2.form2_4.moderate + this.getValue.form2.form2_5.moderate + + this.getValue.form2.form2_6.moderate;
            let getFormLow2 = this.getValue.form2.form2_1.low + this.getValue.form2.form2_2.low + this.getValue.form2.form2_3.low + this.getValue.form2.form2_4.low + this.getValue.form2.form2_5.low + this.getValue.form2.form2_6.low;
            let getFormAic2 = this.getValue.form2.form2_1.aic + this.getValue.form2.form2_2.aic + this.getValue.form2.form2_3.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_6.aic;
            this.series[0].data[1] = getFormHeight2;
            this.series[1].data[1] = getFormModerate2;
            this.series[2].data[1] = getFormLow2;
            this.series[3].data[1] = getFormAic2;

            //  ข้อที่ 3

            let getFormHeight3 = this.getValue.form3.form3_1.height + this.getValue.form3.form3_2.height + this.getValue.form3.form3_3.height;
            let getFormModerate3 = this.getValue.form3.form3_1.moderate + this.getValue.form3.form3_2.moderate + this.getValue.form3.form3_3.moderate;
            let getFormLow3 = this.getValue.form3.form3_1.low + this.getValue.form3.form3_2.low + this.getValue.form3.form3_3.low;
            let getFormAic3 = this.getValue.form3.form3_1.aic + this.getValue.form3.form3_2.aic + this.getValue.form3.form3_3.aic;
            this.series[0].data[2] = getFormHeight3;
            this.series[1].data[2] = getFormModerate3;
            this.series[2].data[2] = getFormLow3;
            this.series[3].data[2] = getFormAic3;

            //  ข้อที่ 4

            let getFormHeight4 = this.getValue.form4.form4_1.height + this.getValue.form4.form4_2.height + this.getValue.form4.form4_3.height + this.getValue.form4.form4_4.height + this.getValue.form4.form4_5.height;
            let getFormModerate4 = this.getValue.form4.form4_1.moderate + this.getValue.form4.form4_2.moderate + this.getValue.form4.form4_3.moderate + this.getValue.form4.form4_4.moderate + this.getValue.form4.form4_5.moderate;
            let getFormLow4 = this.getValue.form4.form4_1.low + this.getValue.form4.form4_2.low + this.getValue.form4.form4_3.low + this.getValue.form4.form4_4.low + this.getValue.form4.form4_5.low;
            let getFormAic4 = this.getValue.form4.form4_1.aic + this.getValue.form4.form4_2.aic + this.getValue.form4.form4_3.aic + this.getValue.form4.form4_4.aic + this.getValue.form4.form4_5.aic;
            this.series[0].data[3] = getFormHeight4;
            this.series[1].data[3] = getFormModerate4;
            this.series[2].data[3] = getFormLow4;
            this.series[3].data[3] = getFormAic4;

            //  ข้อที่ 5

            let getFormHeight5 = this.getValue.form5.form5_1.height + this.getValue.form5.form5_2.height + this.getValue.form5.form5_3.height + this.getValue.form5.form5_4.height;
            let getFormModerate5 = this.getValue.form5.form5_1.moderate + this.getValue.form5.form5_2.moderate + this.getValue.form5.form5_3.moderate + this.getValue.form5.form5_4.moderate;
            let getFormLow5 = this.getValue.form5.form5_1.low + this.getValue.form5.form5_2.low + this.getValue.form5.form5_3.low + this.getValue.form5.form5_4.low;
            let getFormAic5 = this.getValue.form5.form5_1.aic + this.getValue.form5.form5_2.aic + this.getValue.form5.form5_3.aic + this.getValue.form5.form5_4.aic;
            this.series[0].data[4] = getFormHeight5;
            this.series[1].data[4] = getFormModerate5;
            this.series[2].data[4] = getFormLow5;
            this.series[3].data[4] = getFormAic5;

            //  ข้อที่ 6

            let getFormHeight6 = this.getValue.form6.form6_1.height + this.getValue.form6.form6_2.height + this.getValue.form6.form6_3.height + this.getValue.form6.form6_4.height;
            let getFormModerate6 = this.getValue.form6.form6_1.moderate + this.getValue.form6.form6_2.moderate + this.getValue.form6.form6_3.moderate + this.getValue.form6.form6_4.moderate;
            let getFormLow6 = this.getValue.form6.form6_1.low + this.getValue.form6.form6_2.low + this.getValue.form6.form6_3.low + this.getValue.form6.form6_4.low;
            let getFormAic6 = this.getValue.form6.form6_1.aic + this.getValue.form6.form6_2.aic + this.getValue.form6.form6_3.aic + this.getValue.form6.form6_4.aic;
            this.series[0].data[5] = getFormHeight6;
            this.series[1].data[5] = getFormModerate6;
            this.series[2].data[5] = getFormLow6;
            this.series[3].data[5] = getFormAic6;

            //  ข้อที่ 7

            let getFormHeight7 = this.getValue.form7.form7_1.height + this.getValue.form7.form7_2.height + this.getValue.form7.form7_3.height + this.getValue.form7.form7_4.height + this.getValue.form7.form7_5.height;
            let getFormModerate7 = this.getValue.form7.form7_1.moderate + this.getValue.form7.form7_2.moderate + this.getValue.form7.form7_3.moderate + this.getValue.form7.form7_4.moderate + this.getValue.form7.form7_5.moderate;
            let getFormLow7 = this.getValue.form7.form7_1.low + this.getValue.form7.form7_2.low + this.getValue.form7.form7_3.low + this.getValue.form7.form7_4.low + this.getValue.form7.form7_5.low;
            let getFormAic7 = this.getValue.form7.form7_1.aic + this.getValue.form7.form7_2.aic + this.getValue.form7.form7_3.aic + this.getValue.form7.form7_4.aic + this.getValue.form7.form7_5.aic;
            this.series[0].data[6] = getFormHeight7;
            this.series[1].data[6] = getFormModerate7;
            this.series[2].data[6] = getFormLow7;
            this.series[3].data[6] = getFormAic7;

            //  ข้อที่ 8

            let getFormHeight8 = this.getValue.form8.form8_1.height + this.getValue.form8.form8_2.height + this.getValue.form8.form8_3.height + this.getValue.form8.form8_4.height;
            let getFormModerate8 = this.getValue.form8.form8_1.moderate + this.getValue.form8.form8_2.moderate + this.getValue.form8.form8_3.moderate + this.getValue.form8.form8_4.moderate;
            let getFormLow8 = this.getValue.form8.form8_1.low + this.getValue.form8.form8_2.low + this.getValue.form8.form8_3.low + this.getValue.form8.form8_4.low;
            let getFormAic8 = this.getValue.form8.form8_1.aic + this.getValue.form8.form8_2.aic + this.getValue.form8.form8_3.aic + this.getValue.form8.form8_4.aic;
            this.series[0].data[7] = getFormHeight8;
            this.series[1].data[7] = getFormModerate8;
            this.series[2].data[7] = getFormLow8;
            this.series[3].data[7] = getFormAic8;

            //  ข้อที่ 9

            let getFormHeight9 = this.getValue.form9.form9_1.height + this.getValue.form9.form9_2.height + this.getValue.form9.form9_3.height;
            let getFormModerate9 = this.getValue.form9.form9_1.moderate + this.getValue.form9.form9_2.moderate + this.getValue.form9.form9_3.moderate;
            let getFormLow9 = this.getValue.form9.form9_1.low + this.getValue.form9.form9_2.low + this.getValue.form9.form9_3.low;
            let getFormAic9 = this.getValue.form9.form9_1.aic + this.getValue.form9.form9_2.aic + this.getValue.form9.form9_3.aic;
            this.series[0].data[8] = getFormHeight9;
            this.series[1].data[8] = getFormModerate9;
            this.series[2].data[8] = getFormLow9;
            this.series[3].data[8] = getFormAic9;

            //  ข้อที่ 10

            let getFormHeight10 = this.getValue.form10.form10_1.height + this.getValue.form10.form10_2.height + this.getValue.form10.form10_3.height + this.getValue.form10.form10_4.height + this.getValue.form10.form10_5.height;
            let getFormModerate10 = this.getValue.form10.form10_1.moderate + this.getValue.form10.form10_2.moderate + this.getValue.form10.form10_3.moderate + this.getValue.form10.form10_4.moderate + this.getValue.form10.form10_5.moderate;
            let getFormLow10 = this.getValue.form10.form10_1.low + this.getValue.form10.form10_2.low + this.getValue.form10.form10_3.low + this.getValue.form10.form10_4.low + this.getValue.form10.form10_5.low;
            let getFormAic10 = this.getValue.form10.form10_1.aic + this.getValue.form10.form10_2.aic + this.getValue.form10.form10_3.aic + this.getValue.form10.form10_4.aic + this.getValue.form10.form10_5.aic;
            this.series[0].data[9] = getFormHeight10;
            this.series[1].data[9] = getFormModerate10;
            this.series[2].data[9] = getFormLow10;
            this.series[3].data[9] = getFormAic10;

            //  ข้อที่ 11

            let getFormHeight11 = this.getValue.form11.form11_1.height + this.getValue.form11.form11_2.height + this.getValue.form11.form11_3.height + this.getValue.form11.form11_4.height;
            let getFormModerate11 = this.getValue.form11.form11_1.moderate + this.getValue.form11.form11_2.moderate + this.getValue.form11.form11_3.moderate + this.getValue.form11.form11_4.moderate;
            let getFormLow11 = this.getValue.form11.form11_1.low + this.getValue.form11.form11_2.low + this.getValue.form11.form11_3.low + this.getValue.form11.form11_4.low;
            let getFormAic11 = this.getValue.form11.form11_1.aic + this.getValue.form11.form11_2.aic + this.getValue.form11.form11_3.aic + this.getValue.form11.form11_4.aic;
            this.series[0].data[10] = getFormHeight11;
            this.series[1].data[10] = getFormModerate11;
            this.series[2].data[10] = getFormLow11;
            this.series[3].data[10] = getFormAic11;

            //  ข้อที่ 12

            let getFormHeight12 = this.getValue.form12.form12_1.height + this.getValue.form12.form12_2.height + this.getValue.form12.form12_3.height + this.getValue.form12.form12_4.height + this.getValue.form12.form12_5.height + this.getValue.form12.form12_6.height + this.getValue.form12.form12_7.height;
            let getFormModerate12 = this.getValue.form12.form12_1.moderate + this.getValue.form12.form12_2.moderate + this.getValue.form12.form12_3.moderate + this.getValue.form12.form12_4.moderate + this.getValue.form12.form12_5.moderate + this.getValue.form12.form12_6.moderate + this.getValue.form12.form12_7.moderate;
            let getFormLow12 = this.getValue.form12.form12_1.low + this.getValue.form12.form12_2.low + this.getValue.form12.form12_3.low + this.getValue.form12.form12_4.low + this.getValue.form12.form12_5.low + this.getValue.form12.form12_6.low + this.getValue.form12.form12_7.low;
            let getFormAic12 = this.getValue.form12.form12_1.aic + this.getValue.form12.form12_2.aic + this.getValue.form12.form12_3.aic + this.getValue.form12.form12_4.aic + this.getValue.form12.form12_5.aic + this.getValue.form12.form12_6.aic + this.getValue.form12.form12_7.aic;
            this.series[0].data[11] = getFormHeight12;
            this.series[1].data[11] = getFormModerate12;
            this.series[2].data[11] = getFormLow12;
            this.series[3].data[11] = getFormAic12;

            //  ข้อที่ 13

            let getFormHeight13 = this.getValue.form13.form13_1.height + this.getValue.form13.form13_2.height + this.getValue.form13.form13_3.height + this.getValue.form13.form13_4.height + this.getValue.form13.form13_5.height + this.getValue.form13.form13_6.height;
            let getFormModerate13 = this.getValue.form13.form13_1.moderate + this.getValue.form13.form13_2.moderate + this.getValue.form13.form13_3.moderate + this.getValue.form13.form13_4.moderate + this.getValue.form13.form13_5.moderate + this.getValue.form13.form13_6.moderate;
            let getFormLow13 = this.getValue.form13.form13_1.low + this.getValue.form13.form13_2.low + this.getValue.form13.form13_3.low + this.getValue.form13.form13_4.low + this.getValue.form13.form13_5.low + this.getValue.form13.form13_6.low;
            let getFormAic13 = this.getValue.form13.form13_1.aic + this.getValue.form13.form13_2.aic + this.getValue.form13.form13_3.aic + this.getValue.form13.form13_4.aic + this.getValue.form13.form13_5.aic + this.getValue.form13.form13_6.aic;
            this.series[0].data[12] = getFormHeight13;
            this.series[1].data[12] = getFormModerate13;
            this.series[2].data[12] = getFormLow13;
            this.series[3].data[12] = getFormAic13;

            //  ข้อที่ 14

            let getFormHeight14 = this.getValue.form14.form14_1.height + this.getValue.form14.form14_2.height + this.getValue.form14.form14_3.height;
            let getFormModerate14 = this.getValue.form14.form14_1.moderate + this.getValue.form14.form14_2.moderate + this.getValue.form14.form14_3.moderate;
            let getFormLow14 = this.getValue.form14.form14_1.low + this.getValue.form14.form14_2.low + this.getValue.form14.form14_3.low;
            let getFormAic14 = this.getValue.form14.form14_1.aic + this.getValue.form14.form14_2.aic + this.getValue.form14.form14_3.aic;
            this.series[0].data[13] = getFormHeight14;
            this.series[1].data[13] = getFormModerate14;
            this.series[2].data[13] = getFormLow14;
            this.series[3].data[13] = getFormAic14;

            //  ข้อที่ 15

            let getFormHeight15 = this.getValue.form15.form15_1.height + this.getValue.form15.form15_2.height;
            let getFormModerate15 = this.getValue.form15.form15_1.moderate + this.getValue.form15.form15_2.moderate;
            let getFormLow15 = this.getValue.form15.form15_1.low + this.getValue.form15.form15_2.low;
            let getFormAic15 = this.getValue.form15.form15_1.aic + this.getValue.form15.form15_2.aic;
            this.series[0].data[14] = getFormHeight15;
            this.series[1].data[14] = getFormModerate15;
            this.series[2].data[14] = getFormLow15;
            this.series[3].data[14] = getFormAic15;

            //  ข้อที่ 16

            let getFormHeight16 = this.getValue.form16.form16_1.height + this.getValue.form16.form16_2.height + this.getValue.form16.form16_3.height + this.getValue.form16.form16_4.height + this.getValue.form16.form16_5.height + this.getValue.form16.form16_6.height;
            let getFormModerate16 = this.getValue.form16.form16_1.moderate + this.getValue.form16.form16_2.moderate + this.getValue.form16.form16_3.moderate + this.getValue.form16.form16_4.moderate + this.getValue.form16.form16_5.moderate + this.getValue.form16.form16_6.moderate;
            let getFormLow16 = this.getValue.form16.form16_1.low + this.getValue.form16.form16_2.low + this.getValue.form16.form16_3.low + this.getValue.form16.form16_4.low + this.getValue.form16.form16_5.low + this.getValue.form16.form16_6.low;
            let getFormAic16 = this.getValue.form16.form16_1.aic + this.getValue.form16.form16_2.aic + this.getValue.form16.form16_3.aic + this.getValue.form16.form16_4.aic + this.getValue.form16.form16_5.aic + this.getValue.form16.form16_6.aic;
            this.series[0].data[15] = getFormHeight16;
            this.series[1].data[15] = getFormModerate16;
            this.series[2].data[15] = getFormLow16;
            this.series[3].data[15] = getFormAic16;

            //  ข้อที่ 17

            let getFormHeight17 = this.getValue.form17.form17_1.height + this.getValue.form17.form17_2.height;
            let getFormModerate17 = this.getValue.form17.form17_1.moderate + this.getValue.form17.form17_2.moderate;
            let getFormLow17 = this.getValue.form17.form17_1.low + this.getValue.form17.form17_2.low;
            let getFormAic17 = this.getValue.form17.form17_1.aic + this.getValue.form17.form17_2.aic;
            this.series[0].data[16] = getFormHeight17;
            this.series[1].data[16] = getFormModerate17;
            this.series[2].data[16] = getFormLow17;
            this.series[3].data[16] = getFormAic17;

            //  ข้อที่ 18

            let getFormHeight18 = this.getValue.form18.form18_1.height + this.getValue.form18.form18_2.height + this.getValue.form18.form18_3.height + this.getValue.form18.form18_4.height + this.getValue.form18.form18_5.height + this.getValue.form18.form18_6.height;
            let getFormModerate18 = this.getValue.form18.form18_1.moderate + this.getValue.form18.form18_2.moderate + this.getValue.form18.form18_3.moderate + this.getValue.form18.form18_4.moderate + this.getValue.form18.form18_5.moderate + this.getValue.form18.form18_6.moderate;
            let getFormLow18 = this.getValue.form18.form18_1.low + this.getValue.form18.form18_2.low + this.getValue.form18.form18_3.low + this.getValue.form18.form18_4.low + this.getValue.form18.form18_5.low + this.getValue.form18.form18_6.low;
            let getFormAic18 = this.getValue.form18.form18_1.aic + this.getValue.form18.form18_2.aic + this.getValue.form18.form18_3.aic + this.getValue.form18.form18_4.aic + this.getValue.form18.form18_5.aic + this.getValue.form18.form18_6.aic;
            this.series[0].data[17] = getFormHeight18;
            this.series[1].data[17] = getFormModerate18;
            this.series[2].data[17] = getFormLow18;
            this.series[3].data[17] = getFormAic18;

            //  ข้อที่ 19

            let getFormHeight19 = this.getValue.form19.form19_1.height + this.getValue.form19.form19_2.height + this.getValue.form19.form19_3.height + this.getValue.form19.form19_4.height;
            let getFormModerate19 = this.getValue.form19.form19_1.moderate + this.getValue.form19.form19_2.moderate + this.getValue.form19.form19_3.moderate + this.getValue.form19.form19_4.moderate;
            let getFormLow19 = this.getValue.form19.form19_1.low + this.getValue.form19.form19_2.low + this.getValue.form19.form19_3.low + this.getValue.form19.form19_4.low;
            let getFormAic19 = this.getValue.form19.form19_1.aic + this.getValue.form19.form19_2.aic + this.getValue.form19.form19_3.aic + this.getValue.form19.form19_4.aic;
            this.series[0].data[18] = getFormHeight19;
            this.series[1].data[18] = getFormModerate19;
            this.series[2].data[18] = getFormLow19;
            this.series[3].data[18] = getFormAic19;

            //  ข้อที่ 20

            let getFormHeight20 = this.getValue.form20.form20_1.height + this.getValue.form20.form20_2.height + this.getValue.form20.form20_3.height;
            let getFormModerate20 = this.getValue.form20.form20_1.moderate + this.getValue.form20.form20_2.moderate + this.getValue.form20.form20_3.moderate;
            let getFormLow20 = this.getValue.form20.form20_1.low + this.getValue.form20.form20_2.low + this.getValue.form20.form20_3.low;
            let getFormAic20 = this.getValue.form20.form20_1.aic + this.getValue.form20.form20_2.aic + this.getValue.form20.form20_3.aic;
            this.series[0].data[19] = getFormHeight20;
            this.series[1].data[19] = getFormModerate20;
            this.series[2].data[19] = getFormLow20;
            this.series[3].data[19] = getFormAic20;

            //  ข้อที่ 21

            let getFormHeight21 = this.getValue.form21.form21_1.height + this.getValue.form21.form21_2.height + this.getValue.form21.form21_3.height + this.getValue.form21.form21_4.height + this.getValue.form21.form21_5.height;
            let getFormModerate21 = this.getValue.form21.form21_1.moderate + this.getValue.form21.form21_2.moderate + this.getValue.form21.form21_3.moderate + this.getValue.form21.form21_4.moderate + this.getValue.form21.form21_5.moderate;
            let getFormLow21 = this.getValue.form21.form21_1.low + this.getValue.form21.form21_2.low + this.getValue.form21.form21_3.low + this.getValue.form21.form21_4.low + this.getValue.form21.form21_5.low;
            let getFormAic21 = this.getValue.form21.form21_1.aic + this.getValue.form21.form21_2.aic + this.getValue.form21.form21_3.aic + this.getValue.form21.form21_4.aic + this.getValue.form21.form21_5.aic;
            this.series[0].data[20] = getFormHeight21;
            this.series[1].data[20] = getFormModerate21;
            this.series[2].data[20] = getFormLow21;
            this.series[3].data[20] = getFormAic21;

            //  ข้อที่ 22

            let getFormHeight22 = this.getValue.form22.form22_1.height + this.getValue.form22.form22_2.height + this.getValue.form22.form22_3.height + this.getValue.form22.form22_4.height + this.getValue.form22.form22_5.height + this.getValue.form22.form22_6.height + this.getValue.form22.form22_7.height + this.getValue.form22.form22_8.height;
            let getFormModerate22 = this.getValue.form22.form22_1.moderate + this.getValue.form22.form22_2.moderate + this.getValue.form22.form22_3.moderate + this.getValue.form22.form22_4.moderate + this.getValue.form22.form22_5.moderate + this.getValue.form22.form22_6.moderate + this.getValue.form22.form22_7.moderate + this.getValue.form22.form22_8.moderate;
            let getFormLow22 = this.getValue.form22.form22_1.low + this.getValue.form22.form22_2.low + this.getValue.form22.form22_3.low + this.getValue.form22.form22_4.low + this.getValue.form22.form22_5.low + this.getValue.form22.form22_6.low + this.getValue.form22.form22_7.low + this.getValue.form22.form22_8.low;
            let getFormAic22 = this.getValue.form22.form22_1.aic + this.getValue.form22.form22_2.aic + this.getValue.form22.form22_3.aic + this.getValue.form22.form22_4.aic + this.getValue.form22.form22_5.aic + this.getValue.form22.form22_6.aic + this.getValue.form22.form22_7.aic + this.getValue.form22.form22_8.aic;
            this.series[0].data[21] = getFormHeight22;
            this.series[1].data[21] = getFormModerate22;
            this.series[2].data[21] = getFormLow22;
            this.series[3].data[21] = getFormAic22;

            //  ข้อที่ 23

            let getFormHeight23 = this.getValue.form23.form23_1.height + this.getValue.form23.form23_2.height + this.getValue.form23.form23_3.height + this.getValue.form23.form23_4.height + this.getValue.form23.form23_5.height + this.getValue.form23.form23_6.height;
            let getFormModerate23 = this.getValue.form23.form23_1.moderate + this.getValue.form23.form23_2.moderate + this.getValue.form23.form23_3.moderate + this.getValue.form23.form23_4.moderate + this.getValue.form23.form23_5.moderate + this.getValue.form23.form23_6.moderate;
            let getFormLow23 = this.getValue.form23.form23_1.low + this.getValue.form23.form23_2.low + this.getValue.form23.form23_3.low + this.getValue.form23.form23_4.low + this.getValue.form23.form23_5.low + this.getValue.form23.form23_6.low;
            let getFormAic23 = this.getValue.form23.form23_1.aic + this.getValue.form23.form23_2.aic + this.getValue.form23.form23_3.aic + this.getValue.form23.form23_4.aic + this.getValue.form23.form23_5.aic + this.getValue.form23.form23_6.aic;
            this.series[0].data[22] = getFormHeight23;
            this.series[1].data[22] = getFormModerate23;
            this.series[2].data[22] = getFormLow23;
            this.series[3].data[22] = getFormAic23;

            //  ข้อที่ 24

            let getFormHeight24 = this.getValue.form24.form24_1.height + this.getValue.form24.form24_2.height + this.getValue.form24.form24_3.height + this.getValue.form24.form24_4.height + this.getValue.form24.form24_5.height + this.getValue.form24.form24_6.height;
            let getFormModerate24 = this.getValue.form24.form24_1.moderate + this.getValue.form24.form24_2.moderate + this.getValue.form24.form24_3.moderate + this.getValue.form24.form24_4.moderate + this.getValue.form24.form24_5.moderate + this.getValue.form24.form24_6.moderate;
            let getFormLow24 = this.getValue.form24.form24_1.low + this.getValue.form24.form24_2.low + this.getValue.form24.form24_3.low + this.getValue.form24.form24_4.low + this.getValue.form24.form24_5.low + this.getValue.form24.form24_6.low;
            let getFormAic24 = this.getValue.form24.form24_1.aic + this.getValue.form24.form24_2.aic + this.getValue.form24.form24_3.aic + this.getValue.form24.form24_4.aic + this.getValue.form24.form24_5.aic + this.getValue.form24.form24_6.aic;
            this.series[0].data[23] = getFormHeight24;
            this.series[1].data[23] = getFormModerate24;
            this.series[2].data[23] = getFormLow24;
            this.series[3].data[23] = getFormAic24;

            //  ข้อที่ 25

            let getFormHeight25 = this.getValue.form24.form24_1.height;
            let getFormModerate25 = this.getValue.form24.form24_1.moderate;
            let getFormLow25 = this.getValue.form24.form24_1.low;
            let getFormAic25 = this.getValue.form24.form24_1.aic;
            this.series[0].data[24] = getFormHeight25;
            this.series[1].data[24] = getFormModerate25;
            this.series[2].data[24] = getFormLow25;
            this.series[3].data[24] = getFormAic25;

            this.$refs.chart.updateOptions({
                series:this.series
            })
             
            // this.$refs.chart.updateSeries([{
            //             data: this.series
            //         }])

        }
    },


}
</script>
