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
            <form-report1 ref="formData1" />
            <form-report2 ref="formData2" />
            <form-report3 ref="formData3" />
            <form-report4 ref="formData4" />
            <form-report5 ref="formData5" />
            <form-report6 ref="formData6" />
            <form-report7 ref="formData7" />
            <form-report8 ref="formData8" />
            <form-report9 ref="formData9" />
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
import formReport2 from './form2.vue'
import formReport3 from './form3.vue'
import formReport4 from './form4.vue'
import formReport5 from './form5.vue'
import formReport6 from './form6.vue'
import formReport7 from './form7.vue'
import formReport8 from './form8.vue'
import formReport9 from './form9.vue'

export default {
    name: 'form-input',
    components: {
        "form-report1": formReport1,
        "form-report2": formReport2,
        "form-report3": formReport3,
        "form-report4": formReport4,
        "form-report5": formReport5,
        "form-report6": formReport6,
        "form-report7": formReport7,
        "form-report8": formReport8,
        "form-report9": formReport9,
    },
    data() {
        return {
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
            combineValue: ''
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
            }
        }
    },
    methods: {
        onSubmit() {
            this.getForms = this.forms
            this.getData1 = this.$refs.formData1.forms
            this.getData2 = this.$refs.formData2.forms
            this.getData3 = this.$refs.formData3.forms
            this.getData4 = this.$refs.formData4.forms
            this.getData5 = this.$refs.formData5.forms
            this.getData6 = this.$refs.formData6.forms
            this.getData7 = this.$refs.formData7.forms
            this.getData8 = this.$refs.formData8.forms
            this.getData9 = this.$refs.formData9.forms
            this.combineValue = {
                ...this.getForms, ...this.getData1,
                ...this.getData2, ...this.getData3,
                ...this.getData4, ...this.getData5,
                ...this.getData6, ...this.getData7,
                ...this.getData8, ...this.getData9,
            }
            this.$emit('formInput',this.combineValue)
        }
    }
}
</script>