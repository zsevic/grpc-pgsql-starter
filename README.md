# grpc-pgsql-starter

> gRPC boilerplate powered by Node.js, Express, PostgreSQL

### :wrench: Setup

```bash
git clone https://github.com/zsevic/grpc-pgsql-starter
cd grpc-pgsql-starter
cp .env.sample .env # change values
yarn
yarn client:dev
yarn server:dev
```

### :rotating_light: Testing

```bash
yarn server:dev
yarn test
```

### :arrow_right: Usage

```bash
# list products
curl http://localhost:3000/api/products

# read product
curl http://localhost:3000/api/products/1

# create product
curl -X POST -d '{ "name": "lamp", "price": "29.99" }' -H "Content-Type: application/json" http://localhost:3000/api/products

# update product
curl -X PUT -d '{ "name": "lamp", "price": "449.99" }' -H "Content-Type: application/json" http://localhost:3000/api/products/3

# delete product
curl -X DELETE http://localhost:3000/api/products/3
```
