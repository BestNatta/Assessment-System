<template>
    <div v-if="forms">
        <form action="#" @submit.prevent="onSubmit">
            <div class="container w-50">
                <div class="ui labeled input fluid">
                    <div class="ui label">
                        <i class="calendar plus icon"></i>ชื่อบริษัท
                    </div>
                    <input type="text" placeholder="Company name..." v-model="forms.company_name" />
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

            <form-1 :forms="this.forms" />

            <b-row>
                <b-col class="d-flex justify-content-center">
                    <button class="positive ui button px-5">บันทึก</button>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
import form1 from '../forms/form1.vue';
export default {
    name: 'form-input',
    components: {
        form1
    },
    data() {
        return {

        }
    },

    mounted() {

    },

    props: ['forms'],

    methods: {
        onSubmit() {
            this.$emit('formInput', this.forms)
        }
    },
}
</script>