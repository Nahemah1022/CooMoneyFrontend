import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Project = () => import("@/components/Project");
const Index = () => import("@/components/Index");

export default new VueRouter({
    routes: [
        {
            path: '/Index',
            name: 'Index',
            component: Index
        },
        {
            path: '/Project',
            name: 'Project',
            component: Project
        }
    ]
})