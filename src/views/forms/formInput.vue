<template>
    <div>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-input',
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
    }
}
</script>