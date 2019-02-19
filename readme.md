# React / React Native Monoapp

This repository is structured as follows:

`applications/native` - demo Expo 32 app
`applications/react` - clone of the DBS reader web app
`core/utils` - test utils; this is where the shared code will live

The root `package.json` needs the following to work with Yarn workspaces:

```
{
    "private": true,
    "workspaces": [
        "core/*",
        "applications/*"
    ]
}
```

## React / Next.js steps taken

- Added `next-plugin-transpile-modules` to package.json dependencies
- Added `next-plugin-transpile-modules` config to next.config.js
- Updated `name` in package.json to `"name": "@bibleis/react"`
- Added `"@bibleis/utils": "*"` to package.json dependencies
- Created test.js in `core/utils` with sample export value
- Pulled test.js value into `app/containers/Verses/index.js`

## React Native / Expo steps taken

- Added `AppEntry.js` into actual project (due to issues with the one in `.expo` not bundling correctly)
- Updated `main` in package.json to point to the AppEntry.js you created: `"main": "./AppEntry.js"`
- Added `get-yarn-workspaces` dev dependency to package.json
- Added `@babel/runtime` dependency to package.json (note: you may need to run `npm start --reset-cache` after performing this step if you're getting an error about `@babel/runtime/helpers/interopRequireDefault`)
- Added [nohoist](https://yarnpkg.com/blog/2018/02/15/nohoist/) config to package:json:

```
"workspaces": {
    "nohoist": [
        "**"
    ]
}
  ```
- Add `"@bibleis/utils": "*"` to package.json dependencies
- Pulled test.js value into `app/screens/HomeScreen.js`
