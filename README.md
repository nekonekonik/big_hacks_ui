# Kiva Nuevo Frontend

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

This project is used with https://github.com/nekonekonik/big_hacks

## Build & development

1. Get a ngrok url and add it into *NGROK_URL* under **app >> scripts >> controllers >> main.js**

2. Run `grunt` for building and `grunt serve` for preview.

3. (Optional) To see cool animations, remember to add back the following line to index.html after doing every `grunt serve` (it likes to remove this line :stuck_out_tongue_winking_eye:)

```html
<link rel="stylesheet" href="bower_components/angular-timeline/dist/angular-timeline-animations.css" />
```

## Testing

Running `grunt test` will run the unit tests with karma.



