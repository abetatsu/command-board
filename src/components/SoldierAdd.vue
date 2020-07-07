<template>
    <div>
    <font-awesome-icon icon="plus" v-on:click="openModal" class="plus"/>
    <div id="overlay" v-show="showContent">
      <div id="content">
        <form @submit.prevent="addSoldierToTask">
            <input v-model="name" type="text" class="text-input" placeholder="名前"/>
            <input v-model="rank" type="text" class="text-input" placeholder="階級"/>
            <input v-model="branch" type="text" class="text-input" placeholder="職種"/>
            <input v-model="mos" type="text" class="text-input" placeholder="特技"/>
            <input v-model="age" type="text" class="text-input" placeholder="年齢"/>
            <input v-model="born" type="text" class="text-input" placeholder="出身地"/>
            <input v-model="health" type="text" class="text-input" placeholder="既往歴"/>
            <input v-model="family" type="text" class="text-input" placeholder="家族構成"/>
            <input v-model="hobby" type="text" class="text-input" placeholder="趣味"/>
            <button type="submit" class="add-button" v-on:click="closeModal">
              登録
            </button>
      </form>
        <button class="add-button" v-on:click="closeModal">
            閉じる
        </button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    taskIndex: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      name: '',
      rank: '',
      branch: '',
      mos: '',
      age: '',
      born: '',
      health: '',
      family: '',
      hobby: '',
      showContent: false,
    }
  },
computed: {
  bodyExists() {
    return this.name.length > 0
  }
},
  methods: {
     startEditing: function() {
     this.isEditing = true
     },
     finishEditing: function() {
     this.isEditing = false
     },
     addSoldierToTask: function() {
     this.$store.dispatch('addSoldierToTask', 
     { name: this.name, rank: this.rank, branch: this.branch, mos: this.mos, age: this.age,
      born: this.born, health: this.health, family: this.family, hobby: this.hobby, taskIndex: this.taskIndex })
     this.name = '',
     this.rank = '',
     this.branch = '',
     this.mos = '',
     this.age = '',
     this.born = '',
     this.health = '',
     this.family = '',
     this.hobby = ''
     },
     openModal: function() {
       this.showContent = true
     },
     closeModal: function () {
       this.showContent = false
     }
   }
 }
</script>

<style scoped>
#overlay {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus {
  cursor: pointer;
}
</style>