<template>
    <div>
        <b-row class="mt-3">
            <b-col class="text-center">
                <h5>ชื่อบริษัท</h5>
                <div>
                    <h4>{{ getAPI.company_name }}</h4>
                </div>
            </b-col>
        </b-row>

        <!-- print PDF -->
        <!-- <button @click="exportToPDF">click me!</button> -->

        <div id="element-to-convert" class="container-result">
            <div class="container">
                <b-row class="mt-3">
                    <b-col>
                        <h5>บทสรุปผู้บริหาร</h5>
                    </b-col>
                </b-row>
                <b-row class="mt-4 row-title">
                    <b-col cols="1" class="border  text-center">
                        <p class="mt-4">ข้อ</p>
                    </b-col>
                    <b-col cols="6" class="border  text-center">
                        <p class="mt-4">ข้อเสนอแนะ</p>
                    </b-col>
                    <b-col class="border ">
                        <b-row>
                            <b-col class="text-center  border-bottom p-2">
                                <p>ระดับความสำคัญของผลกระทบ</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="py-2 text-center border-right th-height">
                                <p>สุง</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-moderate">
                                <p>ปานกลาง</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-low">
                                <p>ต่ำ</p>
                            </b-col>
                            <b-col class="py-2 text-center border-right th-aic">
                                <p>AIC</p>
                            </b-col>
                            <b-col class="py-2 text-center bg-secondary">
                                <p>รวม</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="border p-2">
                    <b-col>
                        <b class="list-title">การควบคุมภายในระดับองค์กร (Entity-Level Controls : ELC)</b>
                    </b-col>
                </b-row>

                <header>
                    <section>
                        <b-row class="border p-2 sub-topic">
                            <b-col class="d-flex">
                                <b-icon class="vue-icon" v-b-toggle="`collapse`"
                                    icon="arrow-down-right-square-fill"></b-icon>
                                <p>สภาพแวดล้อมการควบคุม (Control Environment)</p>
                            </b-col>
                        </b-row>

                        <b-collapse :id="`collapse`"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(0, 5) : []"
                            :key="mainForms.id">
                            <div>
                                <b-row class="border p-2">
                                    <b-col cols="1" class="text-center">
                                        <p>{{ mainIndex + 1 }}</p>
                                    </b-col>
                                    <b-col cols="6">
                                        <p>{{ mainForms.title }}</p>
                                    </b-col>
                                    <b-col cols="1" class="text-center">
                                        <p>{{ mainForms.heightValue }}</p>
                                    </b-col>
                                    <b-col cols="1" class="text-center">
                                        <p>
                                            {{ mainForms.moderateValue }}
                                        </p>
                                    </b-col>
                                    <b-col cols="1" class="text-center">
                                        <p>
                                            {{ mainForms.lowValue }}
                                        </p>
                                    </b-col>
                                    <b-col cols="1" class="text-center">
                                        <p>
                                            {{ mainForms.aicValue }}
                                        </p>
                                    </b-col>
                                    <b-col cols="1" class="text-center">
                                        <p>
                                            {{ mainForms.totalValue }}
                                        </p>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-collapse>

                        <b-row class="border p-2 sub-topic">
                            <b-col class="d-flex">
                                <b-icon class="vue-icon" v-b-toggle="`collapse-1`"
                                    icon="arrow-down-right-square-fill"></b-icon>
                                <p> การประเมินความเสี่ยง (Risk Assessment)</p>
                            </b-col>
                        </b-row>

                        <b-collapse :id="`collapse-1`"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(5, 9) : []"
                            :key="mainForms.id">
                            <b-row class="border p-2">
                                <b-col cols="1" class="text-center">
                                    <p>{{ mainIndex + 6 }}</p>
                                </b-col>
                                <b-col cols="6">
                                    <p>{{ mainForms.title }}</p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>{{ mainForms.heightValue }}</p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.moderateValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.lowValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.aicValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.totalValue }}
                                    </p>
                                </b-col>
                            </b-row>
                        </b-collapse>

                        <b-row class="border p-2 sub-topic">
                            <b-col class="d-flex">
                                <b-icon class="vue-icon" v-b-toggle="`collapse-2`"
                                    icon="arrow-down-right-square-fill"></b-icon>
                                <p> การควบคุมการปฏิบัติงาน (Control Activities) </p>
                            </b-col>
                        </b-row>

                        <b-collapse :id="`collapse-2`"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(9, 12) : []"
                            :key="mainForms.id">
                            <b-row class="border p-2">
                                <b-col cols="1" class="text-center">
                                    <p>{{ mainIndex + 10 }}</p>
                                </b-col>
                                <b-col cols="6">
                                    <p>{{ mainForms.title }}</p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.heightValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.moderateValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.lowValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.aicValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.totalValue }}
                                    </p>
                                </b-col>
                            </b-row>
                        </b-collapse>

                        <b-row class="border p-2 sub-topic">
                            <b-col class="d-flex">
                                <b-icon class="vue-icon" v-b-toggle="`collapse-3`"
                                    icon="arrow-down-right-square-fill"></b-icon>
                                <p> ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication) </p>
                            </b-col>
                        </b-row>

                        <b-collapse :id="`collapse-3`"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(5, 9) : []"
                            :key="mainForms.id">
                            <b-row class="border p-2">
                                <b-col cols="1" class="text-center">
                                    <p>{{ mainIndex + 13 }}</p>
                                </b-col>
                                <b-col cols="6">
                                    <p>{{ mainForms.title }}</p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.heightValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.moderateValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.lowValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.aicValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.totalValue }}
                                    </p>
                                </b-col>
                            </b-row>
                        </b-collapse>

                        <b-row class="border p-2 sub-topic">
                            <b-col class="d-flex">
                                <b-icon class="vue-icon" v-b-toggle="`collapse-4`"
                                    icon="arrow-down-right-square-fill"></b-icon>
                                <p> ระบบการติดตาม (Monitoring Activities) </p>
                            </b-col>
                        </b-row>

                        <b-collapse :id="`collapse-4`"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(15, 17) : []"
                            :key="mainForms.id">
                            <b-row class="border p-2">
                                <b-col cols="1" class="text-center">
                                    <p>{{ mainIndex + 16 }}</p>
                                </b-col>
                                <b-col cols="6">
                                    <p>{{ mainForms.title }}</p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.heightValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.moderateValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.lowValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.aicValue }}
                                    </p>
                                </b-col>
                                <b-col cols="1" class="text-center">
                                    <p>
                                        {{ mainForms.totalValue }}
                                    </p>
                                </b-col>
                            </b-row>
                        </b-collapse>

                        <b-row class="border p-2">
                            <b-col>
                                <b class="list-title">การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls: PLC)</b>
                            </b-col>
                        </b-row>

                        <b-row class="border p-2"
                            v-for="(mainForms, mainIndex) in Array.isArray(this.values) ? this.values.slice(17) : []"
                            :key="mainForms.id">
                            <b-col cols="1" class="text-center">
                                <p>{{ mainIndex + 18 }}</p>
                            </b-col>
                            <b-col cols="6">
                                <p>{{ mainForms.title }}</p>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <p>
                                    {{ mainForms.heightValue }}
                                </p>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <p>
                                    {{ mainForms.moderateValue }}
                                </p>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <p>
                                    {{ mainForms.lowValue }}
                                </p>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <p>
                                    {{ mainForms.aicValue }}
                                </p>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <p>
                                    {{ mainForms.totalValue }}
                                </p>
                            </b-col>
                        </b-row>

                        <!-- รวม -->
                        <b-row class="border p-2 sub-topic" v-for="mainForms in this.getPLCValue" :key="mainForms.id">
                            <b-col>
                                <b class="list-title">รวม การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls:
                                    PLC)</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.heightValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.moderateValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.lowValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.aicValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.totalValue }}</b>
                            </b-col>
                        </b-row>
                        <b-row class="border p-2 sub-topic" v-for="mainForms in this.getELCValue" :key="mainForms.id">
                            <b-col>
                                <b class="list-title">รวม การควบคุมภายในระดับองค์กร (Entity-Level Controls: ELC)</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.heightValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.moderateValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.lowValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.aicValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.totalValue }}</b>
                            </b-col>
                        </b-row>
                        <b-row class="border p-2 row-footer" v-for="mainForms in this.getTotal" :key="mainForms.id">
                            <b-col cols="7">
                                <b class="list-title">รวม</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.heightValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.moderateValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.lowValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.aicValue }}</b>
                            </b-col>
                            <b-col cols="1" class="text-center">
                                <b>{{ mainForms.totalValue }}</b>
                            </b-col>
                        </b-row>
                    </section>
                </header>

                <div class="text-center mt-3">
                    <!-- <button class="btn btn-info">หฟกฟหก -->
                        <router-link :to="{name: 'ShowPreview', param: {id: tasks._id}}">Export PDF</router-link>
                    <!-- </button> -->
                </div>
            </div>
        </div>

        <b-row class="d-flex justify-content-center mt-3">
            <b-col class="text-right px-0" cols="7">
                <!-- export Excel -->
                <!-- <downloadexcel :data="sum" :fields="columns" worksheet="My Worksheet" name="Report.xls">
                    <b-button variant="primary" class="py-2 px-4">
                        <b-icon class="mr-2" icon="file-arrow-down-fill" aria-hidden="true"
                            animation="cylon-vertical"></b-icon>Print PDF
                    </b-button>
                </downloadexcel> -->
            </b-col>
            <!-- <b-col><button @click="this.export()">Print PDF</button></b-col> -->
        </b-row>

        <!-- <resultCircle /> -->
    </div>
