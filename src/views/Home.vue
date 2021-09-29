<template>
  <Header/>
  <div class="py-2 md:py-20 bg-gray-800 to-gray-900">
    <div class="md:flex mb-36 md:flex-row-reverse text-gray-100 mx-0 md:mx-10">
      <div class="static md:w-1/3 my-2 md:my-20">
        <img class="w-full h-full md:w-96 md:h-96 m-auto md:m-0 object-cover"
             src="@/assets/57774948_2440392989306240_790466375524024320_n.jpg">
      </div>
      <div
          class="absolute md:static top-60 md:w-2/3 text-center md:text-left md:my-auto transform px-2 lg:px-16 xl:px-20">
        <span class="hidden md:block">
          <h1 class="md:text-5xl xl:text-7xl font-bold">Hello,</h1>
          <h1 class="md:text-3xl xl:text-5xl font-bold">My Name <span class="">Ricko Tiaka</span></h1>
          <h2 class="md:text-lg xl:text-2xl font-bold text-yellow-300">I'm a Freelance Designer & Programmer</h2>
        </span>
        <span class="block md:hidden mt-5">
          <h1 class="text-4xl font-bold"><span class="">Ricko Tiaka</span></h1>
          <h2 class="text-base font-light text-yellow-300">Freelance Designer & Programmer</h2>
        </span>
        <p class="text-xs w-full mt-10">
          I am a self-taught programmer, fast learner and hard woker. Lonely boy with Laptop, have a good communication
          skills and good branding skills
          I have experience as a Full-Stack Web Developer in a Software House Company and Freelance Designer &
          Programmer.
        </p>
      </div>
    </div>
    <div class="px-2 md:mx-10 text-center">
      <h1 class="text-gray-100 text-4xl font-bold">Skills</h1>
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 my-10 text-center">
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'vuejs']"/>
          <div>Vue Js</div>
        </div>
        <div class="text-yellow-300 py-2">
          <svg class="h-5 m-auto mb-1.5" viewBox="0 0 256 154" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <g>
              <path class="fill-current"
                    d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                    fill="url(#linearGradient-1)"></path>
            </g>
          </svg>
          <div>Tailwind</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'python']"/>
          <div>Python</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'laravel']"/>
          <div>Laravel</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'bootstrap']"/>
          <div>Bootstrap</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'html5']"/>
          <div>HTML</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'css3']"/>
          <div>CSS</div>
        </div>
        <div class="text-yellow-300">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'js']"/>
          <div>Javascript</div>
        </div>
      </div>
    </div>
    <div class="text-center mt-20 md:mt-40">
      <h1 class="text-gray-100 text-4xl font-bold">Service</h1>
      <div class="bg-gray-900 pb-32 mt-32">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 transform -translate-y-16 md:-translate-y-1/2 md:my-5 px-5">
          <div class="flex relative bg-gray-700 h-40 px-2 text-left text-gray-100">
            <div class="flex my-auto">
              <font-awesome-icon class="text-4xl text-yellow-300 mx-2" :icon="['fas', 'code']"/>
              <div>
                <h1 class="font-bold">Web Development</h1>
                <p class="text-xs font-light">
                  I'll do Front-End, Back-End or Full-Stack Development, Fast Development and Best Web Performance.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative bg-gray-700 h-40 px-2 text-left text-gray-100">
            <div class="flex my-auto">
              <font-awesome-icon class="text-4xl text-yellow-300 mx-2" :icon="['fas', 'paint-brush']"/>
              <div>
                <h1 class="font-bold">Brand Design</h1>
                <p class="text-xs font-light">
                  I'll do Front-End, Back-End or Full-Stack Development, Fast Development and Best Web Performance.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative bg-gray-700 h-40 px-2 text-left text-gray-100">
            <div class="flex my-auto">
              <font-awesome-icon class="text-4xl text-yellow-300 mx-2" :icon="['fas', 'photo-video']"/>
              <div>
                <h1 class="font-bold">Social Media</h1>
                <p class="text-xs font-light">
                  I'll do Front-End, Back-End or Full-Stack Development, Fast Development and Best Web Performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-0 md:my-32">
          <h1 class="text-4xl text-white font-bold">Education</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 px-5 md:px-20">
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl text-left font-bold text-yellow-400 leading-4">SMP Negeri 21
                  Samarinda</h1>
                <h2 class="text-lg md:text-xl leading-4">Information & Technology</h2>
              </div>
              <p class="text-xs md:text-base">I Learn Design & Programming. I do Design with Photoshop and I do
                Programming with Visual Basic .NET, C# .Net.</p>
            </div>
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl text-left font-bold text-yellow-400 leading-4">SMK Negeri 7
                  Samarinda</h1>
                <h2 class="text-lg md:text-xl leading-4">Software Engineering</h2>
              </div>
              <p class="text-xs md:text-base">I Learn Website & Desktop Programming, Visual Basic .NET, NetBeans, PHP
                and Laravel. this my first I Know what is Database, so I Learn database with PHPMyAdmin &
                PostgreSQL.</p>
            </div>
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl font-bold text-yellow-400 leading-4">National Geographic #GenGeo
                  Course</h1>
                <h2 class="text-lg md:text-xl leading-4">Storytelling & Photography</h2>
              </div>
              <p class="text-xs md:text-base">I Learn many about Photography and Storytelling, I do course 6 month.</p>
            </div>
          </div>
        </div>
        <div class="py-20">
          <h1 class="text-4xl text-white font-bold">Experience</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 px-5 md:px-20">
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl text-left font-bold text-yellow-400 leading-4">Ayam Thorr Restaurant</h1>
                <h2 class="text-lg md:text-xl leading-4">Head Of Marketing & Technology</h2>
              </div>
              <p class="text-xs md:text-base">I Do many task, like do a Branding Market, and Increase Restaurant Brand.
                I Also build Website Restaurant Profile and do some Network Technician.</p>
            </div>
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl text-left font-bold text-yellow-400 leading-4">Print Inn</h1>
                <h2 class="text-lg md:text-xl leading-4">Printing Machine Operator & Web Developer</h2>
              </div>
              <p class="text-xs md:text-base">I Do design Job there, like make Brand Logo for client Company, and do
                print design orders. I Make a Website Company Profile for company that i work at with Laravel,
                Materialize Css and JQuery</p>
            </div>
            <div class="text-left text-white">
              <div class="mb-2">
                <h1 class="text-xl md:text-2xl font-bold text-yellow-400 leading-4">Utama Web</h1>
                <h2 class="text-lg md:text-xl leading-4">Back-End Web Developer</h2>
              </div>
              <p class="text-xs md:text-base">I Do a Big project here with Laravel, Bulma and JQuery. I Learn many here,
                Like Vue JS, Ionic, Flutter and Angular.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="portofolio" class="py-20">
        <h1 class="text-4xl text-white font-bold">Projects</h1>
        <div class="grid grid-cols-3 gap-5 mt-14 px-20">
          <div class="relative">
            <img src="@/assets/4849154.jpg">
            <div
                class="opacity-0 hover:opacity-100 hover:bg-opacity-50 absolute h-full w-full top-0 bg-gray-700 text-white text-center p-5">
              <h1 class="text-2xl font-bold text-left">Title</h1>
              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button class="m-auto absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 pt-0.5 border border-white"><a class="" href="#">View</a></button>
              <div class="absolute bottom-0 right-0">
                VueJs, Laravel, Flutter
              </div>
            </div>
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
        </div>
      </div>
      <div class="py-20">
        <h1 class="text-4xl text-white font-bold">Certificate</h1>
        <div class="grid grid-cols-3 gap-5 mt-14 px-20">
          <div class="relative">
            <img src="@/assets/4849154.jpg">
            <div
                class="opacity-0 hover:opacity-100 hover:bg-opacity-50 absolute h-full w-full top-0 bg-gray-700 text-white text-center p-5">
              <h1 class="text-2xl font-bold text-left">Title</h1>
              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button class="m-auto absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 pt-0.5 border border-white"><a class="" href="#">View</a></button>
              <div class="absolute bottom-0 right-0">
                VueJs, Laravel, Flutter
              </div>
            </div>
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
          <div>
            <img src="@/assets/4849154.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import axios from "axios";
import Header from '@/components/Header';

export default {
  name: 'Home',
  components: {
    // axios,
    Header,
  },
  data () {
    return {
      project: null
    }
  },
  mounted() {
  }
}
</script>
