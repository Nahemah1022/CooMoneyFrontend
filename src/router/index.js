import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const HelloWorld = () => import("@/components/HelloWorld");
const Index = () => import("@/components/Index");

export default new VueRouter({
    routes: [
        {
            path: '/Index',
            component: Index
        },
        {
            path: '/HelloWorld',
            component: HelloWorld
        }
    ]
})