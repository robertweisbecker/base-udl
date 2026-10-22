# base-udl

A Next.js monorepo with shadcn/ui.

## Local development

Use Node.js 24.22.1 or a newer 24.x release (`nvm install && nvm use` selects the version in `.nvmrc`) before installing dependencies or starting the development server. This includes the Node.js security fixes for [CVE-2026-111497](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases). The `engines.node` requirement describes the supported range; npm may only warn on an unsupported runtime. Vercel selects the major version and manages runtime patches; this pin does not prove the patch version of a deployed function. See the [Vercel advisory](https://vercel.com/kb/bulletin/node-js-security-advisory) for rollout status.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
