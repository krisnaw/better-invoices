# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `app/`, with layouts and route groups like `app/(auth)` for authentication and `app/dashboard` for signed-in flows. UI primitives and composables sit in `components/`, while reusable hooks are in `hooks/`. Database models and migrations are maintained under `db/` alongside `drizzle.config.ts`. Shared helpers and API adapters live in `lib/`, and static assets belong in `public/`.

## Build, Test, and Development Commands
Use `npm install` once per machine to sync dependencies. Run `npm run dev` to launch the Turbopack dev server at `http://localhost:3000`, and `npm run build` to produce an optimized production bundle. Start the production server locally with `npm run start` after building. Manage schema changes with `npm run db:generate` to emit Drizzle SQL, then `npm run db:migrate` to apply them.

## Coding Style & Naming Conventions
Code is TypeScript-first with React Server Components where possible. Keep files camelCased (e.g., `invoiceTable.tsx`) and export UI elements as PascalCase components. Follow Tailwind CSS utility ordering from general to specific, and prefer the `cn` helper from `lib/` for conditional classes. Maintain two-space indentation and favor descriptive names for server actions (`createInvoice`, `fetchClientInvoices`).

## Testing Guidelines
Automated tests are not yet configured. When adding them, colocate `*.test.ts` files next to the module or add a top-level `tests/` directory. Use Vitest or Jest for units and Playwright for key flows; document new scripts in `package.json`. Until then, validate critical paths manually: create invoices, log in/out, and verify database writes using a Neon staging branch.

## Commit & Pull Request Guidelines
Recent history uses short, lowercase summaries (e.g., `wip auth`). Improve clarity by writing imperative titles such as `add invoice table filters`. Each pull request should outline the problem, the solution, screenshots for UI changes, and any database migration notes. Link to relevant issues or Linear tickets, and confirm that migrations were generated and applied before requesting review.

## Database & Environment Notes
Store environment variables in `.env.local`; never commit secrets. When connecting to Neon, use branch-specific credentials and document new variables in the PR. After schema updates, re-run `npm run db:generate` so collaborators stay in sync.
