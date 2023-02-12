<template>
    <div v-if="forms">
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

            <form-report1 ref="formData1" :forms="forms" />
            <form-report2 ref="formData2" :forms="forms" />
            <form-report3 ref="formData3" :forms="forms" />
            <form-report4 ref="formData4" :forms="forms" />
            <form-report5 ref="formData5" :forms="forms" />
            <form-report6 ref="formData6" :forms="forms" />
            <form-report7 ref="formData7" :forms="forms" />
            <form-report8 ref="formData8" :forms="forms" />
            <form-report9 ref="formData9" :forms="forms" />
            <form-report10 ref="formData10" :forms="forms" />
            <form-report11 ref="formData11" :forms="forms" />
            <form-report12 ref="formData12" :forms="forms" />
            <form-report13 ref="formData13" :forms="forms" />
            <form-report14 ref="formData14" :forms="forms" />
            <form-report15 ref="formData15" :forms="forms" />
            <form-report16 ref="formData16" :forms="forms" />
            <form-report17 ref="formData17" :forms="forms" />
            <form-report18 ref="formData18" :forms="forms" />
            <form-report19 ref="formData19" :forms="forms" />
            <form-report20 ref="formData20" :forms="forms" />
            <form-report21 ref="formData21" :forms="forms" />
            <form-report22 ref="formData22" :forms="forms" />
            <form-report23 ref="formData23" :forms="forms" />
            <form-report24 ref="formData24" :forms="forms" />
            <form-report25 ref="formData25" :forms="forms" />

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
import formReport10 from './form10.vue'
import formReport11 from './form11.vue'
import formReport12 from './form12.vue'
import formReport13 from './form13.vue'
import formReport14 from './form14.vue'
import formReport15 from './form15.vue'
import formReport16 from './form16.vue'
import formReport17 from './form17.vue'
import formReport18 from './form18.vue'
import formReport19 from './form19.vue'
import formReport20 from './form20.vue'
import formReport21 from './form21.vue'
import formReport22 from './form22.vue'
import formReport23 from './form23.vue'
import formReport24 from './form24.vue'
import formReport25 from './form25.vue'

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
        "form-report10": formReport10,
        "form-report11": formReport11,
        "form-report12": formReport12,
        "form-report13": formReport13,
        "form-report14": formReport14,
        "form-report15": formReport15,
        "form-report16": formReport16,
        "form-report17": formReport17,
        "form-report18": formReport18,
        "form-report19": formReport19,
        "form-report20": formReport20,
        "form-report21": formReport21,
        "form-report22": formReport22,
        "form-report23": formReport23,
        "form-report24": formReport24,
        "form-report25": formReport25,
    },
    data() {
        return {
            //     forms: {
            //     type: Object,
            //     required: false,
            //     default: () => {
            //         return {
            //             company_name: '',
            //             chapter1: '',
            //             description1: '',
            //             chapter2: '',
            //             description2: '',
            //         }
            //     },
            // },

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
            getForm10: '',
            getForm11: '',
            getForm12: '',
            getForm13: '',
            getForm14: '',
            getForm15: '',
            getForm16: '',
            getForm17: '',
            getForm18: '',
            getForm19: '',
            getForm20: '',
            getForm21: '',
            getForm22: '',
            getForm23: '',
            getForm24: '',
            getForm25: '',
            combineValue: '',
        }
    },
    props: {
        forms: {
            type: Object,
            required: false,
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
            this.getData9 = this.$refs.formData10.forms
            this.getData9 = this.$refs.formData11.forms
            this.getData9 = this.$refs.formData12.forms
            this.getData9 = this.$refs.formData13.forms
            this.getData9 = this.$refs.formData14.forms
            this.getData9 = this.$refs.formData15.forms
            this.getData9 = this.$refs.formData16.forms
            this.getData9 = this.$refs.formData17.forms
            this.getData9 = this.$refs.formData18.forms
            this.getData9 = this.$refs.formData19.forms
            this.getData9 = this.$refs.formData20.forms
            this.getData9 = this.$refs.formData21.forms
            this.getData9 = this.$refs.formData22.forms
            this.getData9 = this.$refs.formData23.forms
            this.getData9 = this.$refs.formData24.forms
            this.getData9 = this.$refs.formData25.forms

            // เอาตัวแปรที่เก็บ value ใน component อื่นเก็บตัวแปร combineValue

            this.combineValue = {
                ...this.getForms, ...this.getData1, ...this.getData2, ...this.getData3, ...this.getData4,
                ...this.getData5, ...this.getData6, ...this.getData7, ...this.getData8, ...this.getData9,
                ...this.getData10, ...this.getData11, ...this.getData12, ...this.getData13, ...this.getData14,
                ...this.getData15, ...this.getData16, ...this.getData17, ...this.getData18, ...this.getData19,
                ...this.getData20, ...this.getData21, ...this.getData22, ...this.getData23, ...this.getData24,
                ...this.getData25
            }
            this.$emit('formInput', this.combineValue)
        }
    },
    mounted() {
        // console.log(this.forms)
    },
    watch: {
        forms(newValue) {
            console.log(newValue)
        }
    }
}
</script>