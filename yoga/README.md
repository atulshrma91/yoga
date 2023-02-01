# GraphQL Yoga ORM

## Required Plugins

```js
{
  secretManager: true,
  publisher: true,
  subscriber: true,
  database: true,
  configManager: true,
  cache: true,
}
```

## How to run

1. Migrate DB schema to Prisma

   ```bash
     yarn db_pull
   ```

2. Start prisma client

   ```bash
     yarn db_generate
   ```

3. Start the dev server on PORT default 7000
   ```bash
   yarn dev
   ```
