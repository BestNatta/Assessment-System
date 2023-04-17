<template>
    <div>
        <div id="element-to-convert">
            <section class="pdf-content page " size="A4">
                <header>
                    <div class="logo-haeder"></div>
                    <div class="square-header-homepage">
                        <img src="../../assets/images/d9-03.png" alt="">
                    </div>
                </header>

                <div class="con-content-homepage">
                    <div class="content1">
                        <h1>รายงานผลการให้คำปรึกษา</h1>
                        <h2>{{ getData }}</h2>
                    </div>
                    <div class="content2">
                        <h4 class="text1">รายงานผลการตรวจสอบการปฏิบัติงานตามวิธีการ</h4>
                        <h4 class="text2">ที่ตกลงร่วมกับ</h4>
                        <h4 class="text3">{{ getData }}</h4>
                    </div>
                </div>

                <footer class="footer-homepage">
                    <img src="../../assets/images/d2-02.png" alt="">
                </footer>
            </section>

        </div>
    </div>
</template>

<script>
import '../../assets/scss/stylePDF.scss';
export default {
    name: 'home-page',
    data() {
        return {
            getData: ''
        }
    },

    props: ['data'],

    watch: {
        data(newVal) {
            this.getData = newVal
        }
    }
}
</script>
