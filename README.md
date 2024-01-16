# Snippet App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma ORM Setup

This project is using `@prisma/cli` version 2 which has been released as

> install prisma

```bash
npm i prisma
```

> Prisma ORM initilize with datasource provider SQlite

```bash
npx prisma init --datasource-provider sqlite
```

> Model design for snippet apps code snippet below

```bash
model Snippet {
  id        Int      @id @default(autoincrement())
  title     String
  code      String
  createdAt DateTime @default(now())
  updateAt  DateTime @updatedAt
}
```

> Prisma ORM database migration command
> npx generate command Create bridge between your database and your application, enabling you to interact with the database using a type-safe and declarative syntax.
> Provide a migrate name < Add snippets > then it will generate migration name according to this: < randomId >\_add_snippets automatically.

```bash
npx prisma format
npx prisma generate
npx prisma migrate dev
```
