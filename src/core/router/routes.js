import MainLayout from '@/core/layouts/MainLayout.vue'
import MainPage from '@/modules/main/view/MainPage.vue'
import BasketPage from '@/modules/basket/view/BasketPage.vue'
import CatalogPage from '@/modules/catalogs/view/CatalogPage.vue'
import { Keys } from '@/core/constants/keys.js'

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 */

export const Routes = {
  Home: 'home',
  Basket: 'basket',
  Catalog: 'catalog',
}

/** @type {RouteRecordRaw[]} */
export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: Routes.Home,
        alias: Routes.Home,
        component: MainPage,
      },
      {
        path: `/${Routes.Basket}`,
        name: Routes.Basket,
        component: BasketPage,
        beforeEnter: (to, from, next) => {
          if (!localStorage.getItem(Keys.Login)) {
            next({ name: Routes.Home, hash: '#login' })
          } else {
            next()
          }
        },
      },
      {
        path: `/${Routes.Catalog}/:category`,
        name: Routes.Catalog,
        component: CatalogPage,
      },
    ],
  },
]
