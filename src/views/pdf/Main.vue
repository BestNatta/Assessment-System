<template>
    <div>
        <div class="text-center mb-3">
            <b-button class="px-4 py-2" variant="info" @click="exportToPDF">Submit</b-button>
        </div>

        <div class="d-flex justify-content-center">
            <div id="element-to-convert">

                <!-- หน้าปก -->
                <Home-Page class="border border-light" :data="companyName" />

                <!-- สารบัญ -->
                <TOC />

                <!-- ส่วนที่ 1 -->
                <Chapter-1 class="border border-light" />

                <!-- dashboard -->
                <preview-dashboard :getELC="getELC" :getPLC="getPLC" />

                <!-- บทสรุปผู้บริหาร -->
                <executive-summary class="border border-light" :mapForm="mapForm" />

                <!-- เกณฑ์การจัดระดับความสำคัญ -->
                <SLA />
                
                <!-- ส่วนที่ 2 -->
                <chapter-2 class="border border-light" />

                <!-- สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน -->
                <Content :forms="mapForm"  />
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
import html2pdf from 'html2pdf.js';
import HomePage from './CoverPage.vue';
import TOC from './TOC.vue';
import ExecutiveSummary from './ExecutiveSummary.vue';
import PreviewDashboard from './PreviewDashboard.vue';
import Chapter1 from './Chapter1.vue';
import SLA from './SLA.vue';
import Chapter2 from './Chapter2.vue';
import Content from './Content.vue';
export default {
    name: 'show-preview',
    components: {
        HomePage,
        TOC,
        Chapter1,
        PreviewDashboard,
        ExecutiveSummary,
        SLA,
        Chapter2,
        Content
    },
    data() {
        return {
            getAPI: [],
            getForm: [],
            mapForm: [],
            getELC: [],
            getPLC: [],
            companyName: '',
        }
    },

    async mounted() {
        this.getAPI = await api.gettask(this.$route.params.id);
        this.getForm.push(this.getAPI);
        const mapData = this.getForm.map(item => item.mainForm);
        this.getMapData = mapData[0];

        this.countVal();
        this.getCompany();

    },

    methods: {

        getCompany() {
            this.getForm.forEach(form => this.companyName = form.company_name)
        },

        countVal() {
            this.mapForm = this.getMapData.map(form => {
                return form.subForm.map(subForm => {
                    return {
                        title: form.title,
                        heightValue: subForm.heightValue,
                        moderateValue: subForm.moderateValue,
                        lowValue: subForm.lowValue,
                        aicValue: subForm.aicValue,
                    }
                }).reduce((acc, cur) => {
                    return {
                        title: cur.title,
                        heightValue: acc.heightValue + cur.heightValue,
                        moderateValue: acc.moderateValue + cur.moderateValue,
                        lowValue: acc.lowValue + cur.lowValue,
                        aicValue: acc.aicValue + cur.aicValue,
                        totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                    }
                }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })
            })

            this.getELC = [this.mapForm.slice(0, 17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];

            this.getPLC = [this.mapForm.slice(17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];
        },

        // export PDF
        exportToPDF() {
            const options = {
                margin: 0,
                padding: 0,
                filename: 'Assingment.pdf',
                // image: { type: 'png' }
            }
            const getElPage = document.getElementById('element-to-convert');
            html2pdf().set(options).from(getElPage).save();
        },
    }

}
</script>