# DocTube API

_REST API for the video library web application [doctube](https://github.com/shraddha319/doctube)._

Built using this [REST API boilerplate](https://github.com/shraddha319/REST-API-boilerplate)

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

## Features

- **Error Handling**: centralized error handling mechanism
- **Authentication and Authorization**: using [JWT](https://jwt.io)
- **NoSQL database**: [MongoDB](https://www.mongodb.com)
- **Object Data Modeling**:using [Mongoose](https://mongoosejs.com)
- **Validation**: using [Joi](https://github.com/sideway/joi)
- **CORS**: Cross-Origin Resource Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Environment Variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Dependency Management**: using [npm](https://www.npmjs.com)
- **Linting**: using [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## API Documentation

List of available endpoints:

### Video routes:

`GET /videos` - get videos\
`GET /videos/:videoId` - get video by Id

### Auth routes:

`POST /auth/login` - login existing user

### User routes:

`POST /users` - create user

Below routes require `Authentication` token set in the request header:

`GET /users/:userId` - get user\
`POST /users/:userId` - update user\
`DELETE /users/:userId` - delete user


### Playlist routes:

`GET /users/:userId/playlists` - get user playlists\
`POST /users/:userId/playlists` - post playlist\
`GET /users/:userId/playlists/:playlistId` - get user playlist\
`POST /users/:userId/playlists/:playlistId` - update user playlist\
`DELETE /users/:userId/playlists/:playlistId` - delete user playlist


## License

[MIT](LICENSE)
