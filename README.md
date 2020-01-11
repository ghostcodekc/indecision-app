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
### Deploying using Github page

After cloning this repository you can run 
```sh
npm install
yarn install
```
from the root directory to download all the required packages. 

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.