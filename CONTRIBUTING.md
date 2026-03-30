# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/node-microservice-boilerplate/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, Redis version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **TypeScript** with strict type checking
- **ESLint** for code quality
- **Prettier** for code formatting

Before submitting:
```bash
# Check for linting errors
npm run eslint

# Format your code
npm run prettier

# Build to ensure no TypeScript errors
npm run tsc

# Run tests
npm test
```

### Coding Standards

1. **Type safety**: Avoid using `any` - define proper types or interfaces
2. **Error handling**: Use try-catch blocks and pass errors to the error middleware
3. **Async/await**: Prefer async/await over callbacks or raw promises
4. **Logging**: Use the pino logger (`log.info`, `log.warn`, `log.error`) consistently
5. **Environment variables**: Use `config/env.ts` for configuration, never hardcode values
6. **Security**: Never commit secrets, API keys, or credentials

### Adding New Features

When adding new features:
1. Create appropriate types/interfaces in type definition files
2. Add service logic in separate controller files
3. Register routes in route files
4. Add tests for new functionality
5. Update documentation

### Project Structure

Follow the existing modular structure:
- `/src/modules/[module-name]/controllers/` - Business logic
- `/src/modules/[module-name]/routes/` - Route definitions
- `/src/middlewares/` - Express middleware
- `/src/types/` - TypeScript type definitions
- `/config/` - Configuration files

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
