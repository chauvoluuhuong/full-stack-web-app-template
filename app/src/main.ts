import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from the 'public' directory
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/', // Serve files from root path
  });

  // Handle React Router - serve index.html for all non-API routes
  app.use('*', (req, res, next) => {
    // Skip API routes
    if (
      req.originalUrl.startsWith('/api') ||
      req.originalUrl.startsWith('/users')
    ) {
      return next();
    }

    // Serve React app's index.html for all other routes
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  await app.listen(3000);
}
bootstrap();
