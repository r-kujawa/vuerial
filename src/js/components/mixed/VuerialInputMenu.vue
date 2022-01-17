<template>
    <div ref="inputMenu" class="vuerial-input-menu" 
        @focusin="showMenu = true"
        v-click-away="onIntentionalBlur" 
    >
        <v-input v-model="value" :name="name" :label="label" :readonly="readonly" :disabled="disabled" is-underlined="isUnderlined"
            :input-attributes="inputAttributes"
            :input-events="inputEvents"
            @keydown.up="moveUp" 
            @keydown.down="moveDown" 
            @keydown.enter.stop="onEnterDown" 
            @keydown.tab="onIntentionalBlur"
        >
            <template v-slot:suffix>
                <i v-if="items.length" class="fas transition-transform duration-500" :class="[space.direction === 'up' ? 'fa-caret-up' : 'fa-caret-down', {'transform -rotate-180': showMenu}]"></i>
            </template>
        </v-input>
        <div v-show="showMenu && items.length" class="vuerial-input-menu-container" :class="{'menu-up': space.direction === 'up'}">
            <v-menu :items="items" :style="{maxHeight: space.distance + 'px'}" @item-click="onClickItem" />
        </div>
    </div>
</template>

<script>
import isObject from 'lodash/isObject';
import toString from 'lodash/toString';

export default {
    name: 'VuerialInputMenu',
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
        isUnderlined: {
            type: Boolean,
            default: false,
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
    emits: ['update:modelValue'],
    beforeMount () {
        window.addEventListener('scroll', this.updateSpaceDirection);
    },
    mounted () {
        this.updateSpaceDirection();
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.updateSpaceDirection);
    },
    data () {
        return {
            showMenu: false,
            space: {
                direction: 'down',
                distance: 0,
            },
            currentIndex: -1,
            currentValue: this.modelValue ?? '',
        }
     },
     computed: {
        value: {
            get() {
                return this.currentValue;
            },
            set(value) {
                if (this.modelValue.startsWith(value)) {
                    this.currentIndex = -1;
                    this.currentValue = value;
                } else {
                    this.currentIndex = this.items.findIndex(item => item.text.toLowerCase().startsWith(value.toLowerCase()));
                    this.currentValue = this.items[this.currentIndex]?.text ?? value;
                }

                if (this.currentValue !== value || this.currentValue !== this.modelValue) {
                    this.$emit('update:modelValue', value);
                }
            }
        },
        items() {
            let items = this.options.map(option => isObject(option) ? { ...option } : { text: toString(option), value: option });

            if (this.currentIndex < items.length && this.currentIndex >= 0) {
                items[this.currentIndex].class = 'vuerial-input-menu-item-current';
            }

            return items;
        }
    },
    watch: {
        // TODO: this.currentIndex is not being updated if the source of the change comes from the parent.
        modelValue(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (this.showMenu) {
                    this.$nextTick(() => {
                        this.$refs.inputMenu.querySelector('input').setSelectionRange(this.modelValue.length, this.currentValue.length);
                    });
                } else {
                    this.currentValue = newValue;
                }
            }
        },
        currentIndex(value) {
            if (value >= 0) {
                let scrolled = this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop;

                if (scrolled > this.currentIndex * 32) {
                    this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop = (this.currentIndex) * 32;
                } else if (scrolled + this.space.distance < (this.currentIndex + 1) * 32) {
                    this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop = ((this.currentIndex + 1) * 32) - this.space.distance;
                }
            }
        }
    },
    methods: {
        setValue(item) {
            this.value = item.text;
        },
        updateSpaceDirection() {
            let offset = this.$refs.inputMenu.getBoundingClientRect();
            let up = offset.top - 16;
            let down = window.innerHeight - offset.bottom - 24;

            if (up > down) {
                this.space.direction = 'up';
                this.space.distance = up;
            } else {
                this.space.direction = 'down';
                this.space.distance = down;
            }
        },
        unfocus() {
            this.showMenu = false;

            this.$nextTick(() => {
                this.$refs.inputMenu.querySelector('input')?.blur();
            });
        },
        moveUp() {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex -1;
            }
        },
        moveDown() {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex >= this.items.length - 1 ? 0 : this.currentIndex + 1;
            }
        },
        onIntentionalBlur() {
            this.currentValue = this.modelValue;

            this.unfocus();
        },
        onClickItem(item) {
            this.setValue(item);

            this.unfocus();
        },
        onEnterDown() {
            if (this.currentIndex >= 0) {
                this.setValue(this.items[this.currentIndex]);
            }

            this.unfocus();
        },
    },
}
</script>