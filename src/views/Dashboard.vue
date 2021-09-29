<template>
  <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-5 my-5">
    <div class="transition-all h-full duration-500 ease-in-out transform scale-100 row-span-2 md:col-span-4 lg:col-span-8 bg-gray-200 rounded-t-xl rounded-b-md shadow-md overflow-hidden">
      <button onclick="closeit()" class="ml-1.5 mt-1.5 w-3 h-3 bg-red-500 rounded-full"></button>
      <button onclick="minimise()" class="mt-1.5 w-3 h-3 bg-yellow-500 rounded-full"></button>
      <button onclick="maximise()" class="mt-1.5 w-3 h-3 bg-green-500 rounded-full"></button>
      Chart | AreaCharts
      <div class="content bg-gray-100 px-2 py-2">
        <div class="hidden md:block">
<!--          <canvas id="AreaCharts" height="100"></canvas>-->
          <LineChart height="150" v-bind:chartData="chart.data" v-bind:chartOptions="chart.options" />
        </div>
        <div class="md:hidden">
<!--          <canvas id="AreaChartsMobile" height="300"></canvas>-->
          <LineChart height="300" v-bind:chartData="chart.data" v-bind:chartOptions="chart.options" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div class="bg-purple-500 shadow-md text-white rounded-xl flex">
            <div class="hidden lg:block w-1/3 text-5xl p-5">
              <font-awesome-icon :icon="['fas', 'user']"/>
<!--              <i class="bg-white text-purple-500 rounded-full px-5 py-4 fas fa-shopping-bag"></i>-->
            </div>
            <div class="w-2/3 ml-10 lg:ml-5 my-auto">
              <span class="text-5xl md:text-3xl">36</span>
              <div class="-mt-3 text-xl md:text-base">Today Orders</div>
            </div>
          </div>
          <div class="bg-green-400 shadow-md text-white rounded-xl flex">
            <div class="hidden lg:block w-1/3 text-5xl p-5">
              <font-awesome-icon :icon="['fas', 'shopping-bag']"/>
<!--              <i class="bg-white text-green-400 rounded-full px-3 py-4 fas fa-users"></i>-->
            </div>
            <div class="w-2/3 ml-10 lg:ml-5 my-auto">
              <span class="text-5xl md:text-3xl">10</span>
              <div class="-mt-3 text-xl md:text-base">Today Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="transition-all h-full duration-500 ease-in-out transform scale-100 row-span-2 md:col-span-2 lg:col-span-4 bg-gray-200 rounded-t-xl rounded-b-md shadow-md overflow-hidden">
      <button onclick="closeit()" class="ml-1.5 mt-1.5 w-3 h-3 bg-red-500 rounded-full"></button>
      <button onclick="minimise()" class="mt-1.5 w-3 h-3 bg-yellow-500 rounded-full"></button>
      <button onclick="maximise()" class="mt-1.5 w-3 h-3 bg-green-500 rounded-full"></button>
      Chart | DoughnutCharts
      <div class="content h-full bg-gray-100 px-2 py-2">
        <DougnutChart v-bind:chartData="chart2.data" v-bind:chartOptions="chart2.options" />
      </div>
    </div>
    <div class="transition-all h-full duration-500 ease-in-out transform scale-100 md:col-span-3 lg:col-span-6 row-span-2 bg-gray-200 rounded-t-xl rounded-b-md shadow-md overflow-hidden">
      <button onclick="closeit()" class="ml-1.5 mt-1.5 w-3 h-3 bg-red-500 rounded-full"></button>
      <button onclick="minimise()" class="mt-1.5 w-3 h-3 bg-yellow-500 rounded-full"></button>
      <button onclick="maximise()" class="mt-1.5 w-3 h-3 bg-green-500 rounded-full"></button>
      Lastest Orders
      <div class="content text-center bg-gray-100 rounded-b-xl pt-5">
        <table class="table-fixed w-full h-full text-xs md:text-base">
          <thead class="border-b-4">
          <tr>
            <th>Order Id</th>
            <th>Item</th>
            <th>Status</th>
            <th>Experience & Review</th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td class="truncate">Template E-Commerce + Pro</td>
            <td><span class="bg-green-500 px-2 py-0.5 text-white rounded-full">Success</span></td>
            <td>5</td>
          </tr>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td>Adam</td>
            <td><span class="bg-yellow-500 px-2 py-0.5 text-white rounded-full">Pending</span></td>
            <td>5</td>
          </tr>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td>Adam</td>
            <td><span class="bg-red-500 px-2 py-0.5 text-white rounded-full">Expired</span></td>
            <td>5</td>
          </tr>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td>Adam</td>
            <td><span class="bg-blue-500 px-2 py-0.5 text-white rounded-full">Processing</span></td>
            <td>5</td>
          </tr>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td>Adam</td>
            <td><span class="bg-green-500 px-2 py-0.5 text-white rounded-full">Success</span></td>
            <td>5</td>
          </tr>
          <tr class="border-b-2 border-gray-200 h-10">
            <td><a class="text-blue-500" href="#">OR9842</a></td>
            <td>Adam</td>
            <td><span class="bg-red-500 px-2 py-0.5 text-white rounded-full">Expired</span></td>
            <td>5</td>
          </tr>
          </tbody>
        </table>
        <div class="w-full bg-gray-600 text-white rounded-b-xl">
          <button class=w-full>View All Orders</button>
        </div>
      </div>
    </div>
    <div class="transition-all h-full duration-500 ease-in-out transform scale-100 md:col-span-6 row-span-2 bg-gray-200 rounded-t-xl rounded-b-md shadow-md overflow-hidden">
      <button onclick="closeit()" class="ml-1.5 mt-1.5 w-3 h-3 bg-red-500 rounded-full"></button>
      <button onclick="minimise()" class="mt-1.5 w-3 h-3 bg-yellow-500 rounded-full"></button>
      <button onclick="maximise()" class="mt-1.5 w-3 h-3 bg-green-500 rounded-full"></button>
      Calendar
      <div class="content h-full bg-gray-100 px-2 py-5 pb-5 text-center">
        <span class="text-6xl text-gray-400">Coming Soon Calendar Feature</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LineChart from "@/components/ChartJs/LineChart"
