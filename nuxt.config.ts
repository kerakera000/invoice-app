// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
      head: {
          htmlAttrs: {
          lang: 'ja'
              },
          title: "SOLVIDE-請求書",
          link: [
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@500&family=Oswald&family=Palanquin+Dark&family=Roboto:wght@400;700&display=swap",
            },
            ],
      },
    },
    components: [{
      path: '~/components/',
      pathPrefix: false,
    }],
    css: ['/assets/css/style.css'],
});
