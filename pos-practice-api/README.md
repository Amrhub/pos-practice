# POS Practice API

> POS Practice API
> This is a RESTful API for POS Practice.

## Built With

- Nestjs a progressive framework for building and deploying applications based on express.
- Jest for testing

### Prerequisites

`node.js`
`npm/yarn/pnpm`

### Install

```shell
    npm install # install dependencies
```

### Usage

```shell
    npm start # start the server
```

There are two endpoints available:

```shell
    GET /words # returns a list of words with the constraint (query param numberOfWords is optional and defaults to 10)
    GET /rank # returns rank of user for a given score (expects a query param of score)
```

### Tests

There are unit tests for each service.

```shell
    npm test # run tests
```

## Author

👤 **Amr Ahmed**

- GitHub: [@Amrhub](https://github.com/Amrhub)
- LinkedIn: [Amr Ahmed](https://linkedin.com/in/amr-abdelrehim-ahmed)
