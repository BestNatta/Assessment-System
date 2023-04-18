<template>
    <div id="element-to-convert1">
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="(item, pdfPageIndex) in pdfPages" :key="pdfPageIndex">
            <header-component />

            <section class="con-content" v-for="(mainTitle, mainIndex) in item" :key="mainIndex">
                <div class="chapter d-flex mt-4">
                    <h4>ส่วนที่ 1 บทสรุปผู้บริหาร</h4>
                    &ensp;<h4 v-if="pdfPageIndex > mainIndex">(ต่อ)</h4>
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
                <div class="main-title mx-0 pl-2" v-if="pdfPageIndex === mainIndex">
                    <p>การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</p>
                </div>

                <div class="main-title mx-0 pl-2" v-if="pdfPageIndex === pdfPages.length - 1">
                    <p>การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)</p>
                </div>

                <div class="sub-title pl-3" v-if="pdfPageIndex >= mainIndex && pdfPageIndex < 5">
                    <li></li>
                    <p>{{ mainTitle.title }}</p>
                </div>

                <b-row class="text mx-0" v-for="(subTitle, subIndex) in mainTitle.data" :key="subIndex">
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ pdfPageIndex * 5 + subIndex + 1 }}</p>
                    </b-col>
                    <b-col cols="6" class="border border-light d-flex align-items-center">
                        <p class="col-text">{{ subTitle.title }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ subTitle.heightValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ subTitle.moderateValue }}</p>
                    </b-col>
                    <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ subTitle.lowValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ subTitle.aicValue }}</p>
                    </b-col>
                    <b-col class="border border-light d-flex align-items-center justify-content-center">
                        <p>{{ subTitle.totalValue }}</p>
                    </b-col>
                </b-row>

                <div v-if="pdfPageIndex === pdfPages.length - 1">
                    <b-row class="text-total mx-0" v-for="item in totalPLC" :key="item.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>

                <div v-if="pdfPageIndex === pdfPages.length - 1">
                    <b-row class="text-total mx-0" v-for="item in totalELC" :key="item.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>

                <div v-if="pdfPageIndex === pdfPages.length - 1">
                    <b-row class="total mx-0" v-for="item in total" :key="item.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ item.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>

            </section>

            <footer-component class="footer-test" />
        </section>
    </div>
</template>

<script>
import '../../assets/scss/stylePDF.scss';
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
            Titles: [
                'สภาพแวดล้อมการควบคุม (Control Environment)',
                'การประเมินความเสี่ยง (Risk Assessment)',
                'การควบคุมการปฏิบัติงาน (Control Activities)',
                'ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)',
                'ระบบการติดตาม (Monitoring Activities)',
                null
            ],

            getForms: [],
            getTitle: [],

            totalPLC: null,
            totalELC: null,
            total: null
        };
    },

    mounted() {

    },

    props: ['mapForm'],

    watch: {
        mapForm(newVal) {
            this.getData = newVal;
            const count = [5, 4, 3, 3, 2, 20];
            let startIndex = 0;
            this.getForms = this.Titles.map((title, index) => {
                const endIndex = startIndex + count[index];
                const slicedData = this.getData.slice(startIndex, endIndex);
                startIndex = endIndex;
                const totalValue = slicedData.reduce((acc, cur) => acc + cur.totalValue, 0);
                return { title, data: slicedData, totalValue };
            });

            // this.totalPLC = this.getForms.slice(0, 5).map((value) => value.totalValue).reduce((acc, cur) => acc + cur, 0);

            const allForms = [].concat(...this.getForms.map(group => group.data));
            // console.log(allForms);
            // const filterPLC = allForms.slice(0, 17);
            // console.log(filterPLC);

            this.totalPLC = [allForms.slice(0, 17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];

            this.totalELC = [allForms.slice(17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];

            this.total = [allForms.reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];
        }
    },

    computed: {
        pdfPages() {
            const itemsPerPage = 1;
            const pages = [];
            for (let i = 0; i < this.getForms.length; i += itemsPerPage) {
                pages.push(this.getForms.slice(i, i + itemsPerPage));
            }
            return pages
        }
    },
};
</script>