#  APP REST API

API desarrollada en Node con express para nutrir el frontend de la prueba técnica


## Features
- CRUD para los articulos
- CRUD para los usuarios
- Inisio de sesión de usuarios 
- End Points protegidos por JWT


## Configuración

Clona el repositorio y accede al directio

```sh
git clone https://github.com/JoseGarcia2001/onegroup_app_api.git
cd onegroup_app_api
```

Antes de instalar y correr el servidor en local es necesario completar las variables de entorno.

En el directorio raiz crea un archivo .env (ver .env.example)

Instala las dependencias y corre el servidor.

```sh
cd onegroup_app_api
npm i
npm run dev
```

| API Desplegada en | https://onegroup-app-api.herokuapp.com/api/articles |
