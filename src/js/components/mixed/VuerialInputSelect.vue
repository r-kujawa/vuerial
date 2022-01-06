<template>
    <div class="vuerial-select">
        <input type="hidden" :name="name" :value="modelValue">
        <v-input-menu v-model="value" :options="items" :label="label" :readonly="readonly" :disabled="disabled" />
    </div>
</template>

<script>
import isObject from 'lodash/isObject';
import toString from 'lodash/toString';

export default {
    name: 'VuerialInputSelect',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            required: true,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            fallback: '',
            inputCount: 0,
        }
    },
    computed: {
        value: {
            get() {
                return this.useFallback ? this.fallback : this.items.find(item => item.value === this.modelValue)?.text ?? '';
            },
            set(value) {
                let selectedItem = this.items.find(item => item.text.toLowerCase() === value.toLowerCase());

                if (selectedItem) {
                    this.$emit('update:modelValue', selectedItem.value);
                } else {
                    this.fallback = value;
                    this.inputCount++;

                    this.$emit('update:modelValue', this.items.length ? '' : this.fallback);
                    
                    setTimeout(() => { 
                        this.inputCount--;
                        if (!this.useFallback) {
                            this.fallback = '';
                        }
                    }, 1500);
                }
            },
        },
        items() {
            return this.options.map(option => isObject(option) ? { ...option } : { text: toString(option), value: option });
        },
        useFallback() {
            return this.inputCount || !this.items.length;
        },
    }
}
</script>

<style>

</style>