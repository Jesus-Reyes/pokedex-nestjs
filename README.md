<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Pokedex API con NestJS

API RESTful de Pokémon implementada con NestJS, MongoDB y Docker.

## Descripción

Este proyecto es una API completa para gestionar información de Pokémon con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar). Incluye un sistema de carga masiva de datos (seed) que consume la API pública de [PokeAPI](https://pokeapi.co/).

## Tecnologías utilizadas

- NestJS
- MongoDB
- Docker y Docker Compose
- Mongoose
- TypeScript
- Validación de datos con class-validator y class-transformer
- Configuración de entorno con @nestjs/config y Joi

## Instalación

```bash
# Instalar dependencias
npm install

# Levantar la base de datos MongoDB con Docker
docker-compose up -d
```

## Variables de entorno

Crear un archivo `.env` basado en el archivo `.env.template` con las variables necesarias:

```
MONGODB=mongodb://localhost:27017/nest-pokemon
PORT=3000
DEFAULT_LIMIT=10
```

## Ejecutar la aplicación

```bash
# Modo desarrollo
npm run start:dev

# Modo producción
npm run start:prod
```

## Poblar la base de datos

Para cargar los datos iniciales, visita:

```
http://localhost:3000/api/v2/seed
```

## Endpoints disponibles

- `GET /api/v2/pokemon`: Obtener todos los pokémon (paginados)
- `GET /api/v2/pokemon/:term`: Buscar un pokémon por ID, nombre o número
- `POST /api/v2/pokemon`: Crear un nuevo pokémon
- `PATCH /api/v2/pokemon/:term`: Actualizar un pokémon
- `DELETE /api/v2/pokemon/:id`: Eliminar un pokémon

## Autor

- [Jesus Reyes](https://github.com/Jesus-Reyes)

