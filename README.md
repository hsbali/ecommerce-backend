# NestJS E-Commerce Backend

This project uses

- [NestJS](https://nestjs.com/) - A progressive Node.js framework,
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM,

## Installation

### Prerequisites

- Download and Install the current [Node.js](https://nodejs.org/en/) LTS version.
- Download and Install the latest [PostgreSQL](https://www.postgresql.org/download/) version.

### After resolving prerequisites

- Clone the `master` branch for the latest stable version.
- Install dependencies with `npm install`.
- Add `.env` file to the root folder. And the following variables in the `.env` file.
  - `DATABASE_URL` used by Prisma to connect to the Postgres database. Connection string should be in the following pattern.
    - `postgresql://<username>:<password>@<host>:<port>/<database_name>?schema=public`
  - `REFRESH_TOKEN_SECRET` used for JWT Refresh tokens.
  - `ACCESS_TOKEN_SECRET` used for JWT Access tokens.
- Migrate the Prisma schema to your local Postgres database with `npx prisma migrate dev`

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```
