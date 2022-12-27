<template>
  <div>
    <b-row class="mb-5">
      <b-col class="text-center">
        <h2>แก้ไขเอกสารประเมิน</h2>
      </b-col>
    </b-row>
    <flash-message></flash-message>
    <task-form @createFormInput="createOrUpdate" :forms=this.forms></task-form>
  </div>
</template>
<script>
import taskForm from '../components/TaskForm.vue';
import { api } from '../helpers/Helpers';
export default {
  name: 'edit',
  components: {
    'task-form': taskForm
  },
  data: function() {
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