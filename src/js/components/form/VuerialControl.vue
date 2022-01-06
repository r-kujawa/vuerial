<template>
<div class="vuerial-control" :class="{ 'has-error': hasError }">
    <label v-if="label" class="vuerial-control-label" :for="name">{{ label }}</label>
    <slot />
    <span v-if="hasError" class="help">{{ error }}</span>
    <slot v-else name="help" />
</div>
</template>

<script>
export default {
    name: 'VuerialControl',
    props: {
        label: String,
        name: String,
        error: String,
    },
    computed: {
        hasError() {
            return !!this.error;
        }
    }
}
</script>

