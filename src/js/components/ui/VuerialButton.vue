<template>
<button :type="type" class="vuerial-button" :disabled="isDisabled">
    <div class="vuerial-button-style"></div>
    <span v-if="loading" class="vuerial-button-spinner"><i class="fas fa-spinner"></i></span>
    <span class="vuerial-button-text">
        <slot />
    </span>
</button>
</template>

<script>
export default {
    name: 'VuerialButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: Boolean,
    },
    computed: {
        isDisabled() {
            return this.disabled || this.loading;
        },
    },
}
</script>

