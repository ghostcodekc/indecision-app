# indecision-app
 
## Developing Tips

Turn on live-server in one terminal: 
```sh
live-server public
```

Watch babel make changes in a second terminal:

```sh
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
```