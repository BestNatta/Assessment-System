<template>
    <div id="element-to-convert1">
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="item in pdfPages" :key="item.id">
            <header-component />
            
            <section class="con-content">
                <div class="chapter">
                    <h4>ส่วนที่ 1 บทสรุปผู้บริหาร</h4>
                </div>

                <b-row class="con-table mx-0">
                    <b-col cols="1" class="frame d-flex justify-content-center align-items-center">
                        <p>ข้อที่</p>
                    </b-col>
                    <b-col cols="6" class="frame d-flex justify-content-center align-items-center">
                        <p>ข้อสังเกต</p>
                    </b-col>
                    <b-col class="priority text-center">
                        <p>ระดับความสำคัญของผลกระทบ</p>
                        <b-row class="header-text">
                            <b-col cols="" class="frame placement level-height">
                                <p>สุง</p>
                            </b-col>
                            <b-col cols="" class="frame placement level-moderate">
                                <p>ปานกลาง</p>
                            </b-col>
                            <b-col cols="" class="frame placement level-low">
                                <p>ต่ำ</p>
                            </b-col>
                            <b-col cols="" class="frame placement level-aic">
                                <p>AIC</p>
                            </b-col>
                            <b-col cols="" class="frame placement level-total">
                                <p>รวม</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <div class="main-title mx-0 pl-2">
                    <p>การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</p>
                </div>

                <div class="sub-title pl-3">
                    <li></li>
                    <p>สภาพแวดล้อมการควบคุม (Control Environment)</p>
                </div>

                <b-row class="text mx-0" v-for="(items, i) in Array.isArray(item) ? item.slice(0, 5) : []" :key="items.id">
                    <!-- <b-row class="text mx-0" > -->
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ i + 1 }}</p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text">{{ items.title }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.heightValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.moderateValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.aicValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.lowValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.totalValue }}</p>
                    </b-col>
                </b-row>

                <div class="sub-title pl-3">
                    <li></li>
                    <p>การประเมินความเสี่ยง (Risk Assessment)</p>
                </div>

                <b-row class="text mx-0" v-for="(items, i) in Array.isArray(item) ? item.slice(5, 9) : []" :key="items.id">
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ i + 6 }}</p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text">{{ items.title }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.heightValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.moderateValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.lowValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.aicValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ items.totalValue }}</p>
                    </b-col>
                </b-row>


                <div class="html2pdf__page-break"></div>

                <div class="sub-title pl-3">
                    <li></li>
                    <p>การควบคุมการปฏิบัติงาน (Control Activities)</p>
                </div>

                <b-row class="text mx-0" v-for="(items, i) in Array.isArray(item) ? item.slice(9,12) : []" :key="items.id">
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ i + 10 }}</p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text">{{ items.title }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                </b-row>

                <!-- <div class="sub-title pl-3">
                    <li></li>
                    <p>ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)</p>
                </div>

                <b-row class="text mx-0">
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text"></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                </b-row> -->

                <!-- <div class="sub-title pl-3">
                    <li></li>
                    <p>ระบบการติดตาม (Monitoring Activities)</p>
                </div>

                <b-row class="text mx-0">
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text"></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p></p>
                    </b-col>
                </b-row> -->

            </section>

            <footer-component class="footer-test" />
        </section>
    </div>
</template>

<script>
import '../../assets/scss/stylePDF.scss';
// import html2pdf from 'html2pdf.js';
import headerComponent from './layouts/header.vue';
import footerComponent from './layouts/footer.vue';

export default {
    name: 'preview-1',
    components: {
        headerComponent,
        footerComponent
    },
    metaInfo: { title: 'PDF Preview' },
    data() {
        return {
            getData: [],
            // texts: [
            //     'สภาพแวดล้อมการควบคุม (Control Environment)',
            //     'การประเมินความเสี่ยง (Risk Assessment)',
            //     'การควบคุมการปฏิบัติงาน (Control Activities)',
            //     'ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)',
            //     'ระบบการติดตาม (Monitoring Activities)'
            // ]
        };
    },

    mounted() {
        this.getData = this.mapForm;
    },

    computed: {
        pdfPages() {
            const itemsPerPage = 9;
            const pages = [];
            for (let i = 0; i < this.getData.length; i += itemsPerPage) {
                pages.push(this.getData.slice(i, i + itemsPerPage));
            }
            return pages
        }
    },

    watch: {
        mapForm(newVal) {
            this.getData = newVal
        }
    },

    props: ['mapForm'],

    methods: {
        // getText(index) {
        //     return this.texts[index % this.texts.length]
        // }
    },
};
</script>

<style scoped>

</style>