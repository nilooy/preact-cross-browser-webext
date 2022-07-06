<div align="center">
    <img src="extension/assets/img/logo128.png" alt="Meteor Devtool Evolved Gif" />
    <h2>Preact Cross Browser Web extension</h2>
</div>

> Firefox support HMR in development but chrome has auto-reload(hmr is blocked for content security policy)


### Tools
1. 🎨 Preact
2. 🎨 Tailwind
3. 🎨 Web-ext
4. 🎨 Web-ext polyfill (Cross browser api)
5. 🎨 release-it

### src/manifest.ts > will generate manifest v2 for firefox and v3 for chrome, add your necessary configs there in manifest.ts file.

### Install
```sh
yarn
```

### Start

```sh
yarn dev:firefox
```
OR
```sh
yarn dev:chrome
```

### Build all for prod
```sh
yarn prod
```

### Release
```sh
release
```

check package.json for more commands
