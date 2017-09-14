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
    key1: { type: "checkbox", order: 1, action: "checkbox"},
    key2: {
      type: "number", filter: 'currency', option: "# "
    },
    key3: { type: "input-text", order:2 },
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
  }
};
