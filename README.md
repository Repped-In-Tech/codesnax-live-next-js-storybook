# CodeSnax Live - NextJS and Storybook

![codesnax-show](https://github.com/Repped-In-Tech/codesnax-live-next-js-storybook/assets/29741570/59c085f5-3d10-4d47-8e1f-d3f22d950842)

## Get Started
- [Copy this template](https://githubtools.reppedintech.com/u/Repped-In-Tech/codesnax-live-next-js-storybook) to your github account
- Install dependencies
  ```bash
  npm i
  ```
### Run the Storybook:
```bash
npm run storybook
```
- Navigate to http://localhost:6006/

### Run the App:
```bash
npm run dev
```
- Navigate to http://localhost:3000/

_NOTE: Always remember to stop your server when you're done using CTRL+C on Mac or ALT + C on windows_

## Manual Installation Instructions
- [Install NextJS](https://nextjs.org/docs/getting-started/installation)
- [Install Storybook](https://storybook.js.org/docs/get-started/nextjs)

## Deploy Your Storybook using Netlify
1. Navigate to https://netlify.com
2. Create an account using your GitHub account if you do not have one
3. Click "ADD NEW SITE" and select "Import an existing project"
4. Select "Github" and authorize if needed
5. Navigate to your account and select the repo with the Storybook
6. Let's update a few settings...
  - Update Build Command: `npm run build-storybook`
  - Change the Publish Directory: `storybook-static`
7. Press "Deploy Site" and wait... (you can watch the logs if you like)
8. Change the default name of the site if you'd like.
9. Navigate to the URL!


