# Starter Front : project.DMN.io

> starter with VUEJS, VUEX, VUE-ROUTER, Capistrano...

## Build Setup
### install dependencies localy
```
npm install
```

## Dev
### serve with hot reload at localhost:8080
```
npm run dev
```

## Build and Production in project.DMN.io
```
  - [server] create /var/www/projectName/
  - set deploy.rb : repo and name
```
```
  - After git add / commit / push
  - cap production deploy (set server info before automatic install and build)
  - cap production apache:conf (set apache conf)
  - cap production apache:ssl (set ssl_file conf)
```
````
  - set or renew TLS certificat : /opt/letsencrypt/letsencrypt-auto
````

### App crash > rollbask to the previous release
```
cap production deploy:rollback
```
