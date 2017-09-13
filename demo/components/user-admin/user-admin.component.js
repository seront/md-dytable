class UserAdminController {
  constructor($log) {
    this.action1Value = false;
    this.log = $log.log;
    this.headers = [
      { name: "header1", numeric: false, tooltip:{text: "MENSAJE_TOOLTIP"} },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false },
      { name: "numero", numeric: true }
    ];

    this.config = {
      multiple: false, // seleccionar mas de una fila a la vez?
      progress: "", //promesa para mostrar barra de carga o cambio en
      autoSelect: true, //true
      rowSelect: true,
      selectId: "", // propiedad del objeto que lo identifica como unico
      rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
    };

    this.objectConfig = {
      key1: { type: "text-filter", filter: 'capitalize', option: true },
      key2: {
        type: "number", filter: 'miles'
      },
      key3: { type: "switch" },
      key4: { type: "switch", trueValue: 1, falseValue: 0 },
      key5: { type: "array-object", value: "correo", limit: 2 },

      // key6: { type: "text", avoid: '{"@nil":true}'},
      key6: { type: "copy", options:{child: "key2"}},
      key7: { type: "icon-set", options: [
        {value: 1,
        icon: "person", style: []},
        {value: 2,
        icon: "settings"},
        {value: 3,
        icon: "dashboard"}
      ]}
    };

    let action1 = {
      style: ["md-raised", "md-primary", "md-fab"],
      text: "action1",
      name: "action1",
      icon: {
        name: "people",
        style: []
      },
      tooltip: {
        text: "ACTION1", //texto a desplegar en el tooltip, se le aplica el filtro $translate
        // direction: "top", //opcional, Direccion en la que se desplega el tooltip, default: bottom
        // style: [], //opcional, array de strings nombre de clases a aplciar al elemento
        // zIndex: 0, //opcional
        // delay: 500, //opcional
        // autohide: true //opcional, default: true
      },
      type: "button"
    };

    let action2 = {
      style: [],
      text: "action2",
      name: "action2",//Nombre dentro del formulario
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        // visible: true,
        // delay: 500,
        direction: "top",
        text: "action switch"
      },
      type: "switch",
      hide: {
        property: 'key2',
        value: 111222333
      }
    };
    this.actions = [action1, action2];

    // this.objects = [];
    var object1 = {
      key1: "value1",
      key2: 111222333,
      key3: "value3",
      key4: 1,
      key7: 1
    };
    var object2 = {
      key1: "value1 VALUE Value",
      key2: 111222333,
      key3: "value3",
      // correos:{correo: "correo@dominio.com"},
      // correos:[{correo: "correo@dominio.com"}, {correo: "correo@dominio.com"}],

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

export const UserAdmin = {
  template: require('./user-admin.html'),
  controller: UserAdminController,
  bindings: {

  }
};
