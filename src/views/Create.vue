<template>
    <div>
        <b-row class="mb-4">
            <b-col class="text-center">
                <h2>สร้างเอกสารประเมิน</h2>
            </b-col>
        </b-row>
        <div class="text-center mb-4">
        </div>
        <form-input @formInput="createOrUpdate" :forms="this.forms" />
    </div>
</template>

<script>
import { api } from "../helpers/Helpers";
import formInput from '../views/forms/formInput.vue';

export default {
    name: 'Create',
    components: {
        formInput,
    },
    data() {
        return {
            forms: {
                company_name: '',
                chapter1: '',
                description1: '',
                chapter2: '',
                description2: '',
                mainForm: [{
                    title: '',
                    subForm: [{
                        title: '',
                        selected: '',
                        operation: '',
                        heightValue: '',
                        moderateValue: '',
                        lowValue: '',
                        aicValue: ''
                    }]
                }]
            },
        };
    },
    methods: {
        createOrUpdate: async function (task) {
            // const res = await api.createtask(task);
            await api.createtask(task);
            this.flash("task created", "success");
            // this.$router.push(`/tasks/${res._id}/result`);
        },
    },
}
</script>