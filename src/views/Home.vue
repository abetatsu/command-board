<template>
<div>
  <header>
      目標一覧
      <font-awesome-icon icon="fire-alt" />
  </header>
  <div id="nav">
      <router-link to="/board" class="menu">動態表へ</router-link>
    </div>
  <div class="home">
    <div class="home-header">
      今年の目標
    </div>
    <hr />
    <div class="home-body">
      <p class="home-content">○月の〇〇訓練での任務完遂</p>
    </div>
  </div>
  <div class="home">
    <div class="home-header">
      今月の目標
    </div>
    <hr />
    <div class="home-body">
      <p class="home-content">来月の〇〇訓練の準備万全</p>
    </div>
  </div>
  <div class="home">
    <div class="home-header">
      今週の目標
    </div>
    <hr />
    <div class="home-body">
      <p class="home-content">各人ごとの練度の向上</p>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {

  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home {
  margin: 50px auto;
  width: 70%;
  height: 200px;
  background-color: white;
  border-radius: 25px;
}

.home-header {
  text-align: center;
  font-size: 40px;
  font-family: 'Yu Mincho Light','YuMincho','Yu Mincho','游明朝体',sans-serif;
}

.home-content {
  text-align: center;
  font-size: 30px;
  font-family: 
}

.menu {
  color: gray;
  text-decoration: none;
  font-size: 30px;
  margin: 50px;
  border: solid 3px gray;
  padding: 5px;
}

#nav {
  margin-top: 30px;
}
</style>