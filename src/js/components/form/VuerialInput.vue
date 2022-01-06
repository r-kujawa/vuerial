<template>
<div class="vuerial-input" :class="[{ 'is-readonly': readonly || disabled, 'has-prefix': hasPrefix, 'has-suffix': hasSuffix }]">
    <div class="vuerial-input-style"></div>
    <input ref="input" v-model="input" :type="type" :id="id" :name="name" placeholder=" " :disabled="disabled" :readonly="readonly" :autocomplete="autocomplete ? 'on' : 'off'"
        @keydown.up.down.prevent
        v-bind="inputAttributes"
        v-on="inputEvents"
    >
    <label :for="id">{{ label }}</label>
    <div v-if="hasPrefix" class="prefix" @click="focusInput">
        <slot name="prefix" />
    </div>
    <div v-if="hasSuffix" class="suffix" @click="focusInput">
        <slot name="suffix" />
    </div>
</div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
    name: 'VuerialInput',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
        autocomplete: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        inputAttributes: {
            type: Object,
            default: () => ({}),
        },
        inputEvents: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            id: uniqueId(`${this.name}_`)
        }
    },
    computed: {
        input: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
        hasPrefix() {
            return !!this.$slots['prefix'];
        },
        hasSuffix() {
            return !!this.$slots['suffix'];
        }
    },
    methods: {
        focusInput() {
            this.$refs.input.focus();
        },
    },
}
</script>
