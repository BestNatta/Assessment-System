<template>
    <div>
        <apex-chart ref="chart" type="bar" height="350" :options="chartOptions" :series="series"></apex-chart>

    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
export default {
    name: 'dashbord3',
    data() {
        return {

            series: [{
                name: 'Board of Directors',
                data: []
            }, {
                name: 'Management',
                data: []
            }, {
                name: 'Operation',
                data: []
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: false
                    }
                },
                title: {
                    text: 'สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน',
                    align: 'center',
                    style: {
                        fontSize: '18px'
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
                                enabled: false,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                }
                            }
                        }
                    },
                },
                xaxis: {
                    categories:[]
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
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            },
            getValue: {}, // รับ data จาก api
            // getForm: 
        }
    },

    props: ['getSum1', 'getSum2', 'getSum3','formName'],

    created() {

    },

    async mounted() {

        this.getValue = await api.gettask(this.$route.params.id);
        // console.log(this.getSum1); // operations 2
        // console.log(this.getSum2); // manage 1
        // console.log(this.getSum3); // board' 0
        if (this.getSum3) {
            this.series[0].data = this.getSum3;
            this.series[1].data = this.getSum2;
            this.series[2].data = this.getSum1;
            this.chartOptions.xaxis.categories = this.formName;
            for(let i=0; i<Object.keys(this.formName).length;i++ ){
                this.chartOptions.xaxis.categories[i] = "ข้อที่ " + this.formName[i]
            }
        }
        

        this.$refs.chart.updateOptions(this.series)



    },

    updated() { },

    methods: {
        updateData() {

        }
    },

    watch: {
        getSum1(newValue) {
            this.series[2].data = newValue;
            this.$refs.chart.updateOptions(this.series)
        },
        getSum2(newValue) {
            this.series[1].data = newValue;
            this.$refs.chart.updateOptions(this.series)

        },
        getSum3(newValue) {
            this.series[0].data = newValue;
            this.$refs.chart.updateOptions(this.series)
        },
        formName(newValue){
            let x = newValue;
            // console.log(x)
            for(let i=0; i<Object.keys(x).length;i++ ){
                this.chartOptions.xaxis.categories[i] = "ข้อที่ " + newValue[i]
            }
            // this.chartOptions.xaxis.categories = newValue;

            this.$refs.chart.updateOptions(this.chartOptions)
        }
    }

}   
</script>