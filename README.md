# Taller Middleware

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=220&section=header&text=Taller%20Middleware&fontSize=54&fontAlign=50&fontAlignY=32&animation=twinkling" />
</p>

<p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Inter&size=26&pause=1000&color=4F8DF7&center=true&vCenter=true&width=560&lines=API+de+pedidos+con+control+de+stock;Middleware+con+Express%2C+Sequelize+y+PostgreSQL;Transacciones+seguras+para+procesar+órdenes" alt="Typing SVG" /></a>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

<p align="center">
<img src="https://img.shields.io/badge/estado-listo_para_portafolio-2ea043" />
<img src="https://img.shields.io/badge/tipo-backend%20%2F%20middleware-informational" />
<img src="https://img.shields.io/badge/licencia-ISC-lightgrey" />
</p>

---

## Descripción del Proyecto

**Taller Middleware** es una API REST de backend enfocada en el procesamiento de pedidos y el control de inventario. La aplicación expone un flujo simple pero sólido para crear órdenes, validar disponibilidad de stock y ejecutar la operación dentro de una transacción de base de datos.

El proyecto está pensado como una base limpia para portafolio, demostrando conceptos clave como:

- arquitectura por capas con rutas, controladores y modelos
- conexión a PostgreSQL mediante Sequelize
- transacciones para mantener consistencia de datos
- validaciones de negocio antes de confirmar una orden
- despliegue local con Docker Compose

---

## Características Principales

| Componente | Función |
| --- | --- |
| API REST | Expone endpoints para procesar pedidos |
| Control de stock | Valida existencia y disponibilidad del producto |
| Transacciones | Evita inconsistencias al actualizar inventario |
| PostgreSQL | Persistencia relacional con Sequelize |
| Docker | Entorno local reproducible para la base de datos |

---

## Tecnologías Utilizadas

<p align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
</p>

---

## Estructura del Proyecto

```text
src/
├── app.js
├── config/
│   └── database.js
├── controllers/
│   └── orderController.js
├── models/
│   ├── index.js
│   ├── Order.js
│   └── Product.js
└── routes/
    └── orderRoutes.js
```

---

## Requisitos Previos

- Node.js 18 o superior
- npm
- Docker y Docker Compose
- PostgreSQL accesible desde el contenedor o desde tu entorno local
- Herramienta para probar APIs como Postman, Insomnia o Thunder Client

---

## Instalación y Configuración

### 1. Clonar o abrir el proyecto

```bash
cd taller-middleware
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_NAME=ecommerce_db
DB_USER=user
DB_PASSWORD=password
DB_HOST=localhost
PORT=3000
```

Si tu entorno usa otro host, usuario o contraseña, ajusta estos valores según tu configuración.

### 4. Levantar PostgreSQL con Docker

```bash
docker compose up -d
```

Si tu versión usa el comando clásico, también funciona:

```bash
docker-compose up -d
```

### 5. Iniciar la aplicación

```bash
npm run dev
```

La API quedará disponible en:

```text
http://localhost:3000
```

---

## Flujo de la API

1. El servidor recibe una solicitud para crear un pedido.
2. Se busca el producto por su `productId`.
3. Se valida que exista y que tenga stock suficiente.
4. Se descuenta el inventario dentro de una transacción.
5. Se confirma la operación y se responde con el resultado.

Este enfoque ayuda a evitar errores de concurrencia y mantiene el inventario consistente.

---

## Endpoint Disponible

### Crear pedido

```http
POST /api/orders
```

#### Body JSON

```json
{
  "productId": 1,
  "quantity": 2
}
```

#### Respuestas posibles

- `201 Created`: pedido creado exitosamente
- `400 Bad Request`: stock insuficiente
- `404 Not Found`: producto no encontrado
- `500 Internal Server Error`: error inesperado al procesar la orden

#### Ejemplo de respuesta exitosa

```json
{
  "message": "Pedido creado exitosamente"
}
```

---

## Modelos de Datos

### Product

- `name`: nombre del producto
- `price`: precio unitario
- `stock`: cantidad disponible

### Order

- `productId`: referencia al producto
- `quantity`: unidades solicitadas
- `status`: estado inicial del pedido, por defecto `pending`

---

## Arquitectura

El proyecto usa una estructura simple y mantenible:

- `routes/`: define las rutas HTTP
- `controllers/`: concentra la lógica de negocio
- `models/`: define los modelos de Sequelize
- `config/`: centraliza la conexión a la base de datos

Esta separación facilita escalar el proyecto hacia más módulos, como catálogo, clientes o facturación.

---

## Pruebas Manuales

Para verificar el flujo principal, puedes usar este escenario:

1. Crear un producto con stock disponible en la base de datos.
2. Enviar una petición `POST /api/orders` con un `productId` válido.
3. Confirmar que el stock disminuye correctamente.
4. Repetir la solicitud con una cantidad mayor al stock para validar el error `400`.

---

## Variables de Entorno

| Variable | Descripción |
| --- | --- |
| `DB_NAME` | Nombre de la base de datos |
| `DB_USER` | Usuario de PostgreSQL |
| `DB_PASSWORD` | Contraseña de PostgreSQL |
| `DB_HOST` | Host de conexión |
| `PORT` | Puerto del servidor Express |

---

## Mejoras Futuras

- agregar autenticación y autorización
- incluir CRUD completo para productos y órdenes
- documentar la API con Swagger
- añadir validaciones de entrada más robustas
- crear pruebas automatizadas para el flujo de pedidos

---

## Contribución

Si quieres mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio.
3. Realiza tus ajustes y valida el comportamiento.
4. Abre un pull request con una descripción clara.

---

## Licencia

Este proyecto está publicado bajo la licencia ISC. Consulta el archivo `package.json` para más detalles.

---

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer" />
</p>

