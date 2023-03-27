<template>
  <div>
    <b-row class="mb-5">
      <b-col class="text-center">
        <h2>แก้ไขเอกสารประเมิน</h2>
      </b-col>
    </b-row>
    <flash-message></flash-message>

    <!-- {{ getAPI }} -->
    <form-input @formInput="createOrUpdate" :forms="getAPI" />
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

      getAPI: []
    };
  },

  methods: {
    createOrUpdate: async function (form) {
      await api.updatetask(form);
      console.log(form);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/`);
    }
  },

  async mounted() {
    this.getAPI = await api.gettask(this.$route.params.id);
    // console.log(this.getAPI);

    // this.createOrUpdate(this.getAPI);
  }
};
</script>