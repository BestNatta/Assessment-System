<template>
    <div class="layout-px-spacing">
        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false">
                    <a>
                        <b-button variant="info" @click="exportToPDF">
                            Export
                        </b-button>
                    </a>
                    <a>
                    </a>
                </scrollactive>
            </div>
            <!-- </div> -->
            <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
                <b-col class="d-flex" cols="12">
                    <div class="col-xl-12 col-lg-12 col-md-6 col-sm-3 col-12 d-flex justify-content-center">
                        <div id="element-to-convert">
                            <section class="pdf-content page" size="A4" ref="pdfContent">
                                <header>
                                    <div class="temp-1"></div>
                                    <div class="logo-haeder">
                                    </div>
                                    <div class="square-header">
                                        <div class="content">
                                            <p>317 KAMOLSUKOSOL BUILDING, FLOOR 9, ROOM 9B, SILOM ROAD,</p>
                                            <p>SILOM SUB DISTRICT, BANGKOK 10500</p>
                                            <p>TEL/FAX. 02-635-5144</p>
                                        </div>
                                    </div>
                                </header>

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

                                    <b-row class="text mx-0" v-for="(item, index) in this.items.slice(0, 5)" :key="item.id">
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ index + 1 }}</p>
                                        </b-col>
                                        <b-col cols="6" class="border border-light d-flex align-items-center">
                                            <p class="col-text">{{ item.title }}</p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ item.height }}</p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ item.moderate }}</p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ item.low }}</p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ item.aic }}</p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p>{{ item.total }}</p>
                                        </b-col>
                                    </b-row>

                                    <div class="sub-title pl-3">
                                        <li></li>
                                        <p>การประเมินความเสี่ยง (Risk Assessment)</p>
                                    </div>

                                    <b-row class="text mx-0">
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="6" class="border border-light d-flex align-items-center">
                                            <p class="col-text"></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                    </b-row>

                                    <div class="sub-title pl-3">
                                        <li></li>
                                        <p>การควบคุมการปฏิบัติงาน (Control Activities)</p>
                                    </div>

                                    <b-row class="text mx-0">
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="6" class="border border-light d-flex align-items-center">
                                            <p class="col-text"></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                    </b-row>

                                    <div class="sub-title pl-3">
                                        <li></li>
                                        <p>ระบบสารสนเทศและการสื่อสารข้อมูล (Information and Communication)</p>
                                    </div>

                                    <b-row class="text mx-0">
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="6" class="border border-light d-flex align-items-center">
                                            <p class="col-text"></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                    </b-row>

                                    <div class="sub-title pl-3">
                                        <li></li>
                                        <p>ระบบการติดตาม (Monitoring Activities)</p>
                                    </div>

                                    <b-row class="text mx-0">
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="6" class="border border-light d-flex align-items-center">
                                            <p class="col-text"></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col cols="1"
                                            class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                        <b-col class="border border-light d-flex align-items-center justify-content-center">
                                            <p></p>
                                        </b-col>
                                    </b-row>
                                </section>

                                <footer>
                                    <div class="temp-2"></div>
                                    <div class="square-footer">

                                    </div>
                                </footer>
                            </section>
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/scss/stylePDF.scss';
import html2pdf from 'html2pdf.js';

export default {
    metaInfo: { title: 'PDF Preview' },
    data() {
        return {
            items: [
                { title: 'form1form1form1form1form1form1form1form1form1form1form1form1form1form1form1', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
                { title: 'form2', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
                { title: 'form3', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
                { title: 'form4', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
                { title: 'form5', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
                { title: 'form6', height: 2, moderate: 3, low: 4, aic: 6, total: 15, },
            ],
        };
    },
    mounted() { },
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById('element-to-convert'), {
                margin: 0,
                padding: 0,
                filename: 'Assignment.pdf',
                image: { type: 'png' },
                // pagebreak: { mode: ['avoid-all', 'css'], before: '.page-break' },
            });

        },
    }
};
</script>

