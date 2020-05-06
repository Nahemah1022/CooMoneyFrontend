import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Project = () => import("@/components/Project/Project");
const Login = () => import("@/components/Login");
const SignUp = () => import("@/components/SignUp/SignUp");
const Index = () => import("@/components/Index");
const Analysis = () => import("@/components/Analysis/Analysis");

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Project',
            name: 'Project',
            component: Project
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/Analysis',
            name: 'Analysis',
            component: Analysis
        }
    ]
})