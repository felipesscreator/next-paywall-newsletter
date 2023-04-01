# NewsLetter

This project is a newsletter web application built with Next.js, React.js, Prismic, Stripe, FaunaDB, and GitHub OAuth. It allows users to subscribe to a newsletter using Stripe, and stores their information in FaunaDB.

## Running the Application

### Dependent of

- Some Package Manager Like npm, yarn, pnpm, etc... (yarn recommended)
- Git
- nodejs

#### Clone the repository

```bash
  git clone https://github.com/Feelpe/newsletter-next.git
```

#### Install the dependencies

```bash
  cd your-project
  yarn install
```

### Get the necessary environment variables

#### Prismic

- Create a Prismic account if you haven't already. [Prismic documentation](https://prismic.io/docs)
- Create a Prismic repository if you haven't already.
- Create a new [Custom Type](https://prismic.io/docs/custom-types) with the following fields:
  - Title (Text)
  - Content (Rich Text)
- Generate an access token for Prismic by going to the "API & Security" section of your repository settings. [Read more about generating access tokens in Prismic](https://prismic.io/docs/access-token#generate-access-tokens)

#### Stripe

- Create a Stripe account if you haven't already. [Stripe documentation](https://stripe.com/docs)
- Go to the "Developers" section of the Stripe dashboard and click on "API keys".
- Copy the "Publishable key" and "Secret key". [Read more about API keys in Stripe](https://stripe.com/docs/keys)

#### GitHub

- Create a GitHub account if you haven't already. [GitHub documentation](https://docs.github.com/pt)
- Go to the "Settings" section of your account and click on "Developer settings".
- Click on "OAuth Apps" and then "New OAuth App".
- Fill out the "Application name", "Homepage URL", "Authorization callback URL" (which should be `http://localhost:3333/api/auth/callback`).
- Click on "Register application" and then copy the "Client ID" and "Client Secret".
- [Read more about OAuth Apps in GitHub if you need](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

#### FaunaDB

- Create a FaunaDB account if you haven't already. [FaunaDB documentation](https://docs.fauna.com/fauna/current/)
- Go to the "Security" section of your FaunaDB dashboard and create a new key with the "Server" role.
- [Read more about security in FaunaDB if you need](https://docs.fauna.com/fauna/current/security/)

### Set up the environment variable

- Create a `.env.local` file at the root of the project with the following environment variables and replace the values with the environment variables you obtained.

```makefile
  PRISMIC_ACCESS_TOKEN=
  NEXT_PUBLIC_STRIPE_API_KEY=
  PRISMIC_API_ENDPOINT=

  STRIPE_SECRET_KEY=

  GITHUB_CLIENT_ID=
  GITHUB_CLIENT_SECRET=

  FAUNA_SECRET_KEY=
```

### Start the development server

```bash
  yarn dev
```

Now you can open [http://localhost:3333](http://localhost:3333) to view it in your browser.
