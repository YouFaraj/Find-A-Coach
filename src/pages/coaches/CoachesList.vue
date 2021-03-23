<template>
  <section>
    Filter
  </section>
  <section>
    <div class="controls">
      <button>
        Refresh
      </button>
      <router-link to="/register">
        <button>
          Register as a Coach
        </button>
      </router-link>
    </div>
    List Of Coaches
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
};
</script>
