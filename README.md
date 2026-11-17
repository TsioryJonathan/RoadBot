# RoadBot

Answer a short survey, get career suggestions, then follow a step-by-step roadmap to get there.

Live: <https://roadbot-one.vercel.app>

## How it works

1. Students and professionals answer a survey.
2. An LLM (through OpenRouter) turns the answers into career suggestions.
3. Each career comes with a roadmap: ordered steps, saved to your account. Six ready-made roadmaps are included (full-stack, cybersecurity, UX/UI design, marketing, cooking, medicine).

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, Prisma 7 with PostgreSQL, Better Auth (GitHub sign-in).

## Run

```bash
npm install
cp .env.example .env   # or create .env with the variables below
npx prisma migrate dev
npm run dev
```

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | GitHub sign-in |
| `OPENROUTER_API_KEY` | LLM calls |
