import {tableConfig} from './demo-table-1.config';
class DemoTable1Controller {
  // "angular-material-data-table": "git+https://github.com/seront/md-data-table.git",
  constructor($log) {
    this.action1Value = false;
    this.log = $log.log;
    this.headers = tableConfig.headers;
    this.config = tableConfig.config;

    this.objectConfig = tableConfig.objectConfig;

    // this.objects = [];
    var object1 = {
      key1: true,
      key2: 111222333,
      key3: "value3",
      key4: 1,
      key7: 1
    };
    var object2 = {
      key1: "value1 VALUE Value",
      key2: 111222333,
      key3: "value3",
      key5:[{correo: "correo@dominio.com"}, {correo: "correo@dominio.com"}],
      key4: "0",
      key7: 2
    };
    var object3 = {
      key1: "value1",
      key2: 111222333444,
      key3: "value3",
      key4: "0",
      key7: 3
    };
    this.objects = [object1, object2, object3];

    // https://github.com/daniel-nagy/md-data-table#pagination
    this.pagination = {
      style: ["pagination-label"], //array de strings, nombres de clases a aplicar, opcional
      limit: 2,
      page: 1,
      total: 5,
      pageSelect: 1,
      boundaryLinks: true, //boolean, default: false
      label: "{of: 'DE', page: 'PAGINA', rowsPerPage: 'FILAS_PAGINAS'}", //formato del string q se le pasa a la tabla
      limitOptions: [5, 10, 15],
      footLabel: [{title:{text: "Probando:", style: []}, text: {text: "El label", style: []}}]
    };
  }

  accionTabla(name, object) {
    this.log("accionTabla " + name);

    switch (name) {
      case 'action1':
        this.log("accionTabla sw action1");
        break;
      case 'action2':
        this.log("accionTabla sw action2");
        this.action2(object);
        break;

      default:
        this.log(name);
        this.log(object);
    }
  }

  action2(value) {
    this.log("action2 ");
    this.log(value);
  }

  onSelect(object){
    console.log("onSelect user admin");
    console.log(object);
  }
  onDeselect(object){
    console.log("onDeselect user admin");
    console.log(object);
  }

  $onInit() {
    this.log("user admin componente");
    // this.action1Value = false;

  }

  quitarAcciones(){
    this.actions = [];
  }

  masObjetos(){
    let ar = this.objects;
    this.objects = [];
    var object2 = {
      key1: "1234567",
      key2: "value2",
      key3: true,
      key4: 1,
      key5: 5,
      key6: { "@nil": true}
    };

    ar.push(object2);
    console.log(ar);
    this.objects = ar;
  }

  onPaginate(page, limit){
    console.log("page " + page + " limit: " + limit);
  }

}

export const DemoTable1 = {
  template: require('./demo-table-1.html'),
  controller: ["$log", DemoTable1Controller],
  bindings: {

  }
};
