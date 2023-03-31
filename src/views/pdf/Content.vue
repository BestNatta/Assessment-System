<template>
    <div class="d-flex justify-content-center">
        <div id="element-to-convert1">
            <section class="pdf-content page" size="A4" ref="pdfContent">
                <header-component />

                <div class="container  vh-100 w-75 mt-5">
                    <section class="text-center mb-3 ">
                        <h3>สารบัญ</h3>
                    </section>

                    <b-row class="mb-4">
                        <b-col class="text-left ">
                            <b>หัวข้อ</b>
                        </b-col>
                        <b-col class="text-right ">
                            <b>หน้า</b>
                        </b-col>

                    </b-row>

                    <b-row class="mb-4">
                        <b-col class="text-left ">
                            <p>ส่วนที่ 1 บทสรุปผู้บริหาร</p>
                        </b-col>
                        <b-col class="text-right ">
                            <p>#</p>
                        </b-col>
                    </b-row>

                    <b-row class="mb-4">
                        <b-col cols="12" class="text-left mb-3 ">
                            <p>ส่วนที่ 2 สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</p>
                        </b-col>
                        <b-col cols="auto">
                            <p class="ml-5 pl-2">การควบคุมภายในระดับองค์กร (Entity-Level Controls : ELC)</p>
                        </b-col>
                        <b-col class="text-right ">
                            <p>#</p>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="12" class="text-left mb-3 ">
                            <p>ส่วนที่ 3 สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</p>
                        </b-col>
                        <b-col cols="auto">
                            <p class="ml-5 pl-2">การควบคุมภายในระดับกระบวนปฏิบัติงาน (Process-Level Controls : PLC)</p>
                        </b-col>
                        <b-col class="text-right ">
                            <p>#</p>
                        </b-col>
                    </b-row>
                </div>

                <footer-component class="footer-test" />
            </section>
        </div>
    </div>
</template>

<script>
import headerComponent from './layouts/header.vue'
import footerComponent from './layouts/footer.vue'
import '../../assets/scss/stylePDF.scss';
export default {
    name: 'list-content',
    components: {
        headerComponent,
        footerComponent,
    }
}
</script>