<template>
    <div>
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="(mainItem, mainIndex) in pdfPages"
            :key="mainIndex">
            <header-component />
            <!-- <header class="mb-5"></header> -->

            <div class="con-detail mt-5">
                <div class=" mb-4">
                    <h3 v-if="mainIndex === 0">สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</h3>
                </div>

                <div class="container px-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 55%">
                                    <p>ข้อสังเกต</p>
                                </th>
                                <th style="width: 15%">
                                    <p>BOARD OF DIRECTORS</p>
                                </th>
                                <th style="width: 15%">
                                    <p>MANAGEMENT</p>
                                </th>
                                <th style="width: 15%">
                                    <p>OPERATION</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody style="background: #F2F2F2" v-for="(subItem, subIndex) in mainItem" :key="subIndex">
                            <tr>
                                <td>{{ mainIndex * 5 + subIndex + 1 }}. {{ subItem.title }}</td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" style="padding: 0 10px" v-for="(item, index) in subItem.subForm" :key="index">
                                            <span v-if="item.selected === 'Board of Directors'">
                                                <div :class="['circle', 
                                                    { 'bg-height': item.heightValue === 1 },
                                                    { 'bg-moderate': item.moderateValue === 1 },
                                                    { 'bg-low': item.lowValue === 1 },
                                                    { 'bg-aic': item.aicValue === 1 },
                                                    ]">
                                                    {{ subNumber(mainIndex * 5 + subIndex, index) }}
                                                </div>
                                            </span>
                                        </b-col>
                                    </b-row>
                                </td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" style="padding: 0 10px" v-for="(item, index) in subItem.subForm" :key="index">
                                            <span v-if="item.selected === 'Management'">
                                                <div :class="['circle', 
                                                    { 'bg-height': item.heightValue === 1 },
                                                    { 'bg-moderate': item.moderateValue === 1 },
                                                    { 'bg-low': item.lowValue === 1 },
                                                    { 'bg-aic': item.aicValue === 1 },
                                                    ]">
                                                    {{ subNumber(mainIndex * 5 + subIndex, index) }}
                                                </div>
                                            </span>
                                        </b-col>
                                    </b-row>
                                </td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" style="padding: 0 10px" v-for="(item, index) in subItem.subForm" :key="index">
                                            <span v-if="item.selected === 'Operator'">
                                                <div :class="['circle', 
                                                    { 'bg-height': item.heightValue === 1 },
                                                    { 'bg-moderate': item.moderateValue === 1 },
                                                    { 'bg-low': item.lowValue === 1 },
                                                    { 'bg-aic': item.aicValue === 1 },
                                                    ]">
                                                    {{ subNumber(mainIndex * 5 + subIndex, index) }}
                                                </div>
                                            </span>
                                        </b-col>
                                    </b-row>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer-component class="footer" />
        </section>
    </div>
</template>

<script>
import headerComponent from './layouts/header.vue'
import footerComponent from './layouts/footer.vue'
import '../../assets/scss/stylePDF.scss';
import '../../assets/scss/content.scss';
export default {
    name: 'Content1',
    components: {
        headerComponent,
        footerComponent
    },

    data() {
        return {
            getForm: [],
            maxHeight: 2
        }
    },
    

    props: ['forms'],

    watch: {
        forms(newVal) {
            newVal.forEach((value) => {
                this.getForm = value.mainForm;
                // console.log(this.getForm);
            })
        }
    },

    computed: {
        pdfPages() {
            const itemsPerPage = 5;
            const pages = [];
            for (let i = 0; i < this.getForm.length; i += itemsPerPage) {
                pages.push(this.getForm.slice(i, i + itemsPerPage));

            }
            return pages
        }
    },

    methods: {
        subNumber(mainIndex, subIndex) {
            return (mainIndex + 1) + '.' + (subIndex + 1);
        }
    }
}
</script>
