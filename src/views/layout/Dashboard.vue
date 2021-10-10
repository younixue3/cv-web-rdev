<template>
  <div class="flex w-full">
    <div id="mobile-menu"
         v-bind:class="{ 'lg:w-11 w-60' : onCollapsed, 'lg:w-80 w-0' : offCollapsed}"
         class="h-full md:h-auto text-gray-800 z-50 fixed w-0 md:w-11 md:hover:w-80 duration-300 bg-gray-100 shadow-md md:static overflow-hidden md:overflow-none">
      <div class="font-bold text-xl h-16 pr-2 md:pr-0 overflow-hidden truncate flex">
        <img class="min-h-5 h-5 mx-3 my-auto" src="@/assets/path4979.png" alt="">
        <span class="ml-4 my-auto text-2xl align-middle font-light">
                    RDeveloper
            </span>
        <button v-on:click="Collapsed" type="button" class="mx-auto md:hidden">
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="text-lg font-normal tracking-tight">
        <ul class="py-5 px-1 py-2">
          <li class="py-0.5 my-1 rounded-xl overflow-hidden truncate">
            <router-link to="/dashboard">
              <div class="px-2 pt-1 rounded-lg">
<!--                <i class="fas fa-columns mr-3"></i>-->
                <font-awesome-icon class="mr-3" :icon="['fas', 'columns']"/>
                <span>Dashboard</span>
              </div>
            </router-link>
          </li>
          <li class="py-0.5 my-1 rounded-xl overflow-hidden truncate">
            <router-link to="/dashboard/project">
              <div class="w-auto px-2 pt-1 rounded-lg">
