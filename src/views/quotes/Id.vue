  <template>
  <div class="quotes-id">
    <Layout>
      <div class="square-quote-card" v-if="!this.$store.getters.isLoading">
        <div class="quote">
          <h3>{{ quote.quote }}</h3>
          <p>
            <img :src="author.profile_picture" />
            โดย {{ author.name }}
          </p>
          <span>วันที่ {{ quote.created_at }}</span>
        </div>
      </div>
      <Loading v-else size="4x" />
    </Layout>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { queryOneQuote } from '@/backend/database';
import moment from 'moment-timezone'

import Layout from '@/components/Layout.component.vue';
import Loading from '@/components/Loading.component.vue';

export default defineComponent({
  components: {
    Layout,
    Loading
  },
  data: () => {
    ({
      quote: {},
      author: {}
    })
  },
  methods: {
    async fetchData() {
      this.$store.dispatch('setLoading', true)

      const { data, error } = await queryOneQuote(Number(this.$route.params.id))
      console.log(data)
      if (error) console.error(error)

      this.author = data.author
      this.quote = data

      this.setDate()

      this.$store.dispatch('setLoading', false)
    },
    setDate() {
      this.quote.created_at = moment.tz(this.quote.created_at, 'Asia/Bangkok').add(543, 'year').format('DD/MM/YYYY HH:mm')
    }
  },
  async created() {
    await this.fetchData()
  }
})
</script>

<!-- <script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { queryOneQuote } from '@/backend/database';
import Quote from '@/types/Quote.type';
import User from '@/types/User.type';

import Layout from '@/components/Layout.component.vue';


const route = useRoute()

const quote = ref<Quote>()
const author = ref<User>()

const created = async () => {
  const { data, error } = await queryOneQuote(Number(route.params.id))
  console.log(data)
  if (error) console.error(error)

  author.value = data.author
  quote.value = data
}

onMounted(async () => {
  await created()
})
</script> -->

<style scoped>
.square-quote-card {
  display: flex;
  flex-direction: column;
  @apply p-5 md:p-10;

  background-color: #ffffff;
  @apply w-9/12 md:w-1/2 h-4/6 rounded-lg drop-shadow-lg;

  @apply text-black;
}

.quote h3 {
  text-align: left !important;
  @apply text-3xl md:text-5xl font-bold;
  @apply mb-5;
}

.quote p {
  text-align: left !important;
  display: flex;
  flex-direction: row;
  align-items: center;

  @apply text-xl md:text-2xl font-normal;
  @apply mb-5;
}

.quote p img {
  @apply w-9 h-9 mr-3 rounded-full;
}

.nav {
  position: absolute;
  bottom: 0;
}
</style>