# Taller Middleware

Este proyecto es una aplicación de Node.js que utiliza Express y Sequelize para gestionar un sistema de pedidos en un entorno de base de datos PostgreSQL. A continuación se detallan los componentes principales del proyecto y cómo configurarlo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js**: Asegúrate de tener instalada la última versión LTS.
- **Docker**: Necesario para ejecutar la base de datos PostgreSQL en un contenedor.
- **Docker Compose**: Para gestionar múltiples contenedores de Docker.
- **Un cliente de API**: Como Postman o Insomnia para probar los endpoints.


## Instalación

1. Clona el repositorio o descarga el proyecto.
2. Navega a la carpeta del proyecto:
   ```
   cd taller-middleware
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Configura las variables de entorno en el archivo `.env`:
   ```
   DB_NAME=ecommerce_db
   DB_USER=user
   DB_PASSWORD=password
   DB_HOST=localhost
   ```
5. Inicia la base de datos con Docker:
   ```
   docker-compose up -d
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm run dev
```

Esto iniciará el servidor en `http://localhost:3000`.

## Endpoints

- **POST /api/orders**: Crea un nuevo pedido. Requiere un `productId` y `quantity` en el cuerpo de la solicitud.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request.

