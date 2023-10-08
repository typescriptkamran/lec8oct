# Next.js 13 Hello World

[Download and Install Node.js LTS Version](https://nodejs.org/en/download/)

[Download and Install VS Code](https://code.visualstudio.com/download)

[Check out the Next.js 13 Installation Docs](https://nextjs.org/docs/getting-started/installation)

1. **Create a new Folder**

1. **Open the Command Line (Terminal) and run this command:**

```
npx create-next-app@latest
```

this will create a Next.Js project

The app directory is where you define routes, create UI and colocate files such as components, tests, or stylesheets.

Read the following React Documentation:

[React Essentials](https://nextjs.org/docs/getting-started/react-essentials)

Note: Our file extension is not jsx but tsx because we are using
TypeScript

3. In the app/page.tsx file delete the previous React component and replace it with the following simple hello world component:

```
export default function Home() {
  return (
        <div>Hello World</div>
  );
}
```

We wrote a very simple hello world React component in the file. Note that it is a convention in Next.js that the html page in the director is called page.tsx

4. **Start the development Server:**

```
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the results locally.**



## Manual Deployment through [CLI](https://vercel.com/cli)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```
npm i -g vercel
```

Now go to the Next.js project directory and give the following command to deploy to cloud:

```
vercel
```

In my case the web app is deployed to:

        https://lec8oct-2f6xoe2mi-typescriptwithkamran.vercel.app/

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) and [Vercel CLI Docs](https://vercel.com/docs/cli) for more details.

## Project config with vercel.json

[vercel.json](https://vercel.com/docs/project-configuration)

[example](https://github.com/grand-stack/grand-stack-starter/blob/master/vercel.json)

[Rewrite Example](https://stackoverflow.com/questions/73607646/problems-mounting-a-vercel-nextjs-project-as-a-subdirectory-of-a-different-verce)

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!