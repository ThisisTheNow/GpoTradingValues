# GPO Trading Values

A high-performance trading value platform built with the latest technologies.

## Tech Stack

- **Core:** Next.js 16, React 19, TypeScript 5
- **Database:** PostgreSQL + Prisma 7
- **Caching:** Redis (Upstash)
- **Real-time:** Supabase
- **Styling:** Tailwind CSS 4
- **Motion:** Framer Motion + GSAP
- **Auth:** NextAuth (Auth.js)
- **Storage:** S3 / Cloudflare R2

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root and add your credentials:
   ```env
   DATABASE_URL=
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   UPSTASH_REDIS_REST_URL=
   UPSTASH_REDIS_REST_TOKEN=
   NEXTAUTH_SECRET=
   GITHUB_ID=
   GITHUB_SECRET=
   R2_ENDPOINT=
   R2_ACCESS_KEY_ID=
   R2_SECRET_ACCESS_KEY=
   ```

3. **Database Setup:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## Folder Structure

- `src/app`: Next.js App Router (Pages & Layouts)
- `src/components`: Reusable UI components
- `src/lib`: Service initializations (Prisma, Redis, Supabase, S3)
- `src/auth.ts`: NextAuth configuration
- `prisma/`: Database schema
