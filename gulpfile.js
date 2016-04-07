var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(function (mix) {

    mix.sass([
        'main.scss'
    ],  'assets/css/min.css');

    mix.scripts([
        'libs/three.js/build/three.min.js',
        'libs/three.js/examples/js/controls/OrbitControls.js',
        'libs/three.js/examples/js/loaders/STLLoader.js',
        'app/app.js'
    ],  'assets/js/min.js');
});
