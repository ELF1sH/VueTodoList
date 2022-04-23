<template>
  <va-card class="card">
    <va-card-content class="card-content">

      <div class="left-side">
        <va-checkbox
          class="checkbox"
          v-model="a"
          @click="$props.isCompleted ? $store.commit('undoneTodo', $props.id) : $store.commit('completeTodo', $props.id)"
        />
        <span :class="[{'text-through': $props.isCompleted}, 'todo-title']">{{ $props.title }}</span>
      </div>

      <div class="right-side">
        <va-badge
          class="todo-badge"
          :text="$props.importance === 2 ? 'critical' : $props.importance === 1 ? 'important' : 'average'"
          :color="$props.importance === 2 ? 'danger' : $props.importance === 1 ? 'warning' : 'gray'"
        />
        <va-button-group>
          <va-button color="danger" @click="$store.commit('deleteTodo', $props.id)">Delete</va-button>
          <va-button @click="$router.push(`/todos/${$props.id}`)">Show</va-button>
          <va-button color="warning" @click="highlight">Highlight</va-button>
        </va-button-group>
      </div>

    </va-card-content>
  </va-card>
</template>

<script>
export default {
  data() {
    return {
      a: this.isCompleted
    }
  },
  props: {
    id: Number,
    title: String,
    importance: Number,
    isCompleted: Boolean
  },
  methods: {
    highlight() {
      this.$emit('highlight', this.id)
    }
  }
}
</script>

<style scoped>
  .card {
    max-width: 1300px;
    box-shadow: none;
    border: 1px solid gray;
  }
  .card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-side, .right-side {
    display: flex;
    align-items: center;
  }
  .checkbox {
    margin-right: 10px;
  }
  .todo-title {
    font-size: 20px;
  }
  .todo-badge {
    margin-right: 20px;
  }
  .text-through {
    text-decoration: line-through;
  }
</style>