<template>
  <div>
    <div class="container">
      <h2>รายการทั้งหมด</h2>
      <flash-message></flash-message>
      <div v-if="tasks.length > 0">
        <table id="tasks" class="ui celled compact table">
          <thead>
            <tr class="text-center">
              <th class="tr-number">ลำดับ</th>
              <th class="tr-name"><i class="info circle icon"></i>ชื่อบริษัท</th>
              <th><i class="lock open icon"></i></th>
              <th><i class="edit icon"></i></th>
              <th><i class="trash icon"></i></th>
            </tr>
          </thead>
          <tr v-for="(task, i) in this.tasks" :key="task.id">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ task.company_name }}</td>
            <td class="center aligned">
              <router-link :to="{ name: 'dashboard', params: { id: task._id } }">แสดงข้อมูล</router-link>
            </td>
            <td class="center aligned">
              <router-link :to="{ name: 'edit', params: { id: task._id } }">แก้ไข</router-link>
            </td>
            <td class="center aligned" @click.prevent="onDestroy(task._id)">
              <a :href="`/tasks/${task._id}`">ลบ</a>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        ไม่มีรายการ !
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'tasks',
  data() {
    return {
      tasks: []
    };
  },

  async mounted() {
    const tasks = await api.gettasks();
    this.tasks = tasks.formUserTasks;
  },

  methods: {
    async onDestroy(id) {
      const sure = window.confirm('คุณต้องการลบข้อมูลหรือไม่ ?');
      if (!sure) return;
      await api.deletetask(id);
      this.flash('task deleted sucessfully!', 'success');
      const newtasks = this.tasks.filter(task => task._id !== id);
      this.tasks = newtasks;
    }
  },
};
</script>