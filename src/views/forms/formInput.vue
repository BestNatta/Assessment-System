<template>
    <div>
        <form action="#" @submit.prevent="onSubmit">
            <div class="container w-50">
                <div class="ui labeled input fluid">
                    <div class="ui label">
                        <i class="calendar plus icon"></i>ชื่อบริษัท
                    </div>
                    <input type="text" placeholder="Enter task..." v-model="forms.company_name" />
                </div>
                <div class="ui form">
                    <div class="ui label">
                        <b-icon icon="book-half" scale="1"></b-icon> ส่วนที่ 4
                    </div>
                    <input type="text" placeholder="Enter Details" v-model="forms.chapter1" />
                    <textarea rows="4" v-model="forms.description1"></textarea>
                </div>
                <div class="ui form mt-2">
                    <div class="ui label">
                        <b-icon icon="book-half" scale="1"></b-icon> ส่วนที่ 5
                    </div>
                    <input type="text" placeholder="Enter Details" v-model="forms.chapter2" />
                    <textarea rows="4" v-model="forms.description2"></textarea>
                </div>
                <br>
                <hr />
            </div>

            <form-report1 ref="formData1" :forms="this.forms" />

            <b-row>
                <b-col class="d-flex justify-content-center">
                    <button class="positive ui button px-5">บันทึก</button>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
import formReport1 from './form1.vue'
// import formReport2 from './form2.vue'
// import formReport3 from './form3.vue'
// import formReport4 from './form4.vue'
// import formReport5 from './form5.vue'
// import formReport6 from './form6.vue'
// import formReport7 from './form7.vue'
// import formReport8 from './form8.vue'
// import formReport9 from './form9.vue'
// import formReport10 from './form10.vue'
// import formReport11 from './form11.vue'
// import formReport12 from './form12.vue'
// import formReport13 from './form13.vue'
// import formReport14 from './form14.vue'
// import formReport15 from './form15.vue'
// import formReport16 from './form16.vue'
// import formReport17 from './form17.vue'
// import formReport18 from './form18.vue'
// import formReport19 from './form19.vue'
// import formReport20 from './form20.vue'
// import formReport21 from './form21.vue'
// import formReport22 from './form22.vue'
// import formReport23 from './form23.vue'
// import formReport24 from './form24.vue'
// import formReport25 from './form25.vue'

export default {
    name: 'form-input',
    components: {
        "form-report1": formReport1,
        // "form-report2": formReport2,
        // "form-report3": formReport3,
        // "form-report4": formReport4,
        // "form-report5": formReport5,
        // "form-report6": formReport6,
        // "form-report7": formReport7,
        // "form-report8": formReport8,
        // "form-report9": formReport9,
        // "form-report10": formReport10,
        // "form-report11": formReport11,
        // "form-report12": formReport12,
        // "form-report13": formReport13,
        // "form-report14": formReport14,
        // "form-report15": formReport15,
        // "form-report16": formReport16,
        // "form-report17": formReport17,
        // "form-report18": formReport18,
        // "form-report19": formReport19,
        // "form-report20": formReport20,
        // "form-report21": formReport21,
        // "form-report22": formReport22,
        // "form-report23": formReport23,
        // "form-report24": formReport24,
        // "form-report25": formReport25,
    },
    data() {
        return {
            // ตัวแปรเก็บ value จาก components
            getForms: '',
            getForm1: '',
            getForm2: '',
            getForm3: '',
            getForm4: '',
            getForm5: '',
            getForm6: '',
            getForm7: '',
            getForm8: '',
            getForm9: '',
            combineValue: '',
        }
    },
    props: {
        forms: {
            type: Object,
            required: false,
            default: () => {
                return {
                    company_name: '',
                    chapter1: '',
                    description1: '',
                    chapter2: '',
                    description2: '',
                }
            },
        },
    },
    methods: {
            onSubmit() {
                this.getForms = this.forms
                this.getData1 = this.$refs.formData1.forms
                // this.getData2 = this.$refs.formData2.forms
                // this.getData3 = this.$refs.formData3.forms
                // this.getData4 = this.$refs.formData4.forms
                // this.getData5 = this.$refs.formData5.forms
                // this.getData6 = this.$refs.formData6.forms
                // this.getData7 = this.$refs.formData7.forms
                // this.getData8 = this.$refs.formData8.forms
                // this.getData9 = this.$refs.formData9.forms

                // เอาตัวแปรที่เก็บ value ใน component อื่นเก็บตัวตัวแปร combineValue

                this.combineValue = {
                    ...this.getForms, ...this.getData1,
                }
                this.$emit('formInput', this.combineValue)
            }
        },
}
</script>