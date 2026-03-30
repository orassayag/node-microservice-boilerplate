# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Redis:
   - Install Redis locally or use a Redis cloud instance
   - Update Redis configuration in `config/env.json`

4. Configure environment (optional):
   - Create a `.env` file in the root directory
   - Set environment variables:
     ```
     PORT=3000
     HOST=localhost
     REDIS_HOST=localhost
     REDIS_PORT=6379
     REDIS_EXPIRATION=3600
     ```

5. Build the project:
   ```bash
   npm run tsc
   ```

## Configuration

Edit `config/env.json` for default configuration:

```json
{
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "redis": {
    "host": "localhost",
    "port": 6379,
    "expiration": 3600
  }
}
```

Configuration priority:
1. Environment variables (highest)
2. `config/env.json` (fallback)

## Running the Application

### Development Mode
Runs TypeScript compilation in watch mode with automatic restart:
```bash
npm run dev
```

### Production Mode
Compiles and starts the server:
```bash
npm start
```

## Available Scripts

### Build
Compiles TypeScript to JavaScript:
```bash
npm run tsc
```

### Test
Runs Jest test suite:
```bash
npm test
```

### Lint
Checks and fixes code with ESLint:
```bash
npm run eslint
```

### Format
Formats code using Prettier:
```bash
npm run prettier
```

### Beautify
Runs both ESLint and Prettier:
```bash
npm run beautify
```

### Release
Runs full test suite:
```bash
npm run release
```

### Test Release
Installs dependencies and runs release:
```bash
npm run test-release
```

## API Endpoints

### Health Check
```
GET /health
```
Returns server health status.

### Get Dogs
```
GET /getDogs?hash=<hash>
```
Retrieves all dogs stored under the specified hash.

**Query Parameters:**
- `hash` (string, required): The hash key to retrieve dogs from Redis

**Response:**
```json
{
  "dogs": {
    "dog1": "id1",
    "dog2": "id2"
  }
}
```

### Set Dog
```
GET /setDog?hash=<hash>&dog=<dogName>&dogId=<dogId>
```
Stores a dog with its ID under the specified hash.

**Query Parameters:**
- `hash` (string, required): The hash key to store the dog in Redis
- `dog` (string, required): The dog name
- `dogId` (string, required): The dog ID

**Response:**
Empty response with status 200.

## Redis Structure

The application uses Redis Hash data structure:
- **Key**: Custom hash provided in requests
- **Fields**: Dog names
- **Values**: Dog IDs
- **Expiration**: Configured in `config/env.json` (default: 3600 seconds)

## Health Monitoring

The application includes automatic health checks:
- Runs every 5 seconds
- Writes and deletes a test key in Redis
- Logs success/failure to monitor Redis connectivity

## Error Handling

All errors are caught and processed through the central error handling middleware:
- Returns consistent error responses
- Logs errors with Pino logger
- Prevents application crashes

## Development

### Adding New Modules

1. Create a new folder under `src/modules/`
2. Add `controllers/`, `routes/`, and `__tests__/` subfolders
3. Implement your business logic in controllers
4. Define routes and register them in `src/app.ts`
5. Add tests for your module

### Project Structure

```
node-microservice-boilerplate/
├── src/
│   ├── modules/          # Feature modules
│   │   ├── common/       # Common features (health check)
│   │   └── dog/          # Example dog module
│   ├── middlewares/      # Express middleware
│   ├── redis/            # Redis client configuration
│   ├── logger/           # Pino logger setup
│   ├── error/            # Custom error classes
│   ├── types/            # TypeScript type definitions
│   └── app.ts            # Main application entry
├── config/               # Configuration files
├── dist/                 # Compiled JavaScript output
└── declarations/         # TypeScript declaration files
```

### Testing

Tests are located in `__tests__/` folders within each module:
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Logging

The application uses Pino for structured logging:
- `log.info()` - Informational messages
- `log.warn()` - Warning messages
- `log.error()` - Error messages

Pretty printing is enabled for development readability.

## Troubleshooting

### Redis Connection Issues
- Verify Redis is running: `redis-cli ping`
- Check Redis host and port in configuration
- Review logs for connection errors

### TypeScript Compilation Errors
- Run `npm run tsc` to see detailed errors
- Ensure all dependencies are installed
- Check `tsconfig.json` for proper configuration

### Port Already in Use
- Change the port in `config/env.json` or set `PORT` environment variable
- Kill the process using the port: `lsof -ti:3000 | xargs kill`

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
