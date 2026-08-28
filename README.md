# Next.js Base Template

This repository is a technical base template for starting Next.js projects. It defines architecture, routing, styling, and dependency conventions. The product domain and final feature set are intentionally left to the team that clones the template.

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Build and lint:

```bash
pnpm build
pnpm lint
```

## Core Conventions

This template uses:

- Next.js 16 with the App Router.
- TypeScript strict mode.
- Tailwind CSS v4.
- shadcn UI with CSS variables.
- A centralized typed route helper in `src/shared/routes.ts`.
- Feature-first organization for page components and business UI.

## App Router Rules

The `src/app` folder is only for Next.js App Router files.

Allowed files include:

- `page.tsx`
- `layout.tsx`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `route.ts`
- Route groups and segment folders

Do not place full page implementations, feature components, stores, schemas, or business logic directly inside `src/app`.

## Page Component Organization

Every `page.tsx` should be a thin route adapter. It should read route-only values and pass them to a named page component outside `src/app`.

Example:

```tsx
import { UserPage } from "@/components/user/UserPage";

type Props = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { tab } = await searchParams;

  return <UserPage tab={tab} />;
}
```

Page components should use descriptive names:

- `UserPage.tsx`
- `PaymentsPage.tsx`
- `PaymentsSettingsPage.tsx`
- `PaymentItemPage.tsx`

## File Structure

Organize by business capability first. Avoid global buckets like `components/pages` for unrelated page components.

Recommended structure:

```txt
src/
  app/
    page.tsx
    user/
      page.tsx
    payments/
      page.tsx
      settings/
        page.tsx
      [paymentId]/
        page.tsx
        items/
          [itemId]/
            page.tsx

  components/
    ui/
      button.tsx
    user/
      UserPage.tsx
      UserProfileCard.tsx
      UserSettingsForm.tsx
    payments/
      PaymentsPage.tsx
      PaymentsSettingsPage.tsx
      PaymentDetailPage.tsx
      PaymentItemPage.tsx
      PaymentMethodCard.tsx

  shared/
    routes.ts

  lib/
    utils.ts
```

For larger projects, introduce feature-local architecture folders:

```txt
src/
  features/
    payments/
      domain/
      application/
      infrastructure/
      presentation/
```

Clean architecture rule:

```txt
Domain code must not depend on React, Next.js, shadcn, or browser APIs.
UI can depend on application/domain contracts.
Shared utilities must not contain feature-specific business logic.
```

## Typed Routes

Next.js `typedRoutes` is enabled in `next.config.ts`.

The project also provides `src/shared/routes.ts`. This is the only place where route strings should be manually written.

Use it in links:

```tsx
import Link from "next/link";
import { routes } from "@/shared/routes";

export function PaymentsLink() {
  return <Link href={routes.payments.page()}>Payments</Link>;
}
```

Use it with dynamic routes:

```tsx
routes.payments.itemPage({
  paymentId: "pay_123",
  itemId: "item_456",
});
```

Use it with router navigation:

```tsx
import { useRouter } from "next/navigation";
import { routes } from "@/shared/routes";

const router = useRouter();

router.push(routes.payments.settingsPage());
```

Naming convention:

```txt
routes.<feature>.page()
routes.<feature>.detailPage({ id })
routes.<feature>.settingsPage()
routes.<feature>.<specificName>Page(params)
```

Do not manually type route paths in `Link`, `router.push`, `router.replace`, `router.prefetch`, or `redirect`. Add or update the route in `src/shared/routes.ts` instead.

## Color System

The shadcn/Tailwind theme lives in `src/app/globals.css`.

The template uses primitive brand palettes that map into shadcn semantic tokens.

Primitive tokens:

```txt
--main-50 through --main-900
--accent-50 through --accent-900
--fill
```

The `500` value is the primary brand value for each palette. For enterprise rebranding, update the primitive palette values first.

Components should continue using shadcn semantic classes:

```txt
bg-primary
text-primary-foreground
bg-secondary
text-muted-foreground
border-border
ring-ring
bg-background
text-foreground
```

Do not hardcode brand colors in components. Do not replace semantic component classes with direct hex values.

Status colors such as destructive, warning, success, and info should keep their semantic meaning. They should not be mapped to brand colors unless the project explicitly defines a safe status palette.

## Installed Dependencies

Runtime dependencies:

- `next`: Next.js framework with App Router and typed routes.
- `react` and `react-dom`: React runtime.
- `shadcn`: CLI and registry workflow for adding shadcn UI components.
- `radix-ui`: Accessible primitives used by shadcn components.
- `class-variance-authority`: Component variant definitions.
- `clsx`: Conditional class name composition.
- `tailwind-merge`: Tailwind class conflict merging.
- `tw-animate-css`: Animation utilities for the Tailwind/shadcn setup.
- `lucide-react`: Icon library.
- `zod`: Runtime validation and shared schemas.
- `zustand`: Lightweight client state management.
- `@tanstack/react-query`: Client-side server state management.

Development dependencies:

- `typescript`: Static typing.
- `eslint` and `eslint-config-next`: Linting and Next.js lint rules.
- `tailwindcss` and `@tailwindcss/postcss`: Tailwind CSS v4 pipeline.
- `@types/node`, `@types/react`, and `@types/react-dom`: Type definitions.

## Dependency Usage Rules

Use Zod for validating external data, user input, route params, environment values, and API responses.

Use Zustand for client state only, such as UI state and client-side feature state.

Use React Query for client-side server state, especially dashboards, filters, polling, optimistic updates, background refetching, and interactive API-heavy views.

Prefer Server Components, server functions, and Next.js caching when data can be loaded on the server.

Use shadcn components through `src/components/ui` and keep domain-specific compositions inside feature folders such as `src/components/payments` or `src/components/user`.
