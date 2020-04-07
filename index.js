// circlaceactivitytrackerpluginplugin.js
import axios from 'axios'

export default {
    install (Vue, { router, endpoint, jwt, uuid}) {
      router.beforeEach((to, from, next) => {
        axios.post(endpoint, {
          headers: {
            crossdomain: true,
            'Authorization': `${jwt}`,
            'content-type': 'application/json'
          },
          activity: "pageview",
          useruuid: `${uuid}`,
          context: {
              url: `${window.location.hostname}${to.fullPath}`,
              useragent: `${navigator.userAgent}`,
              resolution: `${screen.availWidth} x ${screen.availHeight} (${window.innerWidth} x ${window.innerHeight})`,
          }
        })
        next()
      })
    }
  }