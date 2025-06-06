# Chatbot Project

Este proyecto es un chatbot diseñado para la Biblioteca de la Facultad de Filosofía y Letras, desarrollado utilizando React para el frontend, Node.js para el backend y Rasa para la gestión de la inteligencia artificial.

## Estructura del Proyecto

El proyecto está organizado en tres carpetas principales:

- **backend**: Contiene la lógica del servidor y las rutas para manejar las solicitudes del chatbot.
- **frontend**: Contiene la aplicación React que interactúa con el usuario.
- **rasa**: Contiene la configuración y los datos necesarios para el modelo de Rasa.

## Instalación

Para instalar las dependencias del proyecto, navega a las carpetas `backend` y `frontend` y ejecuta:

```bash
# En la carpeta backend
cd backend
npm install

# En la carpeta frontend
cd ../frontend
npm install
```

## Ejecución

Para ejecutar el proyecto, primero inicia el backend y luego el frontend:

1. Inicia el backend:

```bash
cd backend
node app.js
```

2. Inicia el frontend:

```bash
cd ../frontend
npm start
```

## Rasa

Para entrenar el modelo de Rasa, navega a la carpeta `rasa` y ejecuta:

```bash
cd rasa
rasa train
```

Para iniciar el servidor de Rasa, ejecuta:

```bash
rasa run
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.