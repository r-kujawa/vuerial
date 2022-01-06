<template>
<div class="vuerial-checkbox" :class="{ 'is-disabled': disabled }">
    <input v-model="checked" type="checkbox" :id="id" :name="name" :disabled="disabled">
    <div class="vuerial-checkbox-style"><i class="fas fa-check"></i></div>
    <label :for="id">{{ text }}</label>
</div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
    name: 'VuerialCheckbox',
    props: {
        name: String,
        text: {
            type: String,
            required: true
        },
        modelValue: Boolean,
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'current'
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            id: uniqueId(`${this.name}_`)
        }
    },
    computed: {
        checked: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
}
</script>
