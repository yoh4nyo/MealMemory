# MealMemory

MealMemory is a family meal memory app for remembering what everyone ate, saving meal photos, collecting recipes from social links, browsing meal history, and finding ideas that avoid too many repeats.

This repository is only the MVP foundation: app shell, routes, shared types, sample data, Supabase client setup, and development tooling.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase for database, authentication, and image storage
- pnpm
- ESLint
- Prettier
- Zod
- date-fns
- lucide-react
- react-hook-form
- clsx and tailwind-merge

## Installation

```bash
pnpm install
```

On Windows PowerShell, use `pnpm.cmd` if script execution policy blocks the `pnpm` shim.

## Environment

Create a local environment file from the example:

```bash
cp .env.example .env.local
```

Then fill in your Supabase project values:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Do not commit real Supabase credentials.

## Development

```bash
pnpm dev
```

The app starts at `http://localhost:3000`.

## Useful Checks

```bash
pnpm lint
pnpm exec tsc --noEmit
```

## Next Steps

- Create the Supabase schema for families, meals, recipes, photos, and shopping list items.
- Add Supabase authentication and protected routes.
- Replace sample meals with database queries.
- Build real meal and recipe forms with react-hook-form and Zod validation.
- Add image upload support through Supabase Storage.
- Implement calendar views and repeat-aware meal suggestions.
