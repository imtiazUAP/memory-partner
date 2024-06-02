# Memory Partner

Memory Partner is a Dockerized environment with a database, backend, and frontend application. It is designed to manage memories with a comprehensive and user-friendly interface.

## Project Structure

```
.
├── .env
├── client
│   ├── .eslintrc.json
│   ├── components
│   │   ├── Banner.tsx
│   │   ├── CkEditor.tsx
│   │   ├── FullScreenHeader.tsx
│   │   ├── Login.tsx
│   │   ├── MobileHeader.tsx
│   │   ├── MyProfile.tsx
│   │   ├── Sidebar.tsx
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── pages
│   │   ├── about.tsx
│   │   ├── api
│   │   │   └── hello.ts
│   │   ├── index.tsx
│   │   ├── memory.tsx
│   │   ├── new_memory.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   ├── public
│   │   ├── favicon.ico
│   │   ├── next.svg
│   │   ├── thirteen.svg
│   │   ├── vercel.svg
│   ├── README.md
│   ├── store.tsx
│   ├── styles
│   │   ├── editor.css
│   │   ├── globals.css
│   │   ├── Home.module.css
│   │   ├── layout.css
│   ├── tsconfig.json
├── docker-compose.yml
├── memoryPartnerDb
│   ├── 00-create_db.sql
│   ├── 01-create-table-users.sql
│   ├── 02-populate-users-table.sql
├── package-lock.json
├── package.json
├── README.md
├── server
│   ├── .eslintrc.js
│   ├── .prettierrc
│   ├── dist
│   │   └── main.js
│   ├── Dockerfile
│   ├── entities
│   │   ├── memories.entity.ts
│   │   ├── users.entity.ts
│   ├── migrations
│   │   └── 1680608251780-Create_Memories.ts
│   ├── nest-cli.json
│   ├── ormConfig.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── src
│   │   ├── app.controller.spec.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── components
│   │   ├── main.ts
│   │   ├── memories
│   │   │   ├── dto
│   │   │   │   └── memories.dto.ts
│   │   │   ├── memories.cotroller.ts
│   │   │   ├── memories.module.ts
│   │   │   ├── memories.service.ts
│   ├── test
│   │   ├── app.e2e-spec.ts
│   │   ├── jest-e2e.json
│   ├── tsconfig.build.json
│   ├── tsconfig.json
│   ├── webpack-hmr.config.js
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Node.js

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/imtiazUAP/memory-partner.git
   cd memory-partner
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```sh
   MYSQLDB_PASSWORD=your_mysql_root_password
   MYSQLDB_LOCAL_PORT=3306
   MYSQLDB_DOCKER_PORT=3306
   NESTJS_APP_LOCAL_PORT=4000
   NESTJS_APP_DOCKER_PORT=4000
   NEXTJS_APP_LOCAL_PORT=3000
   NEXTJS_APP_DOCKER_PORT=3000
   ```

### Usage

#### Building and Starting Services

- **Build backend:**
  ```sh
  npm run build:back
  ```

- **Build frontend:**
  ```sh
  npm run build:front
  ```

- **Start database:**
  ```sh
  npm run start:db
  ```

- **Start backend:**
  ```sh
  npm run start:back
  ```

- **Start frontend:**
  ```sh
  npm run start:front
  ```

- **Stop and remove containers and volumes:**
  ```sh
  npm run clean
  ```

### Project Scripts

- **Build Backend:**
  ```sh
  npm run build:back
  ```

- **Build Frontend:**
  ```sh
  npm run build:front
  ```

- **Start Database:**
  ```sh
  npm run start:db
  ```

- **Start Backend:**
  ```sh
  npm run start:back
  ```

- **Start Frontend:**
  ```sh
  npm run start:front
  ```

- **Clean Up:**
  ```sh
  npm run clean
  ```

### Technologies Used
## Frontend
- Next.js: A React framework for server-rendered or statically-exported React applications.
- React: A JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds static typing.
- Material-UI: A popular React UI framework.
- Redux: A predictable state container for JavaScript apps.
- CKEditor: A modern rich text editor.

## Backend
- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeORM: An ORM for TypeScript and JavaScript (ES7, ES6, ES5) based on DataMapper, Unit of Work, and Active Record patterns.
- MySQL: A popular open-source relational database management system.

## Development & Deployment
- Docker: A platform for developing, shipping, and running applications in containers.
- Docker Compose: A tool for defining and running multi-container Docker applications.

### Docker Compose Configuration

The `docker-compose.yml` sets up three services:
- **memoryPartnerDb**: MySQL database service
- **server**: NestJS backend service
- **client**: Next.js frontend service

### Environment Variables

Ensure your `.env` file is correctly set up with the required environment variables as mentioned in the Installation section.

## Author

- **Imtiaz Ahmed** - [ImtiazUAP](https://github.com/imtiazUAP)

## License

This project is licensed under the ISC License.
