
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const  i18n = new VueI18n({
    locale: 'en',          //默认语言
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
