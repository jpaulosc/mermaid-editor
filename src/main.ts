import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

import '@/plugin/Bootstrap/Bootstrap'
import { init } from '@/plugin/Mermaid'

import { noteRepository } from '@/repository/NoteRepository'

init()
noteRepository.init()

createApp(App).mount('#app')
