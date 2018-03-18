<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{$t('name')}}
      </h1>
      <h2 class="subtitle">
        {{$t('intro')}}
      </h2>

      <div class="links">
        <nuxt-link
          class="button--grey"
          v-for="(locale, index) in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="index"
          :exact="true"
          :to="switchLocalePath(locale.code)">
          
          {{ locale.name }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
