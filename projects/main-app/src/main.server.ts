import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// ✅ Bản đúng cho SSR (phải có context)
const bootstrap = (context: BootstrapContext) => {
  return bootstrapApplication(
    App,
    {
      ...config,
    },
    context,
  );
};

export default bootstrap;
