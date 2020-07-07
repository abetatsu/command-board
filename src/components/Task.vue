<template>
  <div class="task">
    <div class="taskheader">
      <p class="task-title">{{ title }}</p>
      <p class="task-counter">総員: {{ totalSoldierInTask }}名</p>
      <div class="deletetask" @click="removeTask">×</div>
    </div>
    <draggable group="soldiers" :list="soldiers" @end="$emit('change')">
    <soldier v-for="(soldier, index) in soldiers"
          :name="soldier.name"
          :rank="soldier.rank"
          :branch="soldier.branch"
          :mos="soldier.mos"
          :age="soldier.age"
          :born="soldier.born"
          :health="soldier.health"
          :family="soldier.family"
          :hobby="soldier.hobby"
          :key="soldier.id"
          :soldierIndex="index"
          :taskIndex="taskIndex"
    />
    <soldier-add :taskIndex="taskIndex" />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import SoldierAdd from './SoldierAdd'
import Soldier from './Soldier'

export default {
     components: {
          SoldierAdd,
          Soldier,
          draggable
     },
  props: {
    title: {
    type: String, 
    required: true
    },
    soldiers: {
    type: Array,
    required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
  totalSoldierInTask() {
    return this.soldiers.length
  }
  },
  methods: {
    removeTask: function() {
      if(confirm('本当に任務を完遂しましたか？')){
        this.$store.dispatch('removetask', { taskIndex: this.taskIndex })
      }
    },
  }
}
</script>