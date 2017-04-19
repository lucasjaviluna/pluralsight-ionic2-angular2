# pluralsight-ionic2-angular2

https://app.pluralsight.com/player?course=ionic2-angular2-typescript-mobile-apps&author=steve-michelotti&name=ionic2-angular2-typescript-mobile-apps-m1&clip=2&mode=live


https://github.com/smichelotti/Ionic2Course


#Cordova


#Ionic2
npm install -g ionic@beta

* Create project:
ionic start ionic-tabs-app tabs --v2 --ts

* Run in browser
ionic serve

* Run in emulator
debe estar configurado el SDK android

ionic platform add android

ionic build android

ionic emulate android

* Crear nueva page
ionic generate page Tournaments



My Teams ---------------------> Tournaments
    |                               |
    v                               v
Team Home-------------------------Teams
[(Team detail), (Standings)]
      |
      v
     Game

#Lifecycle Events
- ionViewDidLoad: se ejecuta cuando la page se carga. Sólo pasa una vez.
- ionViewWillEnter: se ejecuta cuando una vista se muestra al usuario y se navega en ella
- ionViewDidEnter: se ejecuta después de que una view se navega y muestra al usuario
- ionViewWillLeave: se ejecuta cuando una view se deja de navegar
- ionViewDidLeave: se ejecuta después de que una view se deja de navegar
- ionViewWillUnload: se ejecuta cuando una vista se descarga. Se descarga por ej de la chache por cuestiones de performance que maneja Ionic cuando se acumulan muchas pages en el stack
- ionViewDidUnload: se ejecuta despues de que una vista se descarga de memoria
