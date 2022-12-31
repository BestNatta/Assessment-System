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
        <formInput />
        <hr />
        <br>
        <formReport1 />
        <formReport2 />
        <formReport3 />
        <formReport4 />
        <formReport5 />
        <formReport6 />
        <formReport7 />
        <formReport8 />
        <formReport9 />
        <br>
        <b-row>
            <b-col class="d-flex justify-content-center">
                <button @click="createOrUpdate" class="positive ui button px-5">บันทึก</button>
            </b-col>
        </b-row>
        <!-- <formInput @createFormInput="createOrUpdate"></formInput> -->
        <!-- <formReport @createForm="createOrUpdate" /> -->
    </div>
</template>

<script>
import { api } from "../helpers/Helpers";
import formInput from '../views/forms/formInput.vue'
import formReport1 from '../views/forms/form1.vue'
import formReport2 from '../views/forms/form2.vue'
import formReport3 from '../views/forms/form3.vue'
import formReport4 from '../views/forms/form4.vue'
import formReport5 from '../views/forms/form5.vue'
import formReport6 from '../views/forms/form6.vue'
import formReport7 from '../views/forms/form7.vue'
import formReport8 from '../views/forms/form8.vue'
import formReport9 from '../views/forms/form9.vue'
// import formInput from '../components/TaskForm.vue'
// import formReport from '../views/Form.vue'
import Menu from '../components/SelectMenu.vue'
export default {
    name: 'Create',
    components: {
        formInput,
        formReport1,
        formReport2,
        formReport3,
        formReport4,
        formReport5,
        formReport6,
        formReport7,
        formReport8,
        formReport9,
        // formInput,
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