<!--                <i class="fas fa-columns mr-3"></i>-->
                <font-awesome-icon class="mr-3" :icon="['fas', 'th-list']"/>
                <span>Project</span>
              </div>
            </router-link>
          </li>

          <li class="py-0.5 my-1 rounded-xl overflow-hidden truncate">
            <router-link to="/dashboard/certificate">
              <div class="w-auto px-2 pt-1 rounded-lg">
                <!--                <i class="fas fa-columns mr-3"></i>-->
                <font-awesome-icon class="mr-3" :icon="['fas', 'certificate']"/>
                <span>Certificate</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <nav class="bg-gray-200">
        <div class="px-5">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <button v-on:click="Collapsed" class="text-gray-800">
                  <svg class="block h-6 w-6"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="relative">
                  <div>
                    <button
                        class="bg-gray-300 p-1 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span class="sr-only">View notifications</span>
                      <!-- Heroicon name: outline/bell -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                      </svg>
                    </button>
                  </div>
                  <div id="menuProfile"
                       class="hidden absolute bg-white right-0 w-56 md:w-80 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                       role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                       tabindex="-1">
                    <div class="grid grid-rows-4 divide-y">
                      <a href="#" class="block px-4 py-2 text-xs md:text-sm text-gray-700"
                         role="menuitem" tabindex="-1" id="user-menu-item-0">
                        <div class="flex">
                          <img class="h-8 w-8 mr-2 md:mr-4 my-auto rounded-full"
                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                               alt="">
                          <div>
                            <h1 class="font-bold">Jane Doe sent a massage</h1>
                            <div class="bg-gray-100 rounded-xl p-2 py-1">
                              <p class="h-8 md:h-16 overflow-hidden"> Hello, My name is Jane
                                doe i want to asking about this tamplate, how i can order
                                it? </p>
                              <span class="mx-2 font-bold">- 1h ago -</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="block px-4 py-2 text-xs md:text-sm text-gray-700"
                         role="menuitem" tabindex="-1" id="user-menu-item-0">
                        <div class="flex">
                          <img class="h-8 w-8 mr-2 md:mr-4 my-auto rounded-full"
                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                               alt="">
                          <div>
                            <h1 class="font-bold">Jane Doe sent a massage</h1>
                            <div class="bg-gray-100 rounded-xl p-2 py-1">
                              <p class="h-8 md:h-16 overflow-hidden"> Hello, My name is Jane
                                doe i want to asking about this tamplate, how i can order
                                it? </p>
                              <span class="mx-2 font-bold">- 1h ago -</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="block px-4 py-2 text-xs md:text-sm text-gray-700"
                         role="menuitem" tabindex="-1" id="user-menu-item-0">
                        <div class="flex">
                          <img class="h-8 w-8 mr-2 md:mr-4 my-auto rounded-full"
                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                               alt="">
                          <div>
                            <h1 class="font-bold">Jane Doe sent a massage</h1>
                            <div class="bg-gray-100 rounded-xl p-2 py-1">
                              <p class="h-8 md:h-16 overflow-hidden"> Hello, My name is Jane
                                doe i want to asking about this tamplate, how i can order
                                it? </p>
                              <span class="mx-2 font-bold">- 1h ago -</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="block px-4 py-2 text-xs md:text-sm text-gray-700"
                         role="menuitem" tabindex="-1" id="user-menu-item-0">
                        <div class="flex">
                          <img class="h-8 w-8 mr-2 md:mr-4 my-auto rounded-full"
                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                               alt="">
                          <div>
                            <h1 class="font-bold">Jane Doe sent a massage</h1>
                            <div class="bg-gray-100 rounded-xl p-2 py-1">
                              <p class="h-8 md:h-16 overflow-hidden"> Hello, My name is Jane
                                doe i want to asking about this tamplate, how i can order
                                it? </p>
                              <span class="mx-2 font-bold">- 1h ago -</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="mt-2 cursor-pointer bg-gray-800 text-white text-center rounded-b-xl">
                      More Notification
                    </div>
                  </div>
                </div>

                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                  <div>
                    <button type="button"
                            class="max-w-xs p-0.5 bg-gray-300 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                           alt="">
                    </button>
                  </div>
                  <div id="menuProfile"
                       class="hidden absolute right-0 w-32 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                       role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                       tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                       tabindex="-1" id="user-menu-item-0">Your Profile</a>

                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                       tabindex="-1" id="user-menu-item-1">Settings</a>

                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                       tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="min-h-screen px-0 py-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="bg-gray-800 px-10 py-5 text-white">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b-2 gap-y-10 md:gap-y-0 md:gap-x-10  border-gray-600 pb-10">
      <div class="text-lg font-light">
        <h1 class="mb-4 font-medium uppercase">Solutions</h1>
        <ul class="list-none text-gray-300">
          <li class="my-1 hover:text-gray-50 cursor-pointer">Marketing</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Analytics</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Commerce</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Insights</li>
        </ul>
      </div>
      <div class="text-lg font-light">
        <h1 class="mb-4 font-medium uppercase">Company</h1>
        <ul class="list-none text-gray-300">
          <li class="my-1 hover:text-gray-50 cursor-pointer">About</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Blog</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Careers</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Clients</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Partners</li>
        </ul>
      </div>
      <div class="text-lg font-light">
        <h1 class="mb-4 font-medium uppercase">Support</h1>
        <ul class="list-none text-gray-300">
          <li class="my-1 hover:text-gray-50 cursor-pointer">Pricing</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Documentation</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Guides</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">API Product</li>
        </ul>
      </div>
      <div class="text-lg font-light">
        <h1 class="mb-4 font-medium uppercase">Legal</h1>
        <ul class="list-none text-gray-300">
          <li class="my-1 hover:text-gray-50 cursor-pointer">Claim</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Privacy</li>
          <li class="my-1 hover:text-gray-50 cursor-pointer">Terms</li>
        </ul>
      </div>
      <div class="col-span-2 text-lg font-light">
        <h1 class="mb-4 font-medium uppercase">Subscribe to our Newsletter</h1>
        <p class="text-sm text-gray-300 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolorum sit soluta accusamus dolores est quisquam voluptatum magni nobis</p>
        <form>
          <input class="border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-1 text-gray-800 mr-1"
                 placeholder="Your Email">
          <button class="bg-gray-600 hover:bg-pink-500 text-white rounded-xl focus:outline-none focus:ring-2 px-2 py-1 mt-2 sm:mt-0">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div class="text-center md:text-left my-2">
        <span class="text-sm mr-1">Made with <i class="text-red-600 fas fa-heart"></i> by <a
            href="https://www.instagram.com/ricko.tiaka/" target="_blank">ricko.tiaka</a></span>
      <div class="md:float-right">
        <button>
          <img class="w-7 h-7 mx-1" src="https://img.icons8.com/ios-filled/500/ffffff/facebook-new.png"/>
        </button>
        <button>
          <img class="w-7 h-7 mx-1"
               src="https://img.icons8.com/material-outlined/480/ffffff/instagram-new--v1.png"/>
        </button>
        <button>
          <img class="w-7 h-7 mx-1" src="https://img.icons8.com/material-outlined/480/ffffff/globe--v2.png"/>
        </button>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "Dashboard",
  data () {
    return {
      onCollapsed : false,
      offCollapsed : true
    }
  },
  methods: {
    Collapsed: function () {
      if (this.onCollapsed == true) {
        this.onCollapsed = false
        this.offCollapsed = true
      } else {
        this.onCollapsed = true
        this.offCollapsed = false
      }
    }
  }
}
</script>

<style scoped>

</style>
