# Full-Stack Web Application with TypeScript Utils

A complete web application ecosystem featuring a NestJS backend, React frontend, and a reusable TypeScript utilities library.

## 🏗️ Project Structure

```
use-npm-package/
├── app/                    # NestJS Backend API
├── frontend/              # React TypeScript Frontend
├── typescript-utils-lib/  # Reusable TypeScript Utilities
└── deployment/            # Docker & Deployment Config
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- MongoDB (or use Docker)

### 1. Backend Setup (NestJS)

```bash
cd app
npm install
npm run start:dev
```

The API will be available at `http://localhost:4000`

### 2. Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

The React app will be available at `http://localhost:3000`

### 3. Using Docker (Recommended)

```bash
cd deployment
docker-compose -f develop-docker-compose.yml up --build
```

This starts both the NestJS app and MongoDB in containers.

## 📦 TypeScript Utils Library

### Installation

```bash
npm install typescript-utils-package
```

### Usage

```typescript
import {
  stringUtils,
  arrayUtils,
  objectUtils,
  numberUtils,
  typeUtils,
} from "typescript-utils-package";

// String utilities
const formatted = stringUtils.capitalize("hello world");

// Array utilities
const unique = arrayUtils.removeDuplicates([1, 2, 2, 3]);

// Object utilities
const merged = objectUtils.deepMerge(obj1, obj2);

// Number utilities
const rounded = numberUtils.roundToDecimal(3.14159, 2);

// Type utilities
const isString = typeUtils.isString("test");
```

### Available Utilities

- **String Utils**: Capitalization, formatting, validation
- **Array Utils**: Deduplication, filtering, transformation
- **Object Utils**: Deep merging, cloning, validation
- **Number Utils**: Rounding, formatting, calculations
- **Type Utils**: Type checking, validation helpers

## 🔧 Development

### Backend Development

```bash
cd app
npm run start:dev    # Development with hot reload
npm run test         # Run tests
npm run test:e2e     # End-to-end tests
npm run build        # Production build
```

### Frontend Development

```bash
cd frontend
npm start            # Development server
npm run build        # Production build
npm test             # Run tests
```

### Utils Library Development

```bash
cd typescript-utils-lib
npm run build        # Build library
npm run test         # Run tests
npm run bundle       # Create bundles
```

## 🐳 Docker Deployment

### Development Environment

```bash
cd deployment
docker-compose -f develop-docker-compose.yml up --build
```

### Production Build

```bash
cd deployment
docker-compose -f production-docker-compose.yml up --build
```

## 📚 API Documentation

### Users Endpoints

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## 🧪 Testing

### Backend Tests

```bash
cd app
npm run test         # Unit tests
npm run test:e2e     # Integration tests
npm run test:cov     # Coverage report
```

### Frontend Tests

```bash
cd frontend
npm test             # Jest tests
```

### Utils Library Tests

```bash
cd typescript-utils-lib
npm test             # Jest tests
```

## 📦 Publishing Utils Library

```bash
cd typescript-utils-lib
npm run build:all    # Build all formats
npm publish          # Publish to npm
```

## 🔗 Environment Variables

### Backend (.env)

```
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://admin:password@localhost:27017/nestjs-app?authSource=admin
```

### Frontend

The frontend proxies API requests to `http://localhost:4000` by default.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see individual package.json files for details.

## 🆘 Support

For issues and questions:

- Backend: Check NestJS documentation
- Frontend: Check React documentation
- Utils Library: Check the library's README in `typescript-utils-lib/`
