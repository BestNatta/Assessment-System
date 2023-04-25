<template>
    <div id="element-to-convert1">
        <section class="pdf-content page" size="A4" ref="pdfContent">
            <header-component />
            <div class="container-dashboard">
                <div class="dashboaed-1">
                     <dashboard-1 :sendELC="getELC" />
                </div>
                <div class="dashboaed-2">
                    <dashboard-2 :sendPLC="getPLC" />
                </div>
            </div>

            <footer-component class="footer" />
        </section>
    </div>
</template>

<script>
import '../../assets/scss/dashboardPDF.scss';
import headerComponent from './layouts/header.vue';
import footerComponent from './layouts/footer.vue';
import dashboard1 from './Dashboard1.vue';
import dashboard2 from './Dashboard2.vue';

export default {
    name: 'preview-1',
    components: {
        headerComponent,
        footerComponent,
        dashboard1,
        dashboard2,
    },
    metaInfo: { title: 'PDF Preview' },
    data() {
        return {
            getPropELC: [],
            getPropPLC: [],

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
            }
        };
    },

    mounted() {

    },

    props: ['getELC', 'getPLC'],

};
</script>

<style scoped></style>