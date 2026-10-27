# Portfolio

Next.js 14 (App Router, TypeScript), plain CSS, no other dependencies.

## Run

    npm install
    npm run dev      # http://localhost:3000

## Fill it in

All copy is in `lib/content.ts`. Anything starting with `TODO` shows up
highlighted in yellow on the page, so you can see what's left.
Remove the highlight automatically by replacing the text.

Add a project: add an object to `projects`; the page at `/projects/<slug>`
is generated for you.

## Deploy

Push to GitHub and import the repo on Vercel (free tier is enough).

## Interactive parts

- `components/AgentRun.tsx`: the hero's clickable agent run. Steps and example text live in `agentSteps` in `lib/content.ts`. It is a generic illustration; edit the text to match how your own systems work.
- `components/ArchDiagram.tsx`: the architecture diagram on each project page. Edit each project's `architecture` (nodes, notes, edges) in `lib/content.ts`. Nodes with `placeholder: true` draw dashed.
