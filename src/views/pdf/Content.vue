<template>
    <div class="d-flex justify-content-center">
        <section class="pdf-content page" size="A4" ref="pdfContent">
            <header-component />

            <div class="con-detail mt-5 vh-100">
                <div class=" mb-4">
                    <h3>สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</h3>
                </div>

                <div class="container px-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 70%">ข้อสังเกต</th>
                                <th style="width: auto">BOARD OF DIRECTORS</th>
                                <th style="width: auto">MANAGEMENT</th>
                                <th style="width: auto">OPERATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย
                                    ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ
                                    เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</td>
                                <td class="d-flex">
                                    <div class="circle m-1 text-white">1.1</div>
                                    <div class="circle m-1 text-white">1.1</div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <div class="line"></div>
                            <tr>
                                <td>1. องค์กรจัดให้มีกิจกรรมการควบคุมผ่านทางนโยบาย
                                    ซึ่งได้กำหนดสิ่งที่คาดหวังและขั้นตอนการปฏิบัติ
                                    เพื่อให้นโยบายที่กำหนดไว้นั้นสามารถนำไปสู่การปฏิบัติได้</td>
                                <td></td>
                                <td></td>
                                <td class="d-flex">
                                    <div class="circle m-1 text-white">1.1</div>
                                    <div class="circle m-1 text-white">1.1</div>
                                </td>
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
    name: 'content',
    components: {
        headerComponent,
        footerComponent
    },
}
</script>

<style scoped>
thead {
    background: #226AA3;
    color: #fff;

}

tbody {
    background: #F2F2F2;
}

.line {
    width: 100%;
    height: 20px;
    background: #667680;
}

.circle {
    background: #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>