<template>
    <div>
        <div class="con-dashboard1 d-flex justify-content-between mt-5">
            <div class="apex-chart1">
                <apex-chart ref="chart" type="bar" height="400" :options="chartOptions" :series="series"/>
            </div>
            <div class="donut-dash">
                <chart-donut :valuePLC="valuePLC" :valueELC="valueELC" />
            </div>
        </div>
        <div class="con-dashboard2 mt-4">
            <div class="apex-chart2">
                <chart-column :getSum1="getSum1" :getSum2="getSum2" :getSum3="getSum3" :formName="formName" />
            </div>
        </div>
    </div>
</template>

<script>
import chartDonut from './dashboard2.vue';
import chartColumn from './dashboard3.vue'
import { api } from '../../helpers/Helpers';
export default {
    name: 'dashbord-1',
    components: {
        chartDonut,
        chartColumn
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
                title: {
                    text: 'บทสรุปผู้บริหาร',
                    align: 'center',
                    style: {
                        fontSize: '18px',
                    }
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
                    categories: ['ข้อที่ 1', 'ข้อที่ 2', ' ข้อที่ 3', ' ข้อที่ 4', 'ข้อที่ 5', 'ข้อที่ 6', 'ข้อที่ 7', 'ข้อที่ 8', 'ข้อที่ 9', 'ข้อที่ 10', 'ข้อที่ 11', 'ข้อที่ 12', 'ข้อที่ 13', 'ข้อที่ 14', 'ข้อที่ 15', 'ข้อที่ 16', 'ข้อที่ 17', 'ข้อที่ 18', 'ข้อที่ 19', 'ข้อที่ 20', 'ข้อที่ 21', 'ข้อที่ 22', 'ข้อที่ 23', 'ข้อที่ 24', 'ข้อที่ 25'],
                    labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: true,
                    }
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

            // เก็บค่าจากผลบวก แต่ละ level
            getFormHeight: [],
            getFormModerate: [],
            getFormLow: [],
            getFormAic: [],

            //  กำหนดตัวแปรเพื่อรับค่าจากการบวกของ getFormHeight | getFormModerate | getFormLow | getFormAic
            valuePLC: 0,
            valueELC: 0,

            //  เก็บค่าจาก db ที่แปลงจาก string เป็น number เพื่อเอไปแสดงใน dashboard (properties = selected)
            valueGroup: [],

            getSum1: null,
            getSum2: null,
            getSum3: null,
            formName:null

            

        }
    },

    async mounted() {
        this.getValue = await api.gettask(this.$route.params.id);
        this.getData();
        this.dataGroup()
    },

    methods: {
        getData() {

            //  ข้อที่ 1

            this.getFormHeight[0] = this.getValue.form1.form1_1.height + this.getValue.form1.form1_2.height + this.getValue.form1.form1_3.height + this.getValue.form1.form1_4.height;
            this.getFormModerate[0] = this.getValue.form1.form1_1.moderate + this.getValue.form1.form1_2.moderate + this.getValue.form1.form1_3.moderate + this.getValue.form1.form1_4.moderate;
            this.getFormLow[0] = this.getValue.form1.form1_1.low + this.getValue.form1.form1_2.low + this.getValue.form1.form1_3.low + this.getValue.form1.form1_4.low;
            this.getFormAic[0] = this.getValue.form1.form1_1.aic + this.getValue.form1.form1_2.aic + this.getValue.form1.form1_3.aic + this.getValue.form1.form1_4.aic;

            //  ข้อที่ 2

            this.getFormHeight[1] = this.getValue.form2.form2_1.height + this.getValue.form2.form2_2.height + this.getValue.form2.form2_3.height + this.getValue.form2.form2_4.height + this.getValue.form2.form2_5.height + this.getValue.form2.form2_6.height;
            this.getFormModerate[1] = this.getValue.form2.form2_1.moderate + this.getValue.form2.form2_2.moderate + this.getValue.form2.form2_3.moderate + this.getValue.form2.form2_4.moderate + this.getValue.form2.form2_5.moderate + + this.getValue.form2.form2_6.moderate;
            this.getFormLow[1] = this.getValue.form2.form2_1.low + this.getValue.form2.form2_2.low + this.getValue.form2.form2_3.low + this.getValue.form2.form2_4.low + this.getValue.form2.form2_5.low + this.getValue.form2.form2_6.low;
            this.getFormAic[1] = this.getValue.form2.form2_1.aic + this.getValue.form2.form2_2.aic + this.getValue.form2.form2_3.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_4.aic + this.getValue.form2.form2_6.aic;

            //  ข้อที่ 3

            this.getFormHeight[2] = this.getValue.form3.form3_1.height + this.getValue.form3.form3_2.height + this.getValue.form3.form3_3.height;
            this.getFormModerate[2] = this.getValue.form3.form3_1.moderate + this.getValue.form3.form3_2.moderate + this.getValue.form3.form3_3.moderate;
            this.getFormLow[2] = this.getValue.form3.form3_1.low + this.getValue.form3.form3_2.low + this.getValue.form3.form3_3.low;
            this.getFormAic[2] = this.getValue.form3.form3_1.aic + this.getValue.form3.form3_2.aic + this.getValue.form3.form3_3.aic;

            //  ข้อที่ 4

            this.getFormHeight[3] = this.getValue.form4.form4_1.height + this.getValue.form4.form4_2.height + this.getValue.form4.form4_3.height + this.getValue.form4.form4_4.height + this.getValue.form4.form4_5.height;
            this.getFormModerate[3] = this.getValue.form4.form4_1.moderate + this.getValue.form4.form4_2.moderate + this.getValue.form4.form4_3.moderate + this.getValue.form4.form4_4.moderate + this.getValue.form4.form4_5.moderate;
            this.getFormLow[3] = this.getValue.form4.form4_1.low + this.getValue.form4.form4_2.low + this.getValue.form4.form4_3.low + this.getValue.form4.form4_4.low + this.getValue.form4.form4_5.low;
            this.getFormAic[3] = this.getValue.form4.form4_1.aic + this.getValue.form4.form4_2.aic + this.getValue.form4.form4_3.aic + this.getValue.form4.form4_4.aic + this.getValue.form4.form4_5.aic;

            //  ข้อที่ 5

            this.getFormHeight[4] = this.getValue.form5.form5_1.height + this.getValue.form5.form5_2.height + this.getValue.form5.form5_3.height + this.getValue.form5.form5_4.height;
            this.getFormModerate[4] = this.getValue.form5.form5_1.moderate + this.getValue.form5.form5_2.moderate + this.getValue.form5.form5_3.moderate + this.getValue.form5.form5_4.moderate;
            this.getFormLow[4] = this.getValue.form5.form5_1.low + this.getValue.form5.form5_2.low + this.getValue.form5.form5_3.low + this.getValue.form5.form5_4.low;
            this.getFormAic[4] = this.getValue.form5.form5_1.aic + this.getValue.form5.form5_2.aic + this.getValue.form5.form5_3.aic + this.getValue.form5.form5_4.aic;

            //  ข้อที่ 6

            this.getFormHeight[5] = this.getValue.form6.form6_1.height + this.getValue.form6.form6_2.height + this.getValue.form6.form6_3.height + this.getValue.form6.form6_4.height;
            this.getFormModerate[5] = this.getValue.form6.form6_1.moderate + this.getValue.form6.form6_2.moderate + this.getValue.form6.form6_3.moderate + this.getValue.form6.form6_4.moderate;
            this.getFormLow[5] = this.getValue.form6.form6_1.low + this.getValue.form6.form6_2.low + this.getValue.form6.form6_3.low + this.getValue.form6.form6_4.low;
            this.getFormAic[5] = this.getValue.form6.form6_1.aic + this.getValue.form6.form6_2.aic + this.getValue.form6.form6_3.aic + this.getValue.form6.form6_4.aic;

            //  ข้อที่ 7

            this.getFormHeight[6] = this.getValue.form7.form7_1.height + this.getValue.form7.form7_2.height + this.getValue.form7.form7_3.height + this.getValue.form7.form7_4.height + this.getValue.form7.form7_5.height;
            this.getFormModerate[6] = this.getValue.form7.form7_1.moderate + this.getValue.form7.form7_2.moderate + this.getValue.form7.form7_3.moderate + this.getValue.form7.form7_4.moderate + this.getValue.form7.form7_5.moderate;
            this.getFormLow[6] = this.getValue.form7.form7_1.low + this.getValue.form7.form7_2.low + this.getValue.form7.form7_3.low + this.getValue.form7.form7_4.low + this.getValue.form7.form7_5.low;
            this.getFormAic[6] = this.getValue.form7.form7_1.aic + this.getValue.form7.form7_2.aic + this.getValue.form7.form7_3.aic + this.getValue.form7.form7_4.aic + this.getValue.form7.form7_5.aic;

            //  ข้อที่ 8

            this.getFormHeight[7] = this.getValue.form8.form8_1.height + this.getValue.form8.form8_2.height + this.getValue.form8.form8_3.height + this.getValue.form8.form8_4.height;
            this.getFormModerate[7] = this.getValue.form8.form8_1.moderate + this.getValue.form8.form8_2.moderate + this.getValue.form8.form8_3.moderate + this.getValue.form8.form8_4.moderate;
            this.getFormLow[7] = this.getValue.form8.form8_1.low + this.getValue.form8.form8_2.low + this.getValue.form8.form8_3.low + this.getValue.form8.form8_4.low;
            this.getFormAic[7] = this.getValue.form8.form8_1.aic + this.getValue.form8.form8_2.aic + this.getValue.form8.form8_3.aic + this.getValue.form8.form8_4.aic;

            //  ข้อที่ 9

            this.getFormHeight[8] = this.getValue.form9.form9_1.height + this.getValue.form9.form9_2.height + this.getValue.form9.form9_3.height;
            this.getFormModerate[8] = this.getValue.form9.form9_1.moderate + this.getValue.form9.form9_2.moderate + this.getValue.form9.form9_3.moderate;
            this.getFormLow[8] = this.getValue.form9.form9_1.low + this.getValue.form9.form9_2.low + this.getValue.form9.form9_3.low;
            this.getFormAic[8] = this.getValue.form9.form9_1.aic + this.getValue.form9.form9_2.aic + this.getValue.form9.form9_3.aic;

            //  ข้อที่ 10

            this.getFormHeight[9] = this.getValue.form10.form10_1.height + this.getValue.form10.form10_2.height + this.getValue.form10.form10_3.height + this.getValue.form10.form10_4.height + this.getValue.form10.form10_5.height;
            this.getFormModerate[9] = this.getValue.form10.form10_1.moderate + this.getValue.form10.form10_2.moderate + this.getValue.form10.form10_3.moderate + this.getValue.form10.form10_4.moderate + this.getValue.form10.form10_5.moderate;
            this.getFormLow[9] = this.getValue.form10.form10_1.low + this.getValue.form10.form10_2.low + this.getValue.form10.form10_3.low + this.getValue.form10.form10_4.low + this.getValue.form10.form10_5.low;
            this.getFormAic[9] = this.getValue.form10.form10_1.aic + this.getValue.form10.form10_2.aic + this.getValue.form10.form10_3.aic + this.getValue.form10.form10_4.aic + this.getValue.form10.form10_5.aic;

            //  ข้อที่ 11

            this.getFormHeight[10] = this.getValue.form11.form11_1.height + this.getValue.form11.form11_2.height + this.getValue.form11.form11_3.height + this.getValue.form11.form11_4.height;
            this.getFormModerate[10] = this.getValue.form11.form11_1.moderate + this.getValue.form11.form11_2.moderate + this.getValue.form11.form11_3.moderate + this.getValue.form11.form11_4.moderate;
            this.getFormLow[10] = this.getValue.form11.form11_1.low + this.getValue.form11.form11_2.low + this.getValue.form11.form11_3.low + this.getValue.form11.form11_4.low;
            this.getFormAic[10] = this.getValue.form11.form11_1.aic + this.getValue.form11.form11_2.aic + this.getValue.form11.form11_3.aic + this.getValue.form11.form11_4.aic;

            //  ข้อที่ 12

            this.getFormHeight[11] = this.getValue.form12.form12_1.height + this.getValue.form12.form12_2.height + this.getValue.form12.form12_3.height + this.getValue.form12.form12_4.height + this.getValue.form12.form12_5.height + this.getValue.form12.form12_6.height + this.getValue.form12.form12_7.height;
            this.getFormModerate[11] = this.getValue.form12.form12_1.moderate + this.getValue.form12.form12_2.moderate + this.getValue.form12.form12_3.moderate + this.getValue.form12.form12_4.moderate + this.getValue.form12.form12_5.moderate + this.getValue.form12.form12_6.moderate + this.getValue.form12.form12_7.moderate;
            this.getFormLow[11] = this.getValue.form12.form12_1.low + this.getValue.form12.form12_2.low + this.getValue.form12.form12_3.low + this.getValue.form12.form12_4.low + this.getValue.form12.form12_5.low + this.getValue.form12.form12_6.low + this.getValue.form12.form12_7.low;
            this.getFormAic[11] = this.getValue.form12.form12_1.aic + this.getValue.form12.form12_2.aic + this.getValue.form12.form12_3.aic + this.getValue.form12.form12_4.aic + this.getValue.form12.form12_5.aic + this.getValue.form12.form12_6.aic + this.getValue.form12.form12_7.aic;

            //  ข้อที่ 13

            this.getFormHeight[12] = this.getValue.form13.form13_1.height + this.getValue.form13.form13_2.height + this.getValue.form13.form13_3.height + this.getValue.form13.form13_4.height + this.getValue.form13.form13_5.height + this.getValue.form13.form13_6.height;
            this.getFormModerate[12] = this.getValue.form13.form13_1.moderate + this.getValue.form13.form13_2.moderate + this.getValue.form13.form13_3.moderate + this.getValue.form13.form13_4.moderate + this.getValue.form13.form13_5.moderate + this.getValue.form13.form13_6.moderate;
            this.getFormLow[12] = this.getValue.form13.form13_1.low + this.getValue.form13.form13_2.low + this.getValue.form13.form13_3.low + this.getValue.form13.form13_4.low + this.getValue.form13.form13_5.low + this.getValue.form13.form13_6.low;
            this.getFormAic[12] = this.getValue.form13.form13_1.aic + this.getValue.form13.form13_2.aic + this.getValue.form13.form13_3.aic + this.getValue.form13.form13_4.aic + this.getValue.form13.form13_5.aic + this.getValue.form13.form13_6.aic;

            //  ข้อที่ 14

            this.getFormHeight[13] = this.getValue.form14.form14_1.height + this.getValue.form14.form14_2.height + this.getValue.form14.form14_3.height;
            this.getFormModerate[13] = this.getValue.form14.form14_1.moderate + this.getValue.form14.form14_2.moderate + this.getValue.form14.form14_3.moderate;
            this.getFormLow[13] = this.getValue.form14.form14_1.low + this.getValue.form14.form14_2.low + this.getValue.form14.form14_3.low;
            this.getFormAic[13] = this.getValue.form14.form14_1.aic + this.getValue.form14.form14_2.aic + this.getValue.form14.form14_3.aic;

            //  ข้อที่ 15

            this.getFormHeight[14] = this.getValue.form15.form15_1.height + this.getValue.form15.form15_2.height;
            this.getFormModerate[14] = this.getValue.form15.form15_1.moderate + this.getValue.form15.form15_2.moderate;
            this.getFormLow[14] = this.getValue.form15.form15_1.low + this.getValue.form15.form15_2.low;
            this.getFormAic[14] = this.getValue.form15.form15_1.aic + this.getValue.form15.form15_2.aic;

            //  ข้อที่ 16

            this.getFormHeight[15] = this.getValue.form16.form16_1.height + this.getValue.form16.form16_2.height + this.getValue.form16.form16_3.height + this.getValue.form16.form16_4.height + this.getValue.form16.form16_5.height + this.getValue.form16.form16_6.height;
            this.getFormModerate[15] = this.getValue.form16.form16_1.moderate + this.getValue.form16.form16_2.moderate + this.getValue.form16.form16_3.moderate + this.getValue.form16.form16_4.moderate + this.getValue.form16.form16_5.moderate + this.getValue.form16.form16_6.moderate;
            this.getFormLow[15] = this.getValue.form16.form16_1.low + this.getValue.form16.form16_2.low + this.getValue.form16.form16_3.low + this.getValue.form16.form16_4.low + this.getValue.form16.form16_5.low + this.getValue.form16.form16_6.low;
            this.getFormAic[15] = this.getValue.form16.form16_1.aic + this.getValue.form16.form16_2.aic + this.getValue.form16.form16_3.aic + this.getValue.form16.form16_4.aic + this.getValue.form16.form16_5.aic + this.getValue.form16.form16_6.aic;

            //  ข้อที่ 17

            this.getFormHeight[16] = this.getValue.form17.form17_1.height + this.getValue.form17.form17_2.height;
            this.getFormModerate[16] = this.getValue.form17.form17_1.moderate + this.getValue.form17.form17_2.moderate;
            this.getFormLow[16] = this.getValue.form17.form17_1.low + this.getValue.form17.form17_2.low;
            this.getFormAic[16] = this.getValue.form17.form17_1.aic + this.getValue.form17.form17_2.aic;

            //  ข้อที่ 18

            this.getFormHeight[17] = this.getValue.form18.form18_1.height + this.getValue.form18.form18_2.height + this.getValue.form18.form18_3.height + this.getValue.form18.form18_4.height + this.getValue.form18.form18_5.height + this.getValue.form18.form18_6.height;
            this.getFormModerate[17] = this.getValue.form18.form18_1.moderate + this.getValue.form18.form18_2.moderate + this.getValue.form18.form18_3.moderate + this.getValue.form18.form18_4.moderate + this.getValue.form18.form18_5.moderate + this.getValue.form18.form18_6.moderate;
            this.getFormLow[17] = this.getValue.form18.form18_1.low + this.getValue.form18.form18_2.low + this.getValue.form18.form18_3.low + this.getValue.form18.form18_4.low + this.getValue.form18.form18_5.low + this.getValue.form18.form18_6.low;
            this.getFormAic[17] = this.getValue.form18.form18_1.aic + this.getValue.form18.form18_2.aic + this.getValue.form18.form18_3.aic + this.getValue.form18.form18_4.aic + this.getValue.form18.form18_5.aic + this.getValue.form18.form18_6.aic;

            //  ข้อที่ 19

            this.getFormHeight[18] = this.getValue.form19.form19_1.height + this.getValue.form19.form19_2.height + this.getValue.form19.form19_3.height + this.getValue.form19.form19_4.height;
            this.getFormModerate[18] = this.getValue.form19.form19_1.moderate + this.getValue.form19.form19_2.moderate + this.getValue.form19.form19_3.moderate + this.getValue.form19.form19_4.moderate;
            this.getFormLow[18] = this.getValue.form19.form19_1.low + this.getValue.form19.form19_2.low + this.getValue.form19.form19_3.low + this.getValue.form19.form19_4.low;
            this.getFormAic[18] = this.getValue.form19.form19_1.aic + this.getValue.form19.form19_2.aic + this.getValue.form19.form19_3.aic + this.getValue.form19.form19_4.aic;

            //  ข้อที่ 20

            this.getFormHeight[19] = this.getValue.form20.form20_1.height + this.getValue.form20.form20_2.height + this.getValue.form20.form20_3.height;
            this.getFormModerate[19] = this.getValue.form20.form20_1.moderate + this.getValue.form20.form20_2.moderate + this.getValue.form20.form20_3.moderate;
            this.getFormLow[19] = this.getValue.form20.form20_1.low + this.getValue.form20.form20_2.low + this.getValue.form20.form20_3.low;
            this.getFormAic[19] = this.getValue.form20.form20_1.aic + this.getValue.form20.form20_2.aic + this.getValue.form20.form20_3.aic;

            //  ข้อที่ 21

            this.getFormHeight[20] = this.getValue.form21.form21_1.height + this.getValue.form21.form21_2.height + this.getValue.form21.form21_3.height + this.getValue.form21.form21_4.height + this.getValue.form21.form21_5.height;
            this.getFormModerate[20] = this.getValue.form21.form21_1.moderate + this.getValue.form21.form21_2.moderate + this.getValue.form21.form21_3.moderate + this.getValue.form21.form21_4.moderate + this.getValue.form21.form21_5.moderate;
            this.getFormLow[20] = this.getValue.form21.form21_1.low + this.getValue.form21.form21_2.low + this.getValue.form21.form21_3.low + this.getValue.form21.form21_4.low + this.getValue.form21.form21_5.low;
            this.getFormAic[20] = this.getValue.form21.form21_1.aic + this.getValue.form21.form21_2.aic + this.getValue.form21.form21_3.aic + this.getValue.form21.form21_4.aic + this.getValue.form21.form21_5.aic;

            //  ข้อที่ 22

            this.getFormHeight[21] = this.getValue.form22.form22_1.height + this.getValue.form22.form22_2.height + this.getValue.form22.form22_3.height + this.getValue.form22.form22_4.height + this.getValue.form22.form22_5.height + this.getValue.form22.form22_6.height + this.getValue.form22.form22_7.height + this.getValue.form22.form22_8.height;
            this.getFormModerate[21] = this.getValue.form22.form22_1.moderate + this.getValue.form22.form22_2.moderate + this.getValue.form22.form22_3.moderate + this.getValue.form22.form22_4.moderate + this.getValue.form22.form22_5.moderate + this.getValue.form22.form22_6.moderate + this.getValue.form22.form22_7.moderate + this.getValue.form22.form22_8.moderate;
            this.getFormLow[21] = this.getValue.form22.form22_1.low + this.getValue.form22.form22_2.low + this.getValue.form22.form22_3.low + this.getValue.form22.form22_4.low + this.getValue.form22.form22_5.low + this.getValue.form22.form22_6.low + this.getValue.form22.form22_7.low + this.getValue.form22.form22_8.low;
            this.getFormAic[21] = this.getValue.form22.form22_1.aic + this.getValue.form22.form22_2.aic + this.getValue.form22.form22_3.aic + this.getValue.form22.form22_4.aic + this.getValue.form22.form22_5.aic + this.getValue.form22.form22_6.aic + this.getValue.form22.form22_7.aic + this.getValue.form22.form22_8.aic;

            //  ข้อที่ 23

            this.getFormHeight[22] = this.getValue.form23.form23_1.height + this.getValue.form23.form23_2.height + this.getValue.form23.form23_3.height + this.getValue.form23.form23_4.height + this.getValue.form23.form23_5.height + this.getValue.form23.form23_6.height;
            this.getFormModerate[22] = this.getValue.form23.form23_1.moderate + this.getValue.form23.form23_2.moderate + this.getValue.form23.form23_3.moderate + this.getValue.form23.form23_4.moderate + this.getValue.form23.form23_5.moderate + this.getValue.form23.form23_6.moderate;
            this.getFormLow[22] = this.getValue.form23.form23_1.low + this.getValue.form23.form23_2.low + this.getValue.form23.form23_3.low + this.getValue.form23.form23_4.low + this.getValue.form23.form23_5.low + this.getValue.form23.form23_6.low;
            this.getFormAic[22] = this.getValue.form23.form23_1.aic + this.getValue.form23.form23_2.aic + this.getValue.form23.form23_3.aic + this.getValue.form23.form23_4.aic + this.getValue.form23.form23_5.aic + this.getValue.form23.form23_6.aic;

            //  ข้อที่ 24

            this.getFormHeight[23] = this.getValue.form24.form24_1.height + this.getValue.form24.form24_2.height + this.getValue.form24.form24_3.height + this.getValue.form24.form24_4.height + this.getValue.form24.form24_5.height + this.getValue.form24.form24_6.height;
            this.getFormModerate[23] = this.getValue.form24.form24_1.moderate + this.getValue.form24.form24_2.moderate + this.getValue.form24.form24_3.moderate + this.getValue.form24.form24_4.moderate + this.getValue.form24.form24_5.moderate + this.getValue.form24.form24_6.moderate;
            this.getFormLow[23] = this.getValue.form24.form24_1.low + this.getValue.form24.form24_2.low + this.getValue.form24.form24_3.low + this.getValue.form24.form24_4.low + this.getValue.form24.form24_5.low + this.getValue.form24.form24_6.low;
            this.getFormAic[23] = this.getValue.form24.form24_1.aic + this.getValue.form24.form24_2.aic + this.getValue.form24.form24_3.aic + this.getValue.form24.form24_4.aic + this.getValue.form24.form24_5.aic + this.getValue.form24.form24_6.aic;

            //  ข้อที่ 25

            this.getFormHeight[24] = this.getValue.form24.form24_1.height;
            this.getFormModerate[24] = this.getValue.form24.form24_1.moderate;
            this.getFormLow[24] = this.getValue.form24.form24_1.low;
            this.getFormAic[24] = this.getValue.form24.form24_1.aic;


            for (let i = 0; i < 25; i++) {
                this.series[0].data[i] = this.getFormHeight[i];
                this.series[1].data[i] = this.getFormModerate[i];
                this.series[2].data[i] = this.getFormLow[i];
                this.series[3].data[i] = this.getFormAic[i];
            }

            // เอาตัวแปร getFormHeight | getFormModerate | getFormLow | getFormAic มาบวกกัน ข้อ 1-17

            for (let i = 0; i < 17; i++) {
                this.valuePLC = this.valuePLC + this.getFormHeight[i] + this.getFormModerate[i] + this.getFormLow[i] + this.getFormAic[i];
            }

            // // เอาตัวแปร getFormHeight | getFormModerate | getFormLow | getFormAic มาบวกกัน ข้อ 18-25

            for (let i = 17; i < 25; i++) {
                this.valueELC = this.valueELC + this.getFormHeight[i] + this.getFormModerate[i] + this.getFormLow[i] + this.getFormAic[i];
            }

            this.$refs.chart.updateOptions({
                series: this.series
            })
        },
        dataGroup() {
            
            // craete array 25 array แล้วกำหนดค่าให้เป็น 0
            var counterOperation = new Array(25).fill(0);
            var counterManagement = new Array(25).fill(0);
            var counterBoardOfDirectors = new Array(25).fill(0);

            // name เอาไว้แสดงในแกน x ของ dashboard 
            var formNameArr = new Array(25).fill(0);

            // สร้าง obj จาก key : value ใน db แล้วทำการดึง key ที่ชื่อว่า 'form'
            var filteredObj = Object.fromEntries(
                Object.entries(this.getValue).filter(([key]) => key.startsWith("form"))
            );

            var forms = filteredObj;

            // ทำการ loop key : value ทีละชุด เพื่อเพิ่มค่าในตัวแปร ที่ใช้ if ในการ check ค่า โดยจะเพิ่มค่าทีละ 1
            Object.entries(forms).forEach(( formValue, formIndex) => {
                formNameArr[formIndex] = formValue[0];
                Object.entries(formValue[1]).forEach((formNumberValue) => {
                    if (formNumberValue[1].selected === "Operation") 
                        {
                        counterOperation[formIndex] = counterOperation[formIndex] + 1;
                        }       
                    else if (formNumberValue[1].selected === "Management") 
                        {  
                        counterManagement[formIndex] = counterManagement[formIndex] + 1;
                        } 
                    else if (formNumberValue[1].selected === "Board of Directors") 
                        {
                        counterBoardOfDirectors[formIndex] = counterBoardOfDirectors[formIndex] + 1;
                        }
                });
            });
            
            this.getSum1 = counterOperation;
            this.getSum2 = counterManagement;
            this.getSum3 = counterBoardOfDirectors;
            this.formName = formNameArr;

        }
    },

}
</script>
