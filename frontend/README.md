# Chatbot Project - Frontend Documentation

Este proyecto es una aplicación de chatbot desarrollada con React en el frontend y Node.js en el backend, utilizando Rasa para el procesamiento del lenguaje natural. El chatbot está diseñado para ayudar a los usuarios de la Biblioteca de la Facultad de Filosofía y Letras.

## Estructura del Proyecto

- **frontend/**: Contiene la aplicación React.
  - **public/**: Archivos estáticos, incluyendo `index.html`.
  - **src/**: Código fuente de la aplicación React.
    - **components/**: Componentes de React, incluyendo el componente `Chatbot`.
    - `App.js`: Componente principal que estructura la aplicación.
    - `index.js`: Punto de entrada de la aplicación React.

- **backend/**: Contiene la aplicación Node.js.
  - `app.js`: Punto de entrada para el servidor Express.
  - `routes/chatbot.js`: Define las rutas para la API del chatbot.

- **rasa/**: Contiene la configuración y datos para el chatbot Rasa.
  - **actions/**: Definiciones de acciones personalizadas.
  - **data/**: Datos de entrenamiento para el modelo NLU y historias de conversación.
  - `domain.yml`: Define el dominio del chatbot.
  - `config.yml`: Configuración del proyecto Rasa.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd chatbot-project
   ```

2. Instala las dependencias del frontend:
   ```
   cd frontend
   npm install
   ```

3. Instala las dependencias del backend:
   ```
   cd ../backend
   npm install
   ```

4. Configura y entrena el modelo Rasa:
   ```
   cd ../rasa
   rasa train
   ```

## Ejecución

1. Inicia el servidor backend:
   ```
   cd backend
   node app.js
   ```

2. Inicia la aplicación frontend:
   ```
   cd ../frontend
   npm start
   ```

3. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Uso

El chatbot está diseñado para responder preguntas relacionadas con la Biblioteca de la Facultad de Filosofía y Letras. Puedes interactuar con él a través de la interfaz de usuario proporcionada en la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request en el repositorio.

## Licencia

Este proyecto está bajo la licencia MIT.