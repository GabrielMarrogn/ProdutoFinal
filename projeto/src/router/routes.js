
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/insira',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InsiraCartao.vue') }
    ]
  },
  {
    path: '/consulta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConsultarSaldo.vue') }
    ]
  },
  {
    path: '/servicos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SelecionarServicos.vue') }
    ]
  },
  {
    path: '/cotas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SelecionarCotas.vue') }
    ]
  },
  {
    path: '/pagamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FormaPagamento.vue') }
    ]
  },
  {
    path: '/processamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AguardeProcessamento.vue') }
    ]
  },
  {
    path: '/dinheiro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DinheiroSelecionado.vue') }
    ]
  },
  {
    path: '/aprovado',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TransacaoAprovada.vue') }
    ]
  },
  {
    path: '/debito',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CartaoSelecionado.vue') }
    ]
  },
  {
    path: '/senha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DigiteSenha.vue') }
    ]
  },
  {
    path: '/final',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PaginaFinal.vue') }
    ]
  },
  {
    path: '/teclado',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TecladoNumerico.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
