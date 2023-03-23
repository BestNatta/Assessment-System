<template>
  <div>
    <b-row class="mb-5">
      <b-col class="text-center">
        <h2>แก้ไขเอกสารประเมิน</h2>
      </b-col>
    </b-row>
    <flash-message></flash-message>
    <form-input @formInput="createOrUpdate" :forms="data" />
  </div>
</template>
<script>
import formInput from '../views/forms/formInput.vue';
import { api } from '../helpers/Helpers';
export default {
  name: 'edit',
  components: {
    formInput,
  },
  data() {
    return {
      // forms: null,
      data: []
    };
  },

  methods: {
    createOrUpdate: async function (form) {
      await api.updatetask(form);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/`);
    }
  },

  async mounted() {
    let data = await api.gettask(this.$route.params.id);

    // console.log(data);
    this.data = data;
    console.log(this.data);
  }
};
</script>