<template>
  <div>
    <CreateTodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../TodoList.vue";
import CreateTodoForm from "../CreateTodoForm.vue";
export default {
  components: { TodoList, CreateTodoForm }
}
</script>

<style scoped>

</style>