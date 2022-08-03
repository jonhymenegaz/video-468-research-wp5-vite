# POC Testing Webpack v5 and Vite

## Webpack-v5 Project

### Features

- Webpack v5
- React
- Typescript - Type checking
- Babel
- ESLit
- Dev Server with *Hot Reload*
- Optimized Production
- SASS dev
- Optimized Styles for Production with Mini CSS Extract Plugin

### Commands

`npm install`

Developing Server `npm start`

Build for production `npm run build`


### References

https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/

https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/

https://medium.com/freestoneinfotech/setup-development-and-production-environment-for-react-app-397c4cc9e382

https://webpack.js.org/configuration/

https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460

## Vite Project

### Features

- Vite
- React
- Typescript Transpilation
  
  Vite only performs transpilation on .ts files and does NOT perform type checking. It assumes type checking is taken care of by your IDE and build process (you can run tsc --noEmit in the build script or install vue-tsc and run vue-tsc --noEmit to also type check your *.vue files).
- ESLint
- Dev Server with *Hot Reload*
- Optimized Production
- SASS Dev

### Commands

`npm install`

Developing Server `npm run dev`

Build for production `npm run build`

Preview production `npm run preview`

### References

https://developer.okta.com/blog/2022/03/14/react-vite-number-converter

https://stackoverflow.com/questions/65589265/vite-how-to-use-sass

https://vitejs.dev/guide/using-plugins.html
