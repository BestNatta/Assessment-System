<template>
    <div>
        <b-row class="mb-4">
            <b-col class="text-center">
                <h2>สร้างเอกสารประเมิน</h2>
            </b-col>
        </b-row>
        <div class="text-center mb-4">
            <Menu :ids="ids"></Menu> <!----sent ot component---->
        </div>
        <formInput @createFormInput="createOrUpdate"></formInput>
        <!-- <formReport @createForm="createOrUpdate" /> -->
    </div>
</template>

<script>
import { api } from "../helpers/Helpers";
import formInput from '../components/TaskForm.vue'
// import formReport from '../views/Form.vue'
import Menu from '../components/SelectMenu.vue'
export default {
    name: 'Create',
    components: {
        formInput,
        // formReport,
        Menu
    },

    data() {
        return {
            ids: [5],
        }
    },

    methods: {
        createOrUpdate: async function (task) {
            const res = await api.createtask(task);
            this.flash("task created", "success");
            this.$router.push(`/tasks/${res._id}/result`);
        },
    },
}
</script>