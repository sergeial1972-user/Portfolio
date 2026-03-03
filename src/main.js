import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";  // Импорт конкретных иконок

library.add(faMoon)  // Добавляем иконки в библиотеку

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

//