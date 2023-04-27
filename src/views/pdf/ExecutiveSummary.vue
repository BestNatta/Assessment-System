<template>
    <div id="element-to-convert1">
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="(item1, index1) in 3" :key="index1">

            <header-component />

            <section class="con-content">
                <div class="chapter d-flex mt-5">
                    <h4>ส่วนที่ 1 บทสรุปผู้บริหาร</h4>
                    &ensp;<h4 v-if="index1 > 0">(ต่อ)</h4>
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

                <div class="main-title mx-0 pl-2" v-if="index1 === 0">
                    <p>การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</p>
                </div>

                <!-- ข้อที่ 1 (1-5) -->

                <span v-if="index1 === 0">
                    <span v-for="(item, index) in sliceItem1" :key="index">
                        <div class="sub-title pl-3" v-if="index < 1">
                            <li></li>
                            <p>สภาพแวดล้อมการควบคุม (Control Environment)</p>
                        </div>

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 1 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>


                    <!-- ข้อที่ 2 (5-9) -->

                    <span v-for="(item, index) in sliceItem2" :key="index">
                        <div class="sub-title pl-3" v-if="index < 1">
                            <li></li>
                            <p>การประเมินความเสี่ยง (Risk Assessment)</p>
                        </div>

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 6 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>
                </span>

                <!-- ข้อที่ 3 (9-12) -->

                <span v-if="index1 === 1">
                    <span v-for="(item, index) in sliceItem3" :key="index">
                        <div class="sub-title pl-3" v-if="index < 1">
                            <li></li>
                            <p>การควบคุมการปฏิบัติงาน (Control Activities)</p>
                        </div>

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 10 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>

                    <span v-for="(item, index) in sliceItem4" :key="index">
                        <div class="sub-title pl-3" v-if="index < 1">
                            <li></li>
                            <p>ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)</p>
                        </div>

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 13 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>

                    <span v-for="(item, index) in sliceItem5" :key="index">
                        <div class="sub-title pl-3" v-if="index < 1">
                            <li></li>
                            <p>ระบบการติดตาม (Monitoring Activities)</p>
                        </div>

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 16 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>
                </span>

                <!-- ข้อ 3 (17-...) -->

                <div class="main-title mx-0 pl-2" v-if="index1 === 2">
                        <p>การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)</p>
                    </div>

                <span v-if="index1 === 2">
                    <span v-for="(item, index) in sliceItem6" :key="index">

                        <b-row class="text mx-0">
                            <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                                <p>{{ index + 18 }}</p>
                            </b-col>
                            <b-col cols="6" class="border border-light d-flex align-items-center">
                                <p class="col-text">{{ item.title }}</p>
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
                    </span>
                </span>

                <div v-if="index1 === 2">
                    <b-row class="text-total mx-0" v-for="items1 in totalPLC" :key="items1.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)
                            </p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>

                <div v-if="index1 === 2">
                    <b-row class="text-total mx-0" v-for="items1 in totalELC" :key="items1.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>

                <div v-if="index1 === 2">
                    <b-row class="total mx-0" v-for="items1 in total" :key="items1.id">
                        <b-col cols="7" class="border border-light d-flex align-items-center">
                            <p class="col-text">รวม</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.heightValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.moderateValue }}</p>
                        </b-col>
                        <b-col cols="1" class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.lowValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.aicValue }}</p>
                        </b-col>
                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                            <p>{{ items1.totalValue }}</p>
                        </b-col>
                    </b-row>
                </div>
            </section>

            <footer-component class="footer" />
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
            Titles: [
                'สภาพแวดล้อมการควบคุม (Control Environment)',
                'การประเมินความเสี่ยง (Risk Assessment)',
                'การควบคุมการปฏิบัติงาน (Control Activities)',
                'ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)',
                'ระบบการติดตาม (Monitoring Activities)',
                null
            ],
            getInfo: [],
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
            this.getInfo = newVal
            let count = [5, 4, 3, 3, 2, 20];
            this.getForms = this.Titles.map((value, index) => {
                let start = count.slice(0, index).reduce((acc, cur) => acc + cur, 0);
                let slicedData = newVal.slice(start, start + count[index]);
                return {
                    title: value,
                    data: slicedData
                }
            })

            // console.log(this.getForms);

            const allForms = [].concat(...this.getForms.map(group => group.data));

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
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];
        }
    },

    computed: {
        sliceItem1() {
            return this.getInfo.slice(0, 5);
        },
        sliceItem2() {
            return this.getInfo.slice(5, 9);
        },
        sliceItem3() {
            return this.getInfo.slice(9, 12)
        },
        sliceItem4() {
            return this.getInfo.slice(12, 15)
        },
        sliceItem5() {
            return this.getInfo.slice(15, 17)
        },
        sliceItem6() {
            return this.getInfo.slice(17)
        }
    },

    // computed: {
    //     pdfPages() {
    //         const itemsPerPage = 1;
    //         const pages = [];
    //         for (let i = 0; i < this.getForms.length; i += itemsPerPage) {
    //             pages.push(this.getForms.slice(i, i + itemsPerPage));
    //             // console.log(pages);

    //         }
    //         return pages
    //     }
    // },

    methods: {
        countIndex(mainIndex, subIndex) {
            return (mainIndex * 5) + (subIndex + 1)
        }
    }
};
</script>