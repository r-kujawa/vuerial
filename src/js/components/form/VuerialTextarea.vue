<template>
<div class="vuerial-textarea" :class="[{ 'is-readonly': readonly || disabled, 'is-underlined': isUnderlined }]">
    <div class="vuerial-textarea-style"></div>
    <textarea v-model="input" :id="id" :name="name" placeholder=" " :rows="rows" :cols="cols" :disabled="disabled" :readonly="readonly"></textarea>
    <label :for="id">{{ label }}</label>
</div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
    name: 'VuerialTextarea',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        rows: [String, Number],
        cols: [String, Number],
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isUnderlined: {
            type: Boolean,
            default: false,
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
    }
}
</script>
