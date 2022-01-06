<template>
    <div class="vuerial-radio" :class="{ 'is-disabled': disabled }">
        <input v-model="selected" type="radio" :value="value" :id="id" :name="name" :disabled="disabled">
        <div class="vuerial-radio-style"><i class="fas fa-circle"></i></div>
        <label :for="id">{{ text }}</label>
    </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
    name: 'VuerialRadio',
    props: {
        name: String,
        text: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Number, Boolean],
            required: true,
        },
        modelValue: [String, Number, Boolean],
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            id: uniqueId(`${this.name}_`)
        }
    },
    computed: {
        selected: {
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