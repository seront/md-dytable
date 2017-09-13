export default class ToastsService{

        constructor($mdToast) {
          this.$mdToast = $mdToast;
        }

        // showWarning()
        // @params msg
        // return  response request
        //
        showWarning(msg){

          this.$mdToast.show({
              hideDelay: 5000,
              position: 'top right',
              template: '<md-toast><md-icon style="color: #ffeb3b">warning</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
              parent: '#main'
          });
        }

        // showError()
        // @params msg
        // return  response request
        //
        showError(msg){

          this.$mdToast.show(
            {
              hideDelay: 5000,
              position: 'top right',
              template: '<md-toast><md-icon style="color: #f44336">error</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
              parent: '#main'
            }
          );
        }

        // showSuccess()
        // @params msg
        // return  response request
        //
        showSuccess(msg){

          this.$mdToast.show(
            {
              hideDelay: 5000,
              position: 'top right',
              template: '<md-toast><md-icon style="color: #4caf50">check</md-icon><span class="md-toast-text" flex>'+msg+'</span></md-toast>',
              parent: '#main'
            }
          );
        }

  }
