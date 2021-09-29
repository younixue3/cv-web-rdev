import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faPaintBrush,  faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub, faVuejs, faCss3, faHtml5, faLaravel, faPython, faBootstrap, faJs} from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode, faUser,  faFacebook, faInstagram, faLinkedin, faGithub, faVuejs, faCss3, faHtml5, faLaravel, faPython, faBootstrap, faJs, faPaintBrush, faPhotoVideo)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
