routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'userAdmin'
    })
    // .state('app.dashboard', {
    //   // abstract: true,
    //   url: 'dashboard',
    //   component: 'main'
    // })
    // .state('app.dashboard.usuarios', {
    //   // abstract: true,
    //   url: '/usuarios',

    // })
    ;
}
