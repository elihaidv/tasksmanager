import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const priorities = [
  {
    id: 1,
    label: "low"
  }, {
    id: 2,
    label: "Medium"
  }, {
    id: 3,
    label: "Urgent"
  }
]
const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    tasks: (state) => state.tasks,
    priorities: (s) => priorities
  },
  mutations: {
    setTasks: (state, tasks) => state.tasks = tasks,
    addTask: (state, task) => state.tasks.push(task)
  },
  actions: {
    loadTasks: () =>
      axios.get('/api/tasks')
        .then(res => store.commit("setTasks", res.data)),

    createTask: ({commit,state}, task) =>
      axios.post('/api/tasks', task)
        .then(res => commit("setTasks", res.data)),

    updateTask: ({commit,state}, task) =>
      axios.put(`/api/tasks/${task.id}`, task)
        .then(res => commit("setTasks", res.data)),

    deleteTask: ({commit,state}, task) =>
      axios.delete(`/api/tasks/${task.id}`)
        .then(res => commit("setTasks", res.data)),
  },
  modules: {
  }
})

store.dispatch('loadTasks');

export default store