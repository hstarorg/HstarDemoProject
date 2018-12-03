<template>
  <div>
    <portal :to="toPortal">
      <div v-show="visible">
        <slot name="content">{{content}}</slot>
      </div>
    </portal>
    <div @click="showTooltip()">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toPortal: { type: String },
    content: { type: String }
  },
  data() {
    return { visible: false };
  },
  mounted() {
    const parentNode = this.$el.parentNode;
    [].slice.call(this.$el.childNodes).forEach(node => {
      parentNode.append(node);
    });
    this.$el.remove();
  },
  methods: {
    showTooltip() {
      this.visible = !this.visible;
    }
  }
};
</script>

