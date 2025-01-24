# Vue 3 Admin Dashboard

A Vue 3 admin dashboard with authentication, dynamic routing, and example components. This project demonstrates best practices for building a modern Vue.js application with authentication and protected routes.

## Dependencies

This frontend project requires the Laravel backend API which can be found at:
[https://github.com/davisa0876/laravelProjectAPI](https://github.com/davisa0876/laravelProjectAPI)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Laravel backend API running on http://localhost:8000
- MySQL/MariaDB database

## Installation

### 1. Backend Setup (Laravel API)

First, clone and setup the Laravel backend:

```bash
# Clone the Laravel backend
git clone https://github.com/davisa0876/laravelProjectAPI
cd laravelProjectAPI

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure your database in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8080
DB_DATABASE=contenthubDB
DB_USERNAME=UserProjet
DB_PASSWORD=contentUser1Laravel!23

# Run migrations
php artisan migrate

# Start the Laravel server
php artisan serve
```

### 2. Frontend Setup (Vue Admin)

```bash
# Clone this repository
git clone <repository-url>
cd admin

# Install dependencies
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:8000/api" > .env

# Start development server
npm run dev
```

## Features

- 🔐 Authentication (Login/Register)
- 🛡️ Protected Routes
- 🎨 Tailwind CSS Styling
- 📱 Responsive Design
- 🔄 Vuex State Management
- 📝 Form Validation
- 🚦 Route Guards
- 🌐 API Integration
- 📚 Multiple Example Components
- 🎯 Custom Directives
- 🔧 Component Lifecycle Examples

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Authentication

The project includes a complete authentication system:
- Login
- Register
- Protected Routes
- Automatic Token Management
- Persistent Sessions
- Logout Functionality

## Example Components

The project includes 19 example components demonstrating various Vue.js features:
1. Hello World
2. Style Tag Usage
3. Props Passing
4. Type Checking
5. Event Emitting
6. Props as Events
7. Complex Type Checking
8. Provide/Inject Part 1
9. Provide/Inject Part 2
10. Basic Slots
11. Named Slots
12. Component Lifecycle
13. Lifecycle Usage
14. Dynamic Components
15. Keep Alive
16. Teleport
17. Custom Directives
18. Directive Hooks
19. Local Directives

## API Integration

The project uses Axios for API communication with features like:
- Request/Response Interceptors
- Token Management
- Error Handling
- Base URL Configuration

## State Management

Vuex is used for state management with modules:
- Authentication State
- User Management
- Token Handling

## Development

To start development:

1. Ensure the backend API is running
2. Start the development server:

```bash
npm run dev
```

3. Visit http://localhost:5173 (or the URL shown in your terminal)

## Building for Production

```bash
npm run build
```

## Testing

```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
