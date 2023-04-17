<template>
    <div class="d-flex justify-content-center">
        <section class="pdf-content page" size="A4" ref="pdfContent">
            <header-component />

            <div class="con-detail mt-5 vh-100">
                <div class=" mb-4">
                    <h3>ส่วนที่ 1 บทสรุปผู้บริหาร</h3>
                </div>

                <div>
                    <p><u>เกณฑ์การจัดระดับความสำคัญ</u></p>
                </div>
                <br>

                <div class="container px-0">
                    <table class="table table-ed border">
                        <thead class="head-table">
                            <tr>
                                <th>ระดับความสำคัญ</th>
                                <th>คำอธิบาย</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="detail-height text-center">สูง</td>
                                <td>ประเด็นที่การควบคุมภายในต้องได้รับการแก้ไขอย่างเร่งด่วน เนื่องจากเป็นการ
                                    ควบคุมที่มีความสำคัญสูงตามแบบประเมินความเพียงพอของระบบการควบคุมภายใน
                                    แต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่ยังไม่เพียงพอในประเด็นที่สำคัญ</td>
                            </tr>
                            <tr>
                                <td class="detail-moderate text-center">ปานกลาง</td>
                                <td>ประเด็นที่การควบคุมภายในควรได้รับการแก้ไข เนื่องจากเป็นการควบคุมที่สำคัญตาม
                                    แนวทางการควบคุมภายในที่ดีแต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่
                                    ยังไม่เพียงพอ</td>
                            </tr>
                            <tr>
                                <td class="detail-low text-center">ต่ำ</td>
                                <td>ประเด็นที่การควบคุมภายในมีความเพียงพอตามหลักการควบคุมภายใน ทำให้บริษัท
                                    สามารถดำเนินการต่อไปตามปกติแต่ควรต้องได้รับการระวังในกรณีที่การดำเนินงาน
                                    ของบริษัทมีการเปลี่ยนแปลงและทำให้ระดับความเสี่ยงของประเด็นนี้สูงขึ้น ผู้รายงาน
                                    และติดตามประเด็นนี้ควรเป็นเจ้าของกระบวนการผู้ตรวจสอบภายในหรือผู้บริหารที่
                                    เกี่ยวข้อง</td>
                            </tr>
                            <tr>
                                <td class="detail-aic text-center">AIC</td>
                                <td>ระบบการควบคุมภายในที่มีอยู่ในปัจจุบันเพียงพอและมีประสิทธิผล
                                    (Appropriate Internal Control)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <footer-component class="footer-test" />
        </section>
    </div>
</template>

<script>
import headerComponent from './layouts/header.vue'
import footerComponent from './layouts/footer.vue'
import '../../assets/scss/stylePDF.scss';
export default {
    name: 'detail',
    components: {
        headerComponent,
        footerComponent
    },
}
</script>