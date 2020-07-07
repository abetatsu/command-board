<template>
  <div>
    <header>
      本日の動態
      <font-awesome-icon icon="flag" />
    </header>
    <div id="nav">
      <router-link to="/" class="menu">目標一覧へ</router-link>
    </div>
    <main>
      <p class="info-line">総員：{{ totalSoldierCount }}名</p>
      <draggable class="list-index" :list="tasks" @end="movingTask">
        <task v-for="(task, index) in tasks"
              :key="task.id"
              :title="task.title"
              :soldiers="task.soldiers"
              :taskIndex="index"
              @change="movingSoldier"
        />
        <task-add />
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import TaskAdd from '../components/TaskAdd.vue'
import Task from '../components/Task.vue'
import { mapState } from 'vuex'

export default {
  components: {
       TaskAdd,
       Task,
       draggable,
  },
  computed: {
        ...mapState([
          'tasks'
        ]),
        totalSoldierCount() {
        return this.$store.getters.totalSoldierCount
      }
  },
  methods: {
      movingSoldier: function() {
        this.$store.dispatch('updateTask', { tasks: this.tasks })
      },
      movingTask: function() {
        this.$store.dispatch('updateTask', { tasks: this.tasks })
      },
  }
}
</script>

<style scoped>
  .menu {
  color: gray;
  text-decoration: none;
  font-size: 30px;
  margin: 50px 20px;
  border: solid 3px gray;
  padding: 5px;
}
</style>