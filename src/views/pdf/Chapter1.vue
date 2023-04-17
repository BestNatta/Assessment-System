<template>
    <div>
        <section class="pdf-content page" size="A4" ref="pdfContent">
            <div class="temp-1"></div>
            <div class="con-temp">
                <div class="temp-left"></div>
                <img src="../../assets/images/d1-01.png" alt="">
            </div>

            <div class="content-preview2">
                <h1 class="mb-4">ส่วนที่ 1</h1>
                <h1>บทสรุปผู้บริหาร</h1>
            </div>
        </section>
    </div>
</template>

<script>
import '../../assets/scss/stylePDF.scss';
import html2pdf from 'html2pdf.js';
export default {
    name: 'preview-2',
    data() {
        return {

        }
    },

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
}
</script>
