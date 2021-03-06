// circlaceactivitytrackerpluginplugin.js
import axios from 'axios'

export default {
  install (Vue, { router, endpoint, jwt, uuid}) {
    router.beforeEach((to, from, next) => {
      axios({
        "method": "POST",
        "url": endpoint,
        "headers": {
          "content-type": "application/json",
          "Authorization": `${jwt}`
        },
        "data": {
          "activity": "pageview",
          "useruuid": `${uuid}`,
          "context": {
            url: `${window.location.hostname}${to.fullPath}`,
            useragent: `${navigator.userAgent}`,
            resolution: `${screen.availWidth} x ${screen.availHeight} (${window.innerWidth} x ${window.innerHeight})`,
          }
        }
      })
      next()
    })
  }
}