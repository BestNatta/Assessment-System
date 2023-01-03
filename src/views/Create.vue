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
        <formInput @formInput="createOrUpdate" />
    </div>
</template>

<script>
import { api } from "../helpers/Helpers";
import formInput from '../views/forms/formInput.vue'
import Menu from '../components/SelectMenu.vue'
export default {
    name: 'Create',
    components: {
        formInput,
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