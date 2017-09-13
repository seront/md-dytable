# Aviso
este repositorio es un fork de 
https://github.com/psotoulloa/js-dev-env
revise primero antes de comenzar con este repositorio en forma de desarrollo

## Guia de estilo

Sigamos los parametros sugeridos aqui https://github.com/toddmotto/angularjs-styleguide

## Instalar como libreria
Este repositorio contiene una serie de modulos donde se encuentran tanto componentes separados (headers, footers, sidebar) 
como modulos genericos integrados como el "Access", donde se encuentran las vistas integradas de Login, Recuperar contraseña entre otras ya maquetadas.
Para instalar ejecute

npm -i https://github.com/seront/medipass-base.git --save

luego importe las dependencias en el archivo principal de la aplicación

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/medipass-base/lib/medipass-base.css';

import {AccessModule} from 'medipass-base'; //Veáse lista de modulos al final de esta documentación
```
y en el modulo principal de la aplicación
```javascript
let app = angular.module('app', [AccessModule])
```
y ya tenemos todas las vistas que se encuentran en el modulo Access en nuestra aplicación tan solo con ir a /login,
pues trae las rutas ya configuradas
## Como crear componentes y modulos base
proximamente individuos

## Componentes
### Side menu
Componente que renderiza un menu lateral para la navegación interna de la aplicación, se utiliza dentro de la aplicacion de la siguiente manera
```html
<sidemenu menu="$ctrl.menu" config="$ctrl.configMenu"></sidemenu>
```
Estructura de los bindings
```javascript
$ctrl.menu = [
       {items: [ // estos son sub items que puede tener el menu
            {
                state: "app.main.financiador", icon: "location_on", name: "Financiar algo"
            }
       ],
       expanded: false, //Si muestra los sub items o no
       icon: "user", // material design icon name
       name: "FINANCIADOR"}, // valor pasado a la directiva "translate" para mostrar
       {state: "app.dashboard.usuarios", // ui-router state 
       expanded: false,
       icon: "people",
       name: "USUARIOS"}
     ];
$ctrl.configMenu = {
       class: ["md-sidenav-left", "md-whiteframe-4dp"], // ng-class  general
       //https://material.angularjs.org/latest/api/directive/mdSidenav
       disableScrollTarget: "body", 
       isOpen: true,
       isLockedOpen: "$mdMedia('gt-md')", //usando el servicio de mediaquery de angular material
       componentId: 'right',
       toolbar: { // barra superior en el menu, opcional
         class: ["md-theme-light", "md-hue-1"],
          text: "Financiador"
       }
     };
```
### Custom Table
Componente de tabla personalizable basada en este proyecto https://github.com/daniel-nagy/md-data-table.
Para ser usada por otro componente se usa de la siguiente manera.
```html
<custom-table
    config="$ctrl.config"
    pagination="$ctrl.pagination"
    object-config="$ctrl.objectConfig"
    headers="$ctrl.headers"
    objects="$ctrl.objects"
     actions="$ctrl.actions"
     on-paginate="$ctrl.onPaginate(page, limit, total)"
     on-action="$ctrl.accionTabla(name, object)"
     on-selection="$ctrl.onSelect"
     on-deselection="$ctrl.onDeselect"></custom-table>
 ```
 ### Bindings
 config: basado en https://github.com/daniel-nagy/md-data-table#row-selection
 
 ```javascript
 this.config = {
      rowSelect: true, // seleccionar filas?
      multiple: true, // seleccionar mas de una fila a la vez?
      progress: "", //promesa para mostrar barra de carga o cambio en
      autoSelect: true, //true
      rowSelect: true,
      selectId: "", // propiedad del objeto que lo identifica como unico
      rowSelectDisable: "" //propiedad del objeto en la fila que dice si la fila se puede seleccionar o no
    };
```
pagination: basado en https://github.com/daniel-nagy/md-data-table#pagination
 ```javascript
 this.pagination = {
      style: ["pagination-label"], //array de strings, nombres de clases a aplicar, opcional
      limit: 2,
      page: 1,
      total: 5,
      pageSelect: 1,
      boundaryLinks: true, //boolean, default: false
      label: "{of: 'DE', page: 'PAGINA', rowsPerPage: 'FILAS_PAGINAS'}", //formato del string q se le pasa a la tabla
      limitOptions: [5, 10, 15]
    };
```
object-config: configuracion de los datos de cada fila (hasta ahora solo acepta datos tipo texto)
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
headers: array de encabezados de la tabla, si es numerico se establece como true, esto pasa por $translate
 ```javascript
this.headers = [
      { name: "header1", numeric: false },
      { name: "header2", numeric: false },
      { name: "header3", numeric: false },
      { name: "header4", numeric: false }
    ];
```
 objects: array de objetos a mostrar, cada objeto simboliza una fila del la tabla
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
    -total = total de elementos
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
     