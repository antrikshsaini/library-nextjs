This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

https://console.neon.tech/app/projects/flat-lab-63584683?branchId=br-hidden-meadow-a4xftyre&database=neondb

drizzle ORM

npx drizzle-kit generate

npx drizzle-kit migrate

https://authjs.dev/getting-started/installation

npm install next-auth@beta bcryptjs

npm i --save-dev @types/bcryptjs

RateLimiting

create database,upstash

https://upstash.com/docs/redis/sdks/ratelimit-ts/gettingstarted
add in sign in and sign up, one ip address can only try to login only 5 times. to help brute force attack to not occur

Rate limit

https://github.com/upstash/ratelimit-js/tree/main/examples/nextjs-middleware

to add on api routes

Make workflows to get user back to vist website again
Qstash

https://upstash.com/docs/workflow/examples/customerOnboarding


Send Emails, usung Resend
domain: hello.antrikshsaini.com

add dns properties from Resend domain website
https://resend.com/domains/

Resend integration 
https://upstash.com/docs/qstash/integrations/resend

next after for sending emails logics, implement next after 
allows you to schedule work to be executed after a response (or prerender) is finished. This is useful for tasks and other side effects that should not block the response, such as logging and analytics.

Applied on home page when we check login already?

Next, trigger workflow client to send email auto, when sign up
https://upstash.com/docs/workflow/basics/client

It is a monolith project structure

Create Admin Portal

make book form, all books, add new books
books page
Add nee book form, create validation first schedma
Create Book Form

File Upload, for both Image and Video

Color Picker, react-colorful

create new book action to save data in database
create schema books


Display from real database

Fetch all books from database