# Portifolio

## 💪 Project
This is a project to develop a portfolio in Gatsby

## 💻 To use

```bash
# Clone this repository
git clone https://github.com/rscholant/portifolio
# Go into the repository
cd portifolio
# Install dependencies and run the app
npm install && npm start
# if your utilize yarn
yarn && yarn start
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Portifolio Scholant', // <title>
  ...
  firstName: 'Rafael',
  lastName: 'Scholant',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/rscholant',
    }
    ...
  ],
};

```
#### Changing Theme Colour

To change theme colour, change `$primary` variable in `src/assets/sass/_variables.scss`.


### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

## 📑 License

This project is under license from MIT. See the [LICENSE](LICENSE.md) file for more details.

---

<p align="center">Done with ❤️ and ☕ for <strong>Rafael Scholant 👋</strong> </p>