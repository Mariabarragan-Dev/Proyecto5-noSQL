# Proyecto5-noSQL

API REST desarrollada con Node.js, Express y MongoDB (Mongoose) para la gestión de películas (Movies) y cines (Cinemas), con CRUD completo y manejo de errores.

## Requisitos previos

- Node.js instalado
- MongoDB corriendo localmente (o una URI de MongoDB Atlas)

## Instalación

1. Clona el repositorio y entra en la carpeta:
   `git clone https://github.com/Mariabarragan-Dev/Proyecto5-noSQL.git` y luego `cd Proyecto5-noSQL`
2. Instala las dependencias con `npm install`
3. Crea un archivo `.env` en la raíz del proyecto con este contenido:
   `PORT=3000` y `MONGODB_URI=mongodb://localhost:27017/movies_db`
4. Arranca el servidor con `npm run dev`
5. El servidor estará disponible en `http://localhost:3000`

## Endpoints

### Movies

| Método | Ruta          | Descripción                  |
|--------|---------------|-------------------------------|
| GET    | /movies       | Listar todas las películas    |
| GET    | /movies/:id   | Obtener una película por id   |
| POST   | /movies       | Crear una nueva película      |
| PUT    | /movies/:id   | Modificar una película        |
| DELETE | /movies/:id   | Eliminar una película         |

### Cinemas

| Método | Ruta          | Descripción                  |
|--------|---------------|-------------------------------|
| GET    | /cinemas      | Listar todos los cines        |
| GET    | /cinemas/:id  | Obtener un cine por id        |
| POST   | /cinemas      | Crear un nuevo cine           |
| PUT    | /cinemas/:id  | Modificar un cine             |
| DELETE | /cinemas/:id  | Eliminar un cine              |

## Manejo de errores

La API gestiona los siguientes casos de error de forma controlada, devolviendo respuestas JSON claras:

- **400** — Id con formato inválido o datos que no cumplen las validaciones del modelo.
- **404** — Recurso no encontrado (película, cine, o ruta inexistente).
- **500** — Error interno del servidor.

## Pruebas

En las carpetas `CRUD-movies/`, `CRUD-cinemas/` y `errores/` se incluyen capturas de las pruebas realizadas con Postman, incluyendo el arranque del proyecto y los distintos casos de éxito y error.