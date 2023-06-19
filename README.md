
# Around the U.S. project on React, con autorización y registro.

Proyecto 15: 

## Descripción general

- Mi proyecto front-end en React "Alrededor de los EE.UU." con funciones de autorización y registro.
- Todas las solicitudes de autorización, registro y token deben pasar por el servidor que se ejecuta en [https://register.nomoreparties.co](https://register.nomoreparties.co/).


## Funcionalidad

- Registrar Usuarios
- Iniciar Sesión
- Cerrar Sesión
- autentificación de usuarios


## Tecnologias Utilizadas

- React JS
- React Router
- Linter: para encontrar errores
- Metodologia BEM


## Directorios

`/blocks` — Carpeta con archivos con hojas de estilos

`/components` — Carpeta de componentes js

`/utils` — Carpeta con archivos auth.js / api.js

`/contexts` — Carpeta con archivo de contextos js

`/images` — Carpeta con imágenes


## Ejecuta el Proyecto

`npm run start` — inicia el servidor en localhost:3000

`npm run dev` — inicia el servidor en localhost:3000 con el hot reload habilitado.

- Cuando la aplicación se inicia, se conecta al servidor MongoDB en: mongodb://localhost:27017/aroundb


## LINT: Para encontrar posibles Errores en el código 

`npx eslint . --fix` 
