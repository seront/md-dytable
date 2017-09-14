export const tableConfig = {
  headers: [
    { name: "header1", numeric: false, tooltip:{text: "MENSAJE_TOOLTIP"} },
    { name: "header2", numeric: false },
    { name: "header3", numeric: false },
    { name: "header4", numeric: false },
    { name: "numero", numeric: true }
  ],
  config: {
    multiple: false, // seleccionar mas de una fila a la vez?
    progress: "", //promesa para mostrar barra de carga o cambio en
    autoSelect: true, //true
    rowSelect: true,
    selectId: "", // propiedad del objeto que lo identifica como unico
    rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
  },
  objectConfig: {
    key1: { type: "text", filter: 'capitalize', option: true },
    key2: {
      type: "number", filter: 'currency', option: "# "
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
  },
  actions:[
    {
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
    },
    {
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
    }
  ]
};
