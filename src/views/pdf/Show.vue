<template>
    <div>
        <div class="text-center mb-3">
            <b-button class="px-4 py-2" variant="info" @click="exportToPDF">Submit</b-button>
        </div>

        <div class="d-flex justify-content-center">
            <div id="element-to-convert">

                <home-page class="border border-light" :data="companyName" />

                <list-content  />

                <preview-2 class="border border-light" />

                <detail />

                <preview-1 class="border border-light" :mapForm="mapForm" />

            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
import html2pdf from 'html2pdf.js';
import homePage from './homepage.vue';
import ListContent from './Content.vue'
import Preview1 from './Preview1.vue';
import Preview2 from './Preview2.vue';
import Detail from './Detail.vue';
export default {
    name: 'show-preview',
    components: {
        homePage,
        ListContent,
        Preview2,
        Preview1,
        Detail
    },
    data() {
        return {
            getAPI: [],
            getForm: [],
            mapForm: [],
            companyName: '',
            // getMapData: null,
            item: 1
        }
    },

    async mounted() {
        this.getAPI = await api.gettask(this.$route.params.id);
        this.getForm.push(this.getAPI);
        const mapData = this.getForm.map(item => item.mainForm);
        this.getMapData = mapData[0];

        this.countVal();
        this. getCompany();

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
            // console.log(this.mapForm);
        },

        // export PDF

        exportToPDF() {
            const options = {
                margin: 0,
                padding: 0,
                filename: 'Assingment.pdf',
                image: { type: 'png' }
            }

            const getElPage = document.getElementById('element-to-convert');

            html2pdf().set(options).from(getElPage).save();
        },
    }

}
</script>