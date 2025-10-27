My-New-App
Sarah Bernal


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Includes:
1. Counter Component

Displays the current count.

Buttons:

Increment (+1 by default)
Decrement (-1 by default)
Reset (sets count back to 0)
A Step input (<input type="number">) that sets how much to add/subtract.

Props:

initialCount (number, default 0)
initialStep (number, default 1)
2. Accessibility

Buttons have clear text labels.
Count region is announced on change (aria-live="polite").
3. State Management

Use useState for count and step.
Disable decrement if count - step would go below 0.
4. Home Page (/)

Renders one Counter with defaults.
Renders one Counter with custom props (e.g., initialCount={5}, initialStep={2}).
5. Quality

No runtime errors.
Clean layout and simple CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


