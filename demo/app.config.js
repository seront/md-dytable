
 function routing($stateProvider) {

  $stateProvider
    .state('app', {
      url: '/',
      component: 'userAdmin'
    })
    .state('app.dashboard', {
      // abstract: true,
      url: 'dashboard',
      component: 'main'
    })
    .state('app.dashboard.usuarios', {
      // abstract: true,
      url: '/usuarios',
      component: 'userAdmin'
    })
    ;
}

export default ['$stateProvider', routing];
