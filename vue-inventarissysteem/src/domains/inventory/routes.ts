import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Overview from './pages/Overview.vue'
import Order from './pages/Order.vue'

const routes = [
        {path: '/', name: 'overview', component: Overview},
        {path: '/create', name: 'create', component: Create},
        {path: '/edit/:id', name: 'edit', component: Edit},
        {path: '/order', name: 'order', component: Order}
    ]

export default routes