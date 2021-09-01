# DocTube API

## Quick Start

Get started with the below steps:

1. Clone the repo:

```bash
git clone https://github.com/shraddha319/doctube-api.git
cd doctube-api
```

2. Install the dependencies

```bash
npm install
```

3. Set the environment variables

```bash
cp .env.example .env

# modify the environment variables in .env if required
```

## Environment Varibles

The environment variables can be found and modified in the .env file.

## Commands

The following commands can be found under `scripts` in `package.json`.

Run locally:

```bash
npm run dev
```

Run in production:

```bash
npm run start
```

Testing:

```bash
# run all tests
npm run test

# run all tests in watch mode
npm run test:watch

# run test coverage
npm run test:coverage
```

Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix
```

## API Documentation

### API Endpoints

List of available endpoints:

#### Auth routes:

`GET /auth/verify` -\
`POST /auth/login` -

#### User routes:

`POST /users` - registers a new user\

## License

[MIT](LICENSE)
