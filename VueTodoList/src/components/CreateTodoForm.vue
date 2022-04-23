<template>
  <form class="form">
    <h1 class="mr-5">Create new todo</h1>
    <va-input v-model="state.nameValue" class="mr-3" />
    <va-select v-model="state.importanceValue" :options="state.importanceOptions" />
    <va-button :rounded="false" class="ml-3" @click="onCreateTodoHandler">Create todo</va-button>
  </form>

</template>

<script>
import {useStore} from "vuex";
import { reactive } from 'vue'
export default {
  setup () {
    const store = useStore()

    const state = reactive({
      nameValue: "",
      importanceValue: "average",
      importanceOptions: ['average', 'important', 'critical']
    })

    function onCreateTodoHandler() {
      if (!state.nameValue.length) return
      store.commit("createTodo", {
        id: store.getters.getTodoNumber + 1,
        title: state.nameValue,
        importance: state.importanceOptions.findIndex(item => item === state.importanceValue),
        isCompleted: false
      })
      clearForm()
    }

    function clearForm() {
      state.nameValue = ""
      state.importanceValue = state.importanceOptions[0]
    }

    return {
      state,
      onCreateTodoHandler
    }
  }
}
</script>

<style scoped>
  .form {
    margin: 20px;
    display: flex;
    align-items: center;
  }
  .form h1 {
    font-size: 20px;
  }
</style>