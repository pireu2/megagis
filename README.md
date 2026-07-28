# Megagis — Digital Topography & GIS Services Platform

A high-precision web platform for **SC MEGAGIS SRL**, built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and dictionary-first internationalization (RO / EN).

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Swiss GIS aesthetic design system
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **i18n:** Built-in dictionary-first internationalization (Romanian / English)
- **Contact Form:** API route powered by Nodemailer & SMTP

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

Create a `.env` file in the root directory (refer to `.env.example`):

```env
SMTP_HOST=<host_name>
SMTP_PORT=<port>
SMTP_USER=<user_email>
SMTP_PASS=<password>
CONTACT_RECEIVER_EMAIL=<contact_email>
```

## Build & Deployment

To create an optimized production build:

```bash
npm run build
```

Deployable natively on [Vercel](https://vercel.com).

## License

This project is licensed under the [MIT License](LICENSE).
