<template>
    <div>
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="(mainItem, mainIndex) in pdfPages" :key="mainIndex">
            <header-component />
            
            <div class="con-detail vh-100 mt-5">
                <div class=" mb-4" v-if="mainIndex === 0">
                    <h3 class="mb-4">ส่วนที่ 2 สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน (ต่อ)</h3>
                    <p>การประเมินการควบคุมภายในมุ่งเน้นองค์ประกอบหลักของระบบการควบคุมภายในของบริษัทตามกรอบการควบคุม
                    ภายในของ COSO ซึ่งมีองค์ประกอบหลักต่างๆ ดังนี้</p>
                </div>

                <div class="container px-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th><p>ข้อ</p></th>
                                <th style="width: 300px;"><p>ข้อเสนอแนะ</p></th>
                                <th><p>ระดับความสำคัญ</p></th>
                                <th style="width: 50px;"><p>กลุ่ม</p></th>
                                <th><p>การดำเนินการในปัจจุบัน</p></th>
                            </tr>
                        </thead>
                        <tbody v-for="(subItem, subIndex) in mainItem" :key="subIndex">
                            <tr>
                                <td colspan="5" style="background-color: #DBEFF5">
                                    {{ mainIndex * 1 + subIndex + 1 }}. {{ subItem.title }}
                                </td>
                            </tr>
                            <tr v-for="(subTitle, titleIndex) in subItem.subForm" :key="titleIndex">
                                <!-- <td>{{ mainIndex * 1 + subIndex * titleIndex + 1 }}</td> -->
                                <td class="text-center">{{ subNumber(mainIndex, subIndex++) }}</td>
                                <td>{{ subTitle.title }}</td>
                                <td :class="['text-center',
                                    {'bg-height': subTitle.heightValue === 1},
                                    {'bg-moderate': subTitle.moderateValue === 1},
                                    {'bg-low': subTitle.lowValue === 1},
                                    {'bg-aic': subTitle.aicValue === 1}
                                    ]">

                                    <span v-if="subTitle.heightValue === 1">
                                        <p>สูง</p>
                                    </span>
                                    <span v-if="subTitle.moderateValue === 1">
                                        <p>ปานกลาง</p>
                                    </span>
                                    <span v-if="subTitle.lowValue === 1">
                                        <p>ต่ำ</p>
                                    </span>
                                    <span v-if="subTitle.aicValue === 1">
                                        <p>AIC</p>
                                    </span>

                                </td>
                                <td class="text-center">{{ subTitle.selected }}</td>
                                <td>{{ subTitle.operation }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer-component class="footer" />
        </section>
    </div>
</template>

<script>
import headerComponent from './layouts/header.vue'
import footerComponent from './layouts/footer.vue'
import '../../assets/scss/stylePDF.scss';
import '../../assets/scss/content.scss';

export default {
    name: 'Content2',
    components: {
        headerComponent,
        footerComponent
    },

    data() {
        return {
            getForm: []
        }
    },

    props: ['forms'],

    watch: {
        forms(newVal) {
            newVal.forEach((value) => {
                this.getForm = value.mainForm
            })
        }
    },

    computed: {
        pdfPages() {
            const itemsPerPage = 1;
            const pages = [];
            for (let i = 0; i < this.getForm.length; i += itemsPerPage) {
                pages.push(this.getForm.slice(i, i + itemsPerPage));
            }
            return pages
        }
    },

    methods: {
        subNumber(mainIndex, subIndex) {
            return (mainIndex + 1) + '.' + (subIndex + 1);
        },
    }
}
</script>
