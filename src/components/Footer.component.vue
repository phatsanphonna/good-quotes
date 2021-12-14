<template>
  <footer class="footer">
    <p>2021 Phatsanphon Nakaranurak</p>
    <span>
      <a href="https://github.com/ssuniie/good-quotes" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </span>
  </footer>
</template>

<style scoped>
.root {
}

.footer {
  @apply container mx-auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 4rem;
}

.footer > * {
  margin: 4px 0px;
}

.footer span > * {
  margin: 0px 8px;
}

.footer span a {
  @apply transition-all hover:text-gray-300;
}
</style>