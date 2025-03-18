__Follow similar guidelines when developing INT0015 projects, which can be found [here](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4076/Developing).__

## Developing, troubleshooting and testing

If you want to test the code locally, use [`npm link`](https://docs.npmjs.com/cli/v9/commands/npm-link). Run `npm link` in INT0014 library and then run `npm link @talxis/client-libraries` (for example) in your other INT/PCT library. Just make sure you don't run `npm install` in the INT/PCT after you created the link, it would fetch the package from package.json instead. You can always check if the local package is being used in the *node_modules/{{packageName}}* folder, you should see the local version there.

After you linked the local package, you can make any changes and the package will be updated once you run `npm run build`. If you want to use the library in PCT, I recommend building the TS library in PCT with `npm run build`, unzipping your solution with the webresource, and replacing the JS file with the generated JS file from the output folder, then zip the solution back and deploy it.

When you are finished with the changes, run `npm install` and `npm run build`. If you want to clean your workspace *(so next time you won't be confused why it's using the local package version)*, you can also remove the link, just run `npm unlink @talxis/client-libraries` in INT/PCT and `npm unlink` in INT0014.

Note: If you use rollup.js in PCT, debuggers will be removed for some reason, so don't use them, `console.log()` is your friend.
