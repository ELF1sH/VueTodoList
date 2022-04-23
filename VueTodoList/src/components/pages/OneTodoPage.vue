<template>
  <va-card>
    <va-card-content class="card-content">
      <p>Id: {{this.todo.id}}</p>
      <p>Title: {{this.todo.title}}</p>
      <p>Importance: {{this.todo.importance}}</p>
      <p>Is completed: {{this.todo.isCompleted}}</p>
    </va-card-content>
  </va-card>
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
export default {
  data() {
    return {
      todo: {}
    }
  },
  mounted() {
    const store = useStore()
    const route = useRoute()
    this.todo = store.getters.getTodoItem(+route.params.id)
  }
}
</script>

<style scoped>
  .card-content {
    font-size: 20px;
    line-height: 1.5;
  }
</style>