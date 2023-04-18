<template>
    <div>
        <section class="pdf-content page" size="A4" ref="pdfContent" v-for="(mainItem, mainIndex) in pdfPages"
            :key="mainIndex">
            <header-component />

            <div class="con-detail mt-5 vh-100">
                <div class=" mb-4">
                    <h3 v-if="mainIndex === 0">สรุปข้อสังเกตจากการสอบทานการควบคุมภายใน</h3>
                </div>

                <div class="container px-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 60%"><p>ข้อสังเกต</p></th>
                                <th style="width: 13%"><p>BOARD OF DIRECTORS</p></th>
                                <th style="width: 13%"><p>MANAGEMENT</p></th>
                                <th style="width: 13%"><p>OPERATION</p></th>
                            </tr>
                        </thead>
                        <tbody v-for="(subItem, subIndex) in mainItem" :key="subIndex">
                            <tr>
                                <td>{{ mainIndex * 5 + subIndex + 1 }}. {{ subItem.title }}</td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" v-for="item in 2" :key="item.id">
                                            <div class="circle"></div>
                                        </b-col>
                                    </b-row>
                                </td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" v-for="item in 2" :key="item.id">
                                            <div class="circle">24.6</div>
                                        </b-col>
                                    </b-row>
                                </td>
                                <td>
                                    <b-row>
                                        <b-col cols="6" v-for="item in 2" :key="item.id">
                                            <div class="circle"></div>
                                        </b-col>
                                    </b-row>
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
import '../../assets/scss/content.scss';
export default {
    name: 'Content',
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
            this.getForm = newVal;
            console.log(this.getForm);
        }
    },

    computed: {
        pdfPages() {
            const itemsPerPage = 5;
            const pages = [];
            for (let i = 0; i < this.getForm.length; i += itemsPerPage) {
                pages.push(this.getForm.slice(i, i + itemsPerPage));
            }
            return pages
        }
    },
}
</script>
