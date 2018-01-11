import WYSIWYG from './src/WYSIWYG.vue'

export default {
    install(Vue) {
        Vue.component('html-editor', WYSIWYG)
    }
}
