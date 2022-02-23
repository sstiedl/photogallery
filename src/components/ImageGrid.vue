<template>
  <transition-group tag="div" name="grid" appear class="img-grid">
    <div v-for="document in documents" :key="document.id" class="img-wrap" @click="handleClick(document.url)">
      <img :src="document.url" />
    </div>
  </transition-group>
</template>

<script>
import useCollection from "../composables/useCollection";

export default {
  setup(props, context) {
    const { documents } = useCollection("images");

    const handleClick = (url) =>{
      context.emit('selected', url)

    }

    return { documents, handleClick };
  },
};
</script>

<style>
.img-grid {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 50%;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
}
.img-wrap img {
  min-width: 100%;
  min-height: 100%;
  max-width: 180%;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 767px) {
  .img-grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .img-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* transitions */

.grid-enter-from {
  opacity: 0;
}
.grid-enter-to {
  opacity: 1;
}
.grid-enter-active {
  transition: 1s ease-in;
}
.grid-move {
  transition: all 0.5s ease;
}
</style>