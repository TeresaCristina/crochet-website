## Added Packages

Using [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/):

```
npm install --save bootstrap
```

Add to angular.json:

```

"styles": [
           ...
           "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],

(...)

"scripts": [
            ...
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
           ]
```

Add to index.htm:

```
<head>
  (...)
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
```

Using [MDB Angular](https://mdbootstrap.com/):

```
npm install @angular/cdk --save
...
npm install angular-bootstrap-md --save
```

Add to app.module.ts:

```
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ]
});
```

Add to angular.json:

```
"styles": [
           ...
           "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
           "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
           "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
           "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
           "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
           "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
           "node_modules/animate.css/animate.css"
          ]
          
(...)

"scripts": [
           ...
           "./node_modules/chart.js/dist/Chart.js",
           "./node_modules/hammerjs/hammer.min.js"
           ]
```

Using [Font Awesome](https://fontawesome.com/):

```
npm install -–save chart.js@2.5.0 @types/chart.js @fortawesome/fontawesome-free hammerjs animate.css 
```

Add to index.html:

```
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
```
Using [Popper](https://popper.js.org/):

```
npm install popper.js --save
```

Add to angular.json:

```
"scripts": [
            (...)
           "./node_modules/jquery/dist/jquery.min.js"
           ]
```

### Header Navigation Responsive

[Bootstrap Template](https://getbootstrap.com/docs/4.0/components/navbar/#how-it-works)

### Footer Responsive

[Template](https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341)
