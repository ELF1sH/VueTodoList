<template>
  <div class="todo-list-wrapper">
    <TodoItem
      v-for="item in $store.state.todo.todos"
      :id="item.id"
      :title="item.title"
      :is-completed="item.isCompleted"
      :importance="item.importance"
      :key="item.id"
      :class="highlightedTodos.includes(item.id) ? 'highlighted' : ''"
      @highlight="toggleHighlight"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  data() {
    return {
      highlightedTodos: [2, 4, 7]
    }
  },
  components: {TodoItem},
  methods: {
    toggleHighlight(id) {
      const index = this.highlightedTodos.findIndex(item => item === id)
      if (index === -1) this.highlightedTodos.push(id)
      else this.highlightedTodos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .todo-list-wrapper {
    margin: 20px;
  }
  .highlighted {
    outline: 4px solid yellow;
  }
</style>