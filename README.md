![next-paywall-newsletter](https://i.imgur.com/43noS5B.gif)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 

# NewsLetter With Paywall

This project is a newsletter web application built with Next.js, React.js, Prismic, Stripe, FaunaDB, and GitHub OAuth. It allows users to subscribe to a newsletter using Stripe, and stores their information in FaunaDB.

## Getting Started

Before setting up the project on your local machine, ensure the following dependencies are installed:

- A package manager (we recommend yarn, but npm or pnpm will work too)
- Git
- Node.js

### Clone and Setup Project

1. Clone the repository by running:

```
  git clone https://github.com/Feelpe/next-paywall-newsletter.git
```

2. Move to your project directory and install the project dependencies:

```
  cd next-paywall-newsletter
  yarn install
```

### Required Environment Variables

Before running the application, set up the necessary accounts and obtain the required environment variables.

#### GitHub OAuth 

Ensure you have a GitHub account. Create an OAuth app through GitHub, following [GitHub OAuth Documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) for guidance. Note your "Client ID" and "Client Secret".

#### FaunaDB 

Create a FaunaDB account and key as described in the [FaunaDB Documentation](https://docs.fauna.com/fauna/current/). You will also need to create two collections named "subscriptions" and "users".

#### Stripe 

Following [Stripe Documentation](https://stripe.com/docs), create a Stripe account, and set up a new product. Keep track of the "Publishable key", "Secret key", and Product's ID.

##### Stripe Webhook

Stripe requires a webhook for real-time notifications. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli), authenticate your Stripe account, and forward your local webhook endpoint to Stripe.

#### Prismic 

Set up a Prismic account and repository based on [Prismic Documentation](https://prismic.io/docs). Create a new custom type with a Title (Text) and Content (Rich Text) field.

### Configure Environment Variables

Create a .env.local file at the root of your project. Paste the following content into the file and replace placeholders with your personal values:

```
# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRODUCT=

# Stripe Webhooks
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

### Start the development server

```
  yarn dev
```

Now open [http://localhost:3333](http://localhost:3333) to view it in your browser.
