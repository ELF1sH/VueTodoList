export const todoModule = {
    state: {
        todos: [
            {
                id: 1,
                title: "Todo item numba wan",
                isCompleted: false,
                importance: 0
            },
            {
                id: 2,
                title: "Lorem ipsum dolor sit amet",
                isCompleted: true,
                importance: 2
            },
            {
                id: 3,
                title: "Nullam metus enim, porttitor scelerisque vehicula nec",
                isCompleted: false,
                importance: 1
            },{
                id: 4,
                title: "Nullam luctus tellus vitae bibendum sollicitudin. Aenean commodo massa eros, ac ultrices est mattis in. Nulla massa risus, auctor ut porta id, rutrum interdum ipsum",
                isCompleted: false,
                importance: 0
            },{
                id: 5,
                title: "Suspendisse maximus arcu",
                isCompleted: true,
                importance: 0
            },{
                id: 6,
                title: "Morbi quis neque nec nisi semper euismod",
                isCompleted: false,
                importance: 2
            },{
                id: 7,
                title: "Mauris ornare dolor ut rhoncus commodo.",
                isCompleted: true,
                importance: 2
            },{
                id: 8,
                title: "facilisis massa eu, tempus erat. Integer ac laoreet",
                isCompleted: false,
                importance: 2
            },
        ]
    },
    getters: {
        getTodoItem: state => id => {
            return state.todos.find(item => item.id === id)
        },
        getTodoNumber(state) {
            return state.todos.length
        }
    },
    mutations: {
        completeTodo(state, id) {
            state.todos = [...state.todos].map(item => item.id === id ? {...item, isCompleted: true} : item)
        },
        undoneTodo(state, id) {
            state.todos = [...state.todos].map(item => item.id === id ? {...item, isCompleted: false} : item)
        },
        deleteTodo(state, id) {
            state.todos = [...state.todos].filter(item => item.id !== id)
        },
        createTodo(state, todo) {
            state.todos.push(todo)
        }
    },
    actions: {

    }
}