import DougnutChart from "@/components/ChartJs/DougnutChart";

export default defineComponent({
  name: "Dashboard",
  components: {
    LineChart,
    DougnutChart
  },
  data () {
    return {
      datacollection: null,
      chart : {
        data: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              fill: {
                target: 'origin',
                above: 'rgba(0,224,7,0.5)',
                below: 'rgb(0,224,7)'
              },
              label: 'Users',
              data: [12, 19, 3, 5, 7, 3, 15],
              backgroundColor: [
                'rgba(0,224,7,0.5)',
              ],
              borderColor: [
                'rgba(0,224,7,1)',
              ],
              borderWidth: 2,
              tension: 0.5,
            },
            {
              fill: {
                target: 'origin',
                above: 'rgba(147,83,255,0.5)',
                below: 'rgb(147,83,255)'
              },
              label: 'Orders',
              data: [5, 8, 23, 4, 12, 13, 15],
              backgroundColor: [
                'rgba(147,83,255, 0.5)',
              ],
              borderColor: [
                'rgb(147,83,255)',
              ],
              borderWidth: 2,
              tension: 0.5,
            },
          ]
        },
        options: {
          scales: {
            xAxes: {
              display: true,
            },
            yAxes: {
              display: true,
            }
          },
          plugins: {
            filler: {
              propagate: true
            }
          },
          responsive: true,
          showLine: true
        },
      },
      chart2 : {
        data: {
          labels: ['Google', 'Firefox', 'Edge', 'Opera', 'Safari'],
          datasets: [
            {
              label: 'Users',
              data: [140, 90, 120, 60, 40],
              backgroundColor: [
                'rgb(224,149,0)',
                'rgb(224,90,0)',
                'rgb(0,198,224)',
                'rgb(224,18,18)',
                'rgb(0,224,179)',
              ],
              borderWidth: 0,
              tension: 0.5,
            },
          ]
        },
        options: {
          plugins: {
            filler: {
              propagate: true
            }
          },
          showLine: true,
        },
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
})
</script>

<style scoped>

</style>
