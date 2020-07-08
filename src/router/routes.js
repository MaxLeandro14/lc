
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/infoSala', name: 'infoSala', component: () => import('pages/InforSala.vue') },
      { path: '/salasPart', name: 'salaParticipando', component: () => import('pages/SalasParticipando.vue') },
      { path: '/searchPerfil', name: 'searchPerfil', component: () => import('pages/SearchPerfil.vue') },
      { path: '/settings', name: 'settings', component: () => import('pages/Settings.vue') },
      { path: '/myPerfil', name: 'myPerfil', component: () => import('pages/MyPerfil.vue') }
    ]
  },
  {
    path: '/room',
    component: () => import('layouts/SalaLayout.vue'),
    children: [
      { path: '/room', name: 'room', component: () => import('pages/Sala.vue') },
      { path: '/registro', name: 'registro', component: () => import('pages/Registro.vue') },
      { path: '/atividade', name: 'atividade', component: () => import('pages/Atividade.vue') }
    ]
  },
  {
    path: '/perfil', name: 'perfil', component: () => import('pages/Perfil.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
