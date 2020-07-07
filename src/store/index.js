import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('command-tasks')

const store = new Vuex.Store({
  state: {
    tasks: savedLists ? JSON.parse(savedLists): [
      {
        title: '人員',
        soldiers: [
          { name: '山田太郎', rank: '３等軍曹', branch: '歩兵科', mos: '歩兵', age: '25', born: '千葉県', health: '健康', family: '妻、長男(2)', hobby: 'サッカー,アウトドア'},
          { name: '山田花子', rank: '伍長', branch: '戦車科', mos: '戦車', age: '22', born: '山形県', health: '健康', family: '夫', hobby: '食べ歩き,御朱印集め'},
          { name: '山本次郎', rank: '２等兵', branch: '航空科', mos: '航空機エンジニア', age: '19', born: '東京都', health: '腰痛(手術完治)', family: '独身', hobby: 'プログラミング'},
          { name: '山田三郎', rank: '１等兵', branch: '高射科', mos: '自走砲', age: '37', born: '滋賀県', health: '金属アレルギー', family: '妻(再婚),長女(12)', hobby: '釣り,サイクリング'},
          { name: '田中花子', rank: '曹長', branch: '野戦大砲科', mos: '大砲', age: '49', born: '熊本県', health: '出産経験あり', family: '夫,長男(14),長女(6)', hobby: '語学学習,韓流ドラマ'},
          { name: '田中一郎', rank: '上等兵', branch: '憲兵科', mos: '軍事警察', age: '20', born: '北海道', health: '健康', family: '妻', hobby: 'スノーボード,バイク'},
          { name: '山崎三郎', rank: '２等軍曹', branch: '情報科', mos: '情報', age: '32', born: '神奈川県', health: '健康', family: '独身', hobby: '音楽観賞'},
          { name: '鈴木四郎', rank: '１等軍曹', branch: '通信科', mos: '無線', age: '37', born: '長野県', health: '健康', family: '妻,長男(11),次男(4)', hobby: 'yotube観賞'},
          { name: '佐藤太郎', rank: '先任曹長', branch: '化学科', mos: '除染', age: '50', born: '埼玉県', health: '痛風', family: '妻,長女(21),次女(15),長男(8)', hobby: '野球観戦'},
          { name: '田中次郎', rank: '少尉', branch: '施設科', mos: '重機操作', age: '27', born: '新潟県', health: '健康', family: '妻', hobby: 'ラグビー'},
          { name: '山田四郎', rank: '中尉', branch: '医療科', mos: '歯科専門医', age: '34', born: '宮崎県', health: '健康', family: '妻,長女(19),長男(18)', hobby: '筋トレ,サーフィン'},
        ]
      },
      {
        title: '恒常業務',
        soldiers: []
      },
    ],
  },
  mutations: {
    addtask(state, payload) {
      state.tasks.push({ title: payload.title, soldiers:[] })
    },
    removetask(state, payload) {
      state.tasks.splice(payload.taskIndex, 1)
    },
    addSoldierToTask(state, payload) {
      state.tasks[payload.taskIndex].soldiers.push({ 
        name: payload.name,
        rank: payload.rank,
        branch: payload.branch,
        mos: payload.mos,
        age: payload.age,
        born: payload.born,
        health: payload.health,
        family: payload.family,
        hobby: payload.hobby
      })
    },
    removeSoldierFromTask(state, payload) {
      state.tasks[payload.taskIndex].soldiers.splice(payload.soldierIndex, 1)
    },
    updateTask(state, payload) {
      state.tasks = payload.tasks
    }
  },
  actions: {
    addtask(context, payload) {
      context.commit('addtask', payload)
    },
    removetask(context, payload) {
      context.commit('removetask', payload)
    },
    addSoldierToTask(context, payload) {
      context.commit('addSoldierToTask', payload)
    },
    removeSoldierFromTask(context, payload) {
      context.commit('removeSoldierFromTask', payload)
    },
    updateTask(context, payload) {
      context.commit('updateTask', payload)
    }
  },
  getters: {
    totalSoldierCount(state) {
      let count = 0
      state.tasks.map(content => count += content.soldiers.length)
      return count
    },
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('command-tasks', JSON.stringify(state.tasks))
})

export default store