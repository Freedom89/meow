const resource = [
    /* --- CSS --- */
    '/meow/assets/css/style.css',

    /* --- PWA --- */
    '/meow/app.js',
    '/meow/sw.js',

    /* --- HTML --- */
    '/meow/index.html',
    '/meow/404.html',

    
        '/meow/categories/',
    
        '/meow/tags/',
    
        '/meow/archives/',
    
        '/meow/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/meow/assets/img/favicons/android-chrome-192x192.png',
        '/meow/assets/img/favicons/android-chrome-512x512.png',
        '/meow/assets/img/favicons/apple-touch-icon.png',
        '/meow/assets/img/favicons/favicon-16x16.png',
        '/meow/assets/img/favicons/favicon-32x32.png',
        '/meow/assets/img/favicons/favicon.ico',
        '/meow/assets/img/favicons/mstile-150x150.png',
        '/meow/assets/js/dist/categories.min.js',
        '/meow/assets/js/dist/commons.min.js',
        '/meow/assets/js/dist/misc.min.js',
        '/meow/assets/js/dist/page.min.js',
        '/meow/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    '0.0.0.0:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

