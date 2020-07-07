<template>
     <div class="soldier">
    <button class="close-button" @click="removeSoldierFromTask">
      ×
    </button>
    <div class="body">
      <a v-on:click="openModal" class="soldier-name">{{ name }}</a>
      <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div id="content">
          <p>名前：{{ name }}</p>
          <p>階級：{{ rank }}</p>
          <p>職種：{{ branch }}</p>
          <p>特技：{{ mos }}</p>
          <p>年齢：{{ age }}歳</p>
          <p>出身地：{{ born }}</p>
          <p>既往歴：{{ health }}</p>
          <p>家族構成：{{ family }}</p>
          <p>趣味：{{ hobby }}</p>
          <button v-on:click="closeModal" class="close">閉じる</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showContent: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    rank: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    mos: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    born: {
      type: String,
      required: true
    },
    health: {
      type: String,
      required: true
    },
    family: {
      type: String,
      required: true
    },
    hobby: {
      type: String,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    soldierIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeSoldierFromTask() {
      if(confirm('本当にこの人員を抹消しますか？')) {
        this.$store.dispatch('removeSoldierFromTask', { soldierIndex: this.soldierIndex, taskIndex: this.taskIndex })
      }
    },
    openModal: function() {
      this.showContent = true
    },
    closeModal: function() {
      this.showContent = false
    }
  },
}
</script>

<style scoped>
#overlay{
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
  cursor: pointer;
}

#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
  cursor: default;
}

.close {
  cursor: pointer;
}
</style>