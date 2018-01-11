import WYSIWYG from './src/WYSIWYG.vue'

export default {
    install: function (Vue) {
        Vue.component('html-editor', WYSIWYG)
    }
}
