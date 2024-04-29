# Detalles de la instalación

Importante: proyecto desarrollado en Angular CLI version 17.3.5

Para ejecutar la tarea, se debería clonar el proyecto de github en una carpeta local con:

> git clone https://github.com/penguinhacker/galilea-pagination.git

luego (dentro de la carpeta generada), instalar los paquetes y dependencias con:

> npm install

Finalmente, ejecutar el sitio con el comando básico para correr los proyectos en Angular.

> ng serve --open

# Explicación superficial de la tarea

Se utilizó el componente "pagination-controls", el cual se encarga de la paginación de la tabla, particularmente porque esta opción admite el Server-Side Paging, el cual calza perfecto con la pokeapi, permitiendo tener una tabla paginable, lo cual era requisito de la tarea.

Por fines más estéticos que cualquier otra cosa, además de mostrar el nombre del pokémon, se muestra un sprite a su derecha. Para lograr esto se tomó la decisión de, al momento de entrar a una de las páginas del paginamiento, buscar la información específica de todos los pokémon de la página. De esta manera al llegar a cualquier página, los detalles e imagen serían cargados en el momento, no interrumpiendo el objetivo de paginar los datos, pues solamente se consiguen los valores de la página actual.

En caso de que no exista una imagen del pokémon (cosa que si pasa), al hacer click para que aparezca el modal aparecerá un simbolo de "imagen no encontrada"

Existía una versión mucho más optima de la página, en la cual los detalles específicos del pokémon no se cargarían hasta hacer click en la fila. Pero, nuevamente, se decidió la otra opción por fines estéticos, una tabla de solo una columna suena algo pobre.

La primera versión del proyecto (la comentada en el párrafo de arriba) puede encontrarse en el primer commit de este proyecto.


# Readme de Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
