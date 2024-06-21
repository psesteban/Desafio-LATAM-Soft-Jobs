# Desafio Server JWT Bcrypt

Este proyecto es un servidor creado como parte del desafío de la Academia Desafío Latam. Utiliza JSON Web Tokens (JWT) para autenticación y bcrypt para el cifrado de contraseñas, proporcionando una base segura para el desarrollo de aplicaciones web.

## Descripción

El servidor permite la autenticación de usuarios mediante JWT y protege las contraseñas utilizando bcrypt. Está construido con Node.js y Express, y se conecta a una base de datos PostgreSQL para la gestión de usuarios. Además, se configura con variables de entorno y permite el uso de CORS para facilitar la integración con aplicaciones front-end.

### Funcionalidades

- Registro de usuarios con validación de datos.
- Autenticación de usuarios mediante JWT.
- Middleware para verificación de JWT en rutas protegidas.
- Middleware para registro de solicitudes al servidor.
- Manejo de credenciales de usuario y roles.

## Tecnologías Utilizadas

- Node.js
- Express
- bcryptjs
- cors
- dotenv
- jsonwebtoken
- pg (PostgreSQL client for Node.js)
- pg-format

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/desafio_server_jwt_bcrypt.git
   cd desafio_server_jwt_bcrypt
   ```
2. Instala las dependencias:

```bash
npm install
```
3. Crea un archivo .env en la raíz del proyecto y configura las siguientes variables de entorno:
```bash

PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=softjobs
DB_PORT=5432
JWT_SECRET=tu_secreto_jwt
```
4. Configura la base de datos PostgreSQL:
-sql-
```bash
CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);
```
## Inicia el servidor:

```bash
npm start
```

## Uso
A. Endpoints
- Registro de usuario: POST /usuarios
- Middleware de validación: registerValidator

💻Cuerpo de la solicitud:
```
{
  "email": "example_user@example.com",
  "password": "example_password",
  "rol": "admin",
  "lenguage": "en"
}
```
- Inicio de sesión: POST /login
- Middleware de validación: userValidator
💻Cuerpo de la solicitud:
```
{
  "email": "example_user@example.com",
  "password": "example_password"
}
```
➕
- Obtener credenciales: GET /credenciales
 Función: getCredenciales
- Crear nuevo usuario: POST /usuarios
 Función: postNuevoUsuario
- Obtener datos del usuario autenticado: GET /datos
 Función: getDatos
➕
________________________________________________________
## Contribuciones
Este proyecto se desarrolló como parte del programa de la Academia Desafío Latam, agradecimientos a Raúl Farias y Albamar Flores. Se aceptan contribuciones y mejoras. Si deseas colaborar, por favor realiza un fork del repositorio, crea una nueva rama para tu característica o corrección, y luego realiza un pull request.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
