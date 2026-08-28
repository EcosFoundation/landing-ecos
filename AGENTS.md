# Next.js Template Technical Rules

This repository is a reusable base template for starting Next.js projects. The product goal, business domain, and final feature set are defined by the team that clones the template. Keep the template focused on technical conventions, architecture, and reusable project infrastructure.

## Next.js Version Rule

This is NOT the Next.js you may know from older projects. This template uses Next.js 16, which has breaking changes in APIs, conventions, and generated types. Before changing framework-specific behavior, read the relevant guide in `node_modules/next/dist/docs/` and follow current deprecation notices.

## App Router Boundary

The `src/app` folder is reserved for App Router route files only.

Allowed in `src/app`:

- `page.tsx`
- `layout.tsx`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `route.ts`
- Route groups and route segment folders
- Other Next.js App Router special files

Do not place page implementation components, feature components, stores, schemas, server actions, or business logic directly in `src/app` unless the file is a required App Router entry file.

## Page Component Rule

Every `page.tsx` must be a thin route adapter. It should only read route-only inputs and render the corresponding page component.

Route-only inputs include `params`, `searchParams`, cookies, headers, and other values that must be obtained at the App Router boundary.

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

The page implementation must live outside `src/app` with a descriptive file name such as `UserPage.tsx`, `PaymentsPage.tsx`, or `PaymentItemPage.tsx`. Do not put meaningful UI implementation inside `page.tsx`.

## Clean Architecture File Organization

Organize code by business capability first, not by file type. Prefer feature/domain folders such as `user`, `payments`, `billing`, `auth`, or `settings`.

Use `src/components/ui` only for reusable shadcn/base UI components that do not know about the business domain.

Use `src/components/<feature>` for feature-level presentation components and route page components.

Use `src/lib` for generic utilities that are not tied to one feature.

Use `src/shared` for cross-cutting contracts and utilities that are used by multiple layers, such as route builders.

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

If a project grows beyond presentation components, add feature-local architecture folders under the feature name.

Example:

```txt
src/
  features/
    payments/
      domain/
      application/
      infrastructure/
      presentation/
```

Keep dependencies flowing inward. UI can depend on application/domain contracts, but domain code must not depend on React, Next.js, shadcn, or browser APIs.

## Typed Routes Rule

Next.js `typedRoutes` is enabled in `next.config.ts`. It validates literal route strings used by Next.js navigation APIs.

In addition, this template uses `src/shared/routes.ts` as the project route registry. Route strings must only be written in `src/shared/routes.ts`.

Use `routes.*` everywhere else:

```tsx
import Link from "next/link";
import { routes } from "@/shared/routes";

export function PaymentsLink() {
  return <Link href={routes.payments.page()}>Payments</Link>;
}
```

```tsx
import { useRouter } from "next/navigation";
import { routes } from "@/shared/routes";

const router = useRouter();

router.push(
  routes.payments.itemPage({
    paymentId: "pay_123",
    itemId: "item_456",
  }),
);
```

The route helper supports static routes, dynamic route params, encoded path segments, and optional query params.

Naming convention:

```txt
routes.<feature>.page()
routes.<feature>.detailPage({ id })
routes.<feature>.settingsPage()
routes.<feature>.<specificName>Page(params)
```

Do not manually type paths in `Link`, `router.push`, `router.replace`, `router.prefetch`, or `redirect` unless you are editing `src/shared/routes.ts`.

## Color System Rule

This template uses shadcn with Tailwind CSS v4 and CSS variables in `src/app/globals.css`.

The color system has two layers:

- Primitive brand palette tokens
- shadcn semantic tokens mapped to those primitives

Brand primitives:

```txt
--main-50 through --main-900
--accent-50 through --accent-900
--fill
```

The `500` value is the protagonist brand color for each palette. When rebranding for a company, change the primitive palette values first. Do not rewrite component classes and do not hardcode brand colors in components.

shadcn components must continue using semantic Tailwind classes:

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

The semantic tokens are mapped to the brand primitives in `globals.css`. This keeps shadcn compatibility while allowing enterprise rebranding from a small palette.

Status and informative colors must keep their semantic meaning. Do not map destructive, warning, success, or info colors to company brand colors unless a project explicitly defines a safe status palette.

## Installed Dependencies And Use

Runtime dependencies:

- `next`: Next.js framework with App Router and typed routes.
- `react` and `react-dom`: React runtime.
- `shadcn`: CLI and registry workflow for adding shadcn UI components.
- `radix-ui`: Accessible primitive components used by shadcn.
- `class-variance-authority`: Variant API for reusable component styling.
- `clsx`: Conditional class name composition.
- `tailwind-merge`: Merges conflicting Tailwind utility classes.
- `tw-animate-css`: Animation utilities used by the shadcn/Tailwind setup.
- `lucide-react`: Default icon library.
- `zod`: Runtime validation and shared schemas for forms, API boundaries, route params, environment values, and domain inputs.
- `zustand`: Lightweight client state management for UI state and client-side feature state.
- `@tanstack/react-query`: Client-side server state management for dashboards, filters, polling, optimistic updates, background refetching, and API-heavy interactive views.

Development dependencies:

- `typescript`: Static type checking.
- `eslint` and `eslint-config-next`: Linting and Next.js rules.
- `tailwindcss` and `@tailwindcss/postcss`: Tailwind CSS v4 pipeline.
- `@types/node`, `@types/react`, and `@types/react-dom`: Type definitions.

Use React Query only for client-side server state. Prefer Server Components, server functions, and Next.js caching for data that can be loaded on the server.

Use Zustand only for client state. Do not use Zustand as a replacement for server state, URL state, or form state.

Use Zod at boundaries. Validate external data, user input, environment variables, route params, and API responses where needed.
