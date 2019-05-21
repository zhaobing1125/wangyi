<template>
  <section>
    <div class="time-header">
      <div class="header-top">
        <span>限时购</span>
        <div class="time-down">
          <span ref="timeHour"></span>
          <span>:</span>
          <span ref="timeMinute"></span>
          <span>:</span>
          <span ref="timeSecond"></span>
          <span>:</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "TimeToBuy"
  }
</script>

<style scoped>

</style>
