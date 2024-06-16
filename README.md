# Svelte + TailwindCSS + FiveM

This template for developing FiveM resources should get you easily started with developing delightful FiveM resources. It can both work as a template for open-source projects and paid projects. The `fxmanifest.lua` file contains the needed properties for both use cases.

## Configuration file

In `svelte-source/src/config.json` you can add configuration for the UI. This file will be copied to the `html` folder containing the compiled Svelte code.

## Types

TypeScript types for FiveM natives have been made easily available to use. They will be installed when all `node_modules` are installed and can be in-commented in the `tsconfig.json` file:

```json
"types": [
    "@citizenfx/server", 
    "@citizenfx/client"
]
```

This will enable suggestions for all natives that can be used in JavaScript. For documentation about the natives, refer to the https://docs.fivem.net/natives/.

## Code protection

To make it harder for leakers to make slight changes to your code and sell it, an obfuscator has been added when building the Svelte application. This means that the compiled code in the `html` folder is transformed during the build process to make it difficult to read or understand in addition to being minified.
