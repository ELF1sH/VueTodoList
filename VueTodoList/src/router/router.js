import TodoListPage from "../components/pages/TodoListPage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import OneMorePage from "../components/pages/OneMorePage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import OneTodoPage from "../components/pages/OneTodoPage.vue";

const routes = [
    {
        path: "/",
        component: TodoListPage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/oneMorePage",
        component: OneMorePage
    },
    {
        path: "/todos/:id",
        component: OneTodoPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router