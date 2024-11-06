# Next.js 14 and Drizzle Orm Todo App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start by cloning this application by running

```
git clone http://git.telvida.com/Bodewole/next-dripple-todo-app.git
```

Then, run `npm install` to install all the dependencies.

Finally, run the development server:

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

![image](/uploads/24d0c68dc6bef83ac861f2dabeedfcbe/image.png)

For this project, Next.js 14 App router was used, it uses the SSR data fetching, caching, revalidating and also server actions and mutations

### How Drizzle works?

Drizzle ORM is a headless TypeScript ORM which looks and feels simple, lets you do things your way, and is there when you need it. Drizzle is also the only ORM with both relational and SQL-like query APIs, providing you best of both worlds when it comes to accessing your relational data. Drizzle is lightweight, performant, typesafe, non lactose, gluten-free, sober, flexible and serverless-ready by design. 

For this project, the drizzle orm postgres-js was used with drizzle kit. start by running

```js
npm i drizzle-orm postgres
npm i -D drizzle-kit
```
Create a `drizzle.config.js` in the root of your folder for the drizzle configuration like this:

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
```
We need to define our `schema.ts` in the drizzle directory

```ts
drizle/schema.ts
import { pgTable, varchar, serial, boolean, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
```

Then, create a migration directory in your project. Run the command below:

```js
npx drizzle generate
```
This will generate a migration directory that the drizzle will work with

Create a `migrate.ts` in your drizzle directory and this will take the migration config, after which you'll need to run

```js
npx drizzle migrate
```
which will implement each driver and dialect specifically.

That's it!!!

Run `npx drizzle-kit studio` to start your drizzle studio and you'll get something like this:

![image](/uploads/d35c790c74ac0d9822b15ca0f82c7211/image.png)

How the complete application looks like:

https://www.loom.com/share/fcfbe8679f484b20930e7bfb1e285adc?sid=c811192f-c54d-401f-9a1e-7f890b21f6e0
