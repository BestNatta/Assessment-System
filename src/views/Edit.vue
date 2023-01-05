<template>
  <div>
    <b-row class="mb-5">
      <b-col class="text-center">
        <h2>แก้ไขเอกสารประเมิน</h2>
      </b-col>
    </b-row>
    <flash-message></flash-message>
    <form-input @formInput="createOrUpdate" :forms=this.forms />
  </div>
</template>
<script>
import taskForm from '../views/forms/formInput.vue';
import { api } from '../helpers/Helpers';
export default {
  name: 'edit',
  components: {
    'form-input': taskForm,
  },
  data() {
    return {
      forms: {}
    };
  },
  
  methods: {
    createOrUpdate: async function(form) {
      await api.updatetask(form);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/`);
      
    }
  },

  async mounted() {
     this.forms = await api.gettask(this.$route.params.id);
  }
};
</script>