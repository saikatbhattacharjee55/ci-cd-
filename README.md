
# Node.js GitHub Project

A simple REST API built using Node.js and Express.js.
This project includes Docker support and automated tests.

## Features

- REST API development
- Express.js framework
- GET, POST and DELETE methods
- User management API
- Health check endpoint
- Automated testing
- Docker containerization
- Git and GitHub integration

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Docker
- Git
- GitHub

## Project Structure

```text
nodejs-github-project/
├── app.js
├── test.js
├── package.json
├── package-lock.json
├── .gitignore
├── Dockerfile
├── .dockerignore
└── README.md
```

## Requirements

- Node.js 20 or above
- npm
- Git
- Docker (optional)

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-github-project.git
```

Move into the project directory:

```bash
cd nodejs-github-project
```

Install dependencies:

```bash
npm ci
```

## Run Application

```bash
npm start
```

Server will start at:

http://localhost:3000

## Development Mode

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Welcome message |
| GET | /health | Server health |
| GET | /users | Get all users |
| GET | /users/:id | Get user by ID |
| POST | /users | Create user |
| DELETE | /users/:id | Delete user |

## API Testing

Run the automated tests:

```bash
npm test
```

## Docker Instructions

Build Docker image:

```bash
docker build -t nodejs-api .
```

Run Docker container:

```bash
docker run -d -p 3000:3000 --name nodejs-container nodejs-api
```

Check running containers:

```bash
docker ps
```

View container logs:

```bash
docker logs nodejs-container
```

Stop container:

```bash
docker stop nodejs-container
```

Remove container:

```bash
docker rm nodejs-container
```

## Git Commands

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial Node.js project"
```

Rename branch:

```bash
git branch -M main
```

Connect GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nodejs-github-project.git
```

Push to GitHub:

```bash
git push -u origin main
```

## License

This project is licensed under the MIT License.

