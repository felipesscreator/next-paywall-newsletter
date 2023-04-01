# NewsLetter

## A newsletter with paywall

### Made with NextJs, ReactJs, FaunaDB for database, Stripe for making the payment and Prismic for CMS

## Main Dependencies

| Dependencies | Version   |
|---           |---        |
| next         | 12.3.1    |
| faunadb      | ^4.7.0    |
| stripe       | ^10.11.0  |
| prismic-dom  | ^2.2.5    |
| axios        | ^0.27.2   |
| sass         | ^1.55.0   |

## Running the app

### Dependent of

- Some Package Manager Like npm, yarn, pnpm, etc... (yarn recommended)
- Count on Github, FaunaDB, Stripe and Prismic.
- Clone of the repository [newsletter-next](https://github.com/Feelpe/newsletter-next)

### Set the Development environment

- Create a file on the root called .env.local
- Copy the file .env.local.example and paste on the file created

#### Now use the following steps to fill the .env.local file

#### Github

- [Github login](https://docs.github.com/pt/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

#### Prismic

- [Prismic Access Token](https://prismic.io/docs/access-token)
- add PRISMIC_ENDPOINTv2

#### Stripe

##### In the project directory run this for installation =

```powershell
  #Installation
  $ yarn install
```

##### Than this for running in development mode =

```powershell
  # development mode
  $ yarn dev
```

#### Stripe Webhook

```powershell
  #Install stripe cli
  $ yarn install stripe/stripe-cli/stripe
```

```powershell
  #Run stripe listen 
  $ stripe listen --forward-to localhost:3000/api/webhooks
```

Now you can open [http://localhost:3333](http://localhost:3333) to view it in your browser.
