import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCircleNotch, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faCaretUp, faCaretDown, faCircleNotch, faGithub, faFacebook, faGoogle)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
