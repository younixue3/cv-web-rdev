<template>
  <div class="grid grid-cols-1 gap-x-5 gap-y-5">
    <div class="bg-indigo-600 px-5 pt-10 pb-28 -mb-28 text-4xl font-bold uppercase text-white">
      {{this.$route.name}}
    </div>
    <div class="grid grid-cols-1 gap-x-5 gap-y-5 px-5">
      <div>
        <button class="bg-green-500 text-white text-center rounded-md shadow-md px-5 py-1"><span class="align-text-top">Add</span></button>
      </div>
      <div class="transition-all h-full duration-500 ease-in-out transform scale-100 bg-gray-200 rounded-t-xl rounded-b-md shadow-md overflow-hidden">
        <div class="content bg-gray-100 grid grid-cols-1 gap-x-5 gap-y-5">
          <div>
            <table class="w-full text-center">
              <thead class="bg-gray-100">
              <tr>
                <th class="py-1">Name</th>
                <th class="py-1">Position</th>
                <th class="py-1">Role</th>
                <th class="py-1">Action</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y-2 divide-gray-200">
              <tr class="hover:bg-blue-100 transition-all duration-200">
                <td class="py-1 pl-4">
                  <div class="flex items-center">
                    <img class="h-8 w-8 mr-2 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="">
                    <div class="text-left my-auto">
                      Jane Doe
                      <div class="text-sm text-gray-500">janedoe@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="py-1">BackEnd Web Developer</td>
                <td class="py-1">Admin</td>
                <td class="py-1">
                  <button onclick="action_btn()" class="bg-indigo-500 text-white text-center rounded-md shadow-md px-5 py-1 relative">
                    <span class="align-text-top">Action</span>
                    <div class="hidden action_btn absolute right-14 w-32 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
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
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-blue-100 transition-all duration-20">
                <td class="py-1 pl-4">
                  <div class="flex items-center">
                    <img class="h-8 w-8 mr-2 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="">
                    <div class="text-left my-auto">
                      Jane Doe
                      <div class="text-sm text-gray-500">janedoe@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="py-1">FrontEnd Web Developer</td>
                <td class="py-1">Admin</td>
                <td class="py-1">
                  <button onclick="action_btn()" class="bg-indigo-500 text-white text-center rounded-md shadow-md px-5 py-1 relative">
                    <span class="align-text-top">Action</span>
                    <div class="hidden action_btn absolute right-14 w-32 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
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
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-blue-100 transition-all duration-20">
                <td class="py-1 pl-4">
                  <div class="flex items-center">
                    <img class="h-8 w-8 mr-2 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="">
                    <div class="text-left my-auto">
                      Jane Doe
                      <div class="text-sm text-gray-500">janedoe@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="py-1">Jr. FrontEnd Web Developer</td>
                <td class="py-1">Moderator</td>
                <td class="py-1">
                  <button onclick="action_btn()" class="bg-indigo-500 text-white text-center rounded-md shadow-md px-5 py-1 relative">
                    <span class="align-text-top">Action</span>
                    <div class="hidden action_btn absolute right-14 w-32 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
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
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-blue-100 transition-all duration-20">
                <td class="py-1 pl-4">
                  <div class="flex items-center">
                    <img class="h-8 w-8 mr-2 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="">
                    <div class="text-left my-auto">
                      Jane Doe
                      <div class="text-sm text-gray-500">janedoe@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="py-1">Database Analyst</td>
                <td class="py-1">Moderator</td>
                <td class="py-1">
                  <button onclick="action_btn()" class="bg-indigo-500 text-white text-center rounded-md shadow-md px-5 py-1 relative">
                    <span class="align-text-top">Action</span>
                    <div class="hidden action_btn absolute right-14 w-32 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                         role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <!-- Active: "bg-gray-100", Not Active: "" -->
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                         tabindex="-1" id="user-menu-item-0">Your Profile</a>

                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                         tabindex="-1" id="user-menu-item-1">Settings</a>

                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                         tabindex="-1" id="user-menu-item-2">Sign out</a>
                    </div>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="bg-gray-100 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div class="flex-1 flex justify-between sm:hidden">
                <a href="#"
                   class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </a>
                <a href="#"
                   class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </a>
              </div>
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">10</span>
                    of
                    <span class="font-medium">97</span>
                    results
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                       aria-label="Pagination">
                    <a href="#"
                       class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Previous</span>
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                           fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </a>
                    <a href="#" aria-current="page"
                       class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      1
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      2
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                      3
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                            ...
                                        </span>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                      8
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      9
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      10
                    </a>
                    <a href="#"
                       class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Next</span><!---->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                           fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>

</style>
