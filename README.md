# Gulp Dev 11-14-2020




## Usage

run: ```gulp``` in project directory

open up ```http://[host]:[port]``` in browser

default [port]: ```6766```

default [host]: ```'0.0.0.0'```




## config

defined in: ```./gulp-config.js```

- ### config
    - srcDir:
        - expects: string
        - default: 'src'
    - outputDir:
        - expects: string
        - default: 'dist'
    - server:
        - #### port:
            - expects: number
            - default: '0.0.0.0'




## Dependencies
- browser-sync
- gulp
- gulp-cli
- gulp-pug
- gulp-sass
- node-sass
- pug
