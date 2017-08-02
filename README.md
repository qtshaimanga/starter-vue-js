# Starter Front : project.DMN.io

> Starter with VueJS, VueX, Vue-ROUTER, Vue-RESOURCE(JWT), Capistrano...

> quentin.tshaimanga@edf.fr

>WIP vue-resource interceptor for jwt renewal


## Build Setup
### install dependencies localy
```
npm install
```

## Dev
### serve with hot reload at localhost:8080
```shell
npm run dev
```

## Prod
```shell
npm run build
```

## Automation tools for production in project.DMN.io or DMN.io/project
```
  - [server] create /var/www/projectName/
  - set deploy.rb : repo and name
```
```
  - After git add / commit / push
  - cap production deploy (set server info before automatic install and build vue.js project)
  - cap production apache:create_vhost_http (set apache conf)
  - cap production apache:create_vhost_https (set ssl host conf)
  - cap production dcoker:apache_restart (container apache restart)
  - cap production letsencrypt:letsencrypt_conf (set conf ssl_file)
  - cap production letsencrypt:letsencrypt_renewal (renewal conf ssl_file)
```

### If app crashed > rollbask to the previous release
```shell
cap production deploy:rollback
```
