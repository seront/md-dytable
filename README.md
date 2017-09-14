# Material Design dinamyc table
AngularJS component for the creation of tables under Material Design specs from a configuration, useful for large aplications where many tables are needed, if
you only need one or two tables probably this component is an overkill, in such case it's recommended use de original module of the table
in https://github.com/daniel-nagy/md-data-table, used by this component.

Componente AngularJS para la creación de tablas bajo la especificación de Material Design a partir de una configuración, muy util para aplicaciones grandes en las que
se usen muchas tablas, si solo necesitas una o dos tablas probablemente este componente este sobredimensionado para ti, se recomienda
usar el modulo original de la tabla en https://github.com/daniel-nagy/md-data-table que es usada por este componente.

## Getting started - Preparaciones
### Prerequisites - Prerequisitos

NPM

```angular-material```

AngularJS version >= 1.5.0

### Installing - Instalación

```
npm -i md-dytable --save
```
ES6
```javascript
import {default as MdDyTableModule} from 'md-dytable';
//Injecting the dependency in the root module - Inyectando la dependencia en el modulo raíz de la aplicación
angular.module('app', [MdDyTableModule])
```
Optionally - Opcionalmente
```javascript
import './project-root/node_modules/md-dytable/dist/md-dytable.js';
//Injection - Inyeccion 
angular.module('app', ['md-dytable'])
```
## Usage - Uso
In order to use this component you must place an html snippet like the next in your code - Para usar este componente se debe usar un codigo parecido a este
```html
<md-dytable config="$ctrl.config"
    pagination="$ctrl.pagination"
    object-config="$ctrl.objectConfig" 
    headers="$ctrl.headers"
    objects="$ctrl.objects" 
    actions="$ctrl.actions"
    on-paginate="$ctrl.onPaginate(page, limit)" 
    on-action="$ctrl.accionTabla(name, object)"
    on-selection="$ctrl.onSelect" 
    on-deselection="$ctrl.onDeselect">
    </md-dytable>
```

## Options
### Config

Based on https://github.com/daniel-nagy/md-data-table#row-selection
 
 ```javascript
 this.config = {
      rowSelect: true,
      multiple: true,
      autoSelect: true,
      rowSelect: true,
      selectId: "",
      rowSelectDisable: ""
    };
```

### Object config

The main reason for creating this component, this object allow you to display the data of your objects in every way soported, adding more as are needed,
contact me if you need a better way of the current implementations or have sugestions on what data types add.

The keys in the object config must match the key of the data in the object that you wish to display, the ```order``` attribute is used to establish the displaying order of the attibutes of the object in the table row

 ```javascript
this.objectConfig = {
      key1: { type: "text", order: 0 },
      key2: {
        type: "date", options: {
          format: ""
        },
        order: 1
      },
      key3: { type: "number", order: 2 },
      key4: { type: "text" order: 3}
      key5: { type: "inputNumber", action: 'input-change', text: "DEPENDE", //configuración para input de número
      options:{depends: "key4", min: 0, max: 10} }//depende del valor que tenga el key4 del objeto el la fila
    };
```

#### Supported types

#### checkbox
### Pagination

Based on https://github.com/daniel-nagy/md-data-table#pagination
 ```javascript
 this.pagination = {
      style: ["pagination-label"], //optional, string array 
      limit: 2, //required
      page: 1, //required, must default to 1
      total: 5, //required
      pageSelect: 1, //optional
      boundaryLinks: true, //boolean, default: false
      label: "{of: 'De', page: 'Página', rowsPerPage: 'Filas por paginas'}", //labels of the pagination
      limitOptions: [5, 10, 15] // Limit options
    };
```
 ### Headers

 The table headers, the name is displayed using ```$translate```

  ```javascript
this.headers = [
      { name: "header1", numeric: false },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false }
    ];
```
 ### Objects

 Array of objects to display

```javascript
var object1 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: 1,
      key5: 6
    };
    var object2 = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: 1,
      key5: 10
    };
    this.objects = [object1, object2];
```
actions: array de configuración de los botones que se agregan al final de la tabla
```javascript
  let action1 = {
      style: ["md-raised", "md-primary", "md-fab"], //opcional, array de strings nombre de clases a aplciar al elemento
      text: "action1",// texto a mostrar, pasa por "$translate"
      name: "action1", // nombre por el cual se ejecuta en el controlador, vease mas adelante
      icon: {//opcional
        name: "people",//opcional, nombre del icono segun a libreria material icons
        style: [] //opcional, array de strings nombre de clases a aplciar al elemento
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
      text: "action2",// texto a mostrar, pasa por "$translate"
      name: "action2", // nombre por el cual se ejecuta en el controlador, vease mas adelante
      model: '', //Nombre de la propiedad del objeto asociada a este switch
      tooltip: {
        style: [],
        zIndex: 0,
        // visible: true,
        // delay: 500,
        direction: "top",
        text: "action switch"
      },
      type: "switch" // hasta ahora solo admite valores switch y button
    };
    this.actions = [action1, action2];
```
on-paginate: ejecutará una funcion del controlador cada vez que se presione uno de los botones de la paginacion de la tabla, esa funcion debe esperar recibir 3 valores
    -page = pagina despues del cambio
    -limit = limite de elementos
```javascript
//recomendacion de como usar el binding "onAction"
onPaginate(page, limit, total){
    console.log("page " + page + " limit: " + limit + " total: " + total);
  }
```
on-action: ejecutará una funcion del controlador cada vez que se presione uno de los botones de acciones de la tabla, esa funcion debe esperar recibir dos valores
    -name = nombre de la accion que se esta ejecutando, equivalente al "name" de una accion del array "actions".
    -object = objeto correspondiente a la fila en la que se esta ejecutando la accion
```javascript
//recomendacion de como usar el binding "onAction"
accionTabla(name, object) {
    switch (name) {
      case 'action1':
        //ejecutar algo
        break;
      case 'action2':
        action2(object);
        break;
      default:
        this.log(name);
        this.log(object);
    }
  }
```
on-selection y on-deselection: ejecutará una funcion del controlador cada vez que se seleccione/deseleccione una de las filas de la tabla, esa funcion debe esperar recibir el objeto correspondiente a esa fila

```javascript
onSelect(object){
    //hacer algo con el objeto seleccionado
  }
  onDeselect(object){
    //hacer algo con el objeto deseleccionado
  }
```
     