</template>

<script>
// import resultCircle from '../components/ResultCircle.vue'
// import pdfMake from 'pdfmake'
import { api } from '../helpers/Helpers';
// import html2pdf from "html2pdf.js";
// import downloadexcel from "vue-json-excel";

export default {
    name: "Show",
    components: {
        // resultCircle,
        // downloadexcel
    },

    data() {
        return {
            getAPI: [],
            tasks: [],
            values: [],

            getPLCValue: [],
            getELCValue: [],
            getTotal: [],

            // columns fields excel
            columns:
            {
                "รายละเอียด": "title",
                "สูง": "height",
                "ปานกลาง": "moderate",
                "ต่ำ": "low",
                "Aic": "aic",
                "รวม": "total",
            }
        }
    },

    created() {
    },

    async mounted() {
        this.getAPI = await api.gettask(this.$route.params.id);
        this.tasks = this.getAPI.mainForm;
        // console.log(this.getAPI);
        // this.export();
        this.countVal();
    },

    methods: {

        countVal() {
            this.values = this.tasks.map(form => {
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
                    };
                }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 });
            })

            this.getELCValue = [this.values.slice(0, 17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })]; console.log(this.getELCValue)

            this.getPLCValue = [this.values.slice(17).reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })];

            this.getTotal = [this.values.reduce((acc, cur) => {
                return {
                    heightValue: acc.heightValue + cur.heightValue,
                    moderateValue: acc.moderateValue + cur.moderateValue,
                    lowValue: acc.lowValue + cur.lowValue,
                    aicValue: acc.aicValue + cur.aicValue,
                    totalValue: acc.totalValue + cur.heightValue + cur.moderateValue + cur.lowValue + cur.aicValue
                }
            }, { heightValue: 0, moderateValue: 0, lowValue: 0, aicValue: 0, totalValue: 0 })]
        }

        // Export PDF

        // export() {
        //     const docDefinition = {
        //         content: [
        //             'English',
        //             'ไทย'
        //         ]
        //     }
        //     pdfMake.fonts = {
        //         // download default Roboto font from cdnjs.com
        //         Roboto: {
        //             normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        //             bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        //             italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        //             bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        //         }
        //     }
        //     pdfMake.createPdf(docDefinition).open({}, window)
        // }

        // exportToPDF() {
        //     html2pdf(document.getElementById("element-to-convert"), {
        //         margin: 1,
        //         filename: "i-was-html.pdf",
        //     });
        // },
    }
}
</script>