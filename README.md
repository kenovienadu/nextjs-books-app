This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

The api is mocked and is served using `json-server`. Responses from the mock server is from the data in `db.json`

Visit https://github.com/typicode/json-server to get started with `json-server`

<br>

Install `json-server` 
```bash
npm install -g json-server
```


Start the mock api
```bash
json-server --watch db.json
```


Run the development server:

```bash
yarn dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

The following routes are available:
1. Homepage - http://localhost:3002
2. Book Detail View - http://localhost:3002/detail/[id]
3. Basket View - http://localhost:3002/basket

<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
