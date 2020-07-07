<template>
     <form :class="classTask" @submit.prevent="addTask">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="任務を追加"
           @focusin="startEditing"
          @focusout="finishEditing"
    >
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      追加
    </button>
  </form>
</template>

<script>
export default {
     data: function() {
    return {
      title: '',
      isEditing: false,
    }
  },
  computed: {
  classTask() {
    const classTask = ['addtask']

    if (this.isEditing) {
      classTask.push('active')
    }
    if (this.titleExists) {
      classTask.push('addable')
    }
    return classTask
  },
  titleExists() {
    return this.title.length > 0
  },
},
  methods: {
    addTask: function() {
      this.$store.dispatch('addtask', { title: this.title })
      this.title = ''
     },
     startEditing() {
     this.isEditing = true
     },
     finishEditing() {
     this.isEditing = false
     },
  }
}
</script>