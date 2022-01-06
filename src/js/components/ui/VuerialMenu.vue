<template>
    <ul class="vuerial-menu">
        <li v-for="item in items" :key="item.text" class="vuerial-menu-item" :class="[item.class]">
            <a v-bind="item.props"
                @mouseover="$emit('itemMouseover', item)"
                @click="$emit('itemClick', item)"
            >
                {{ item.text }}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'VuerialMenu',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    emits: ['itemClick', 'itemMouseover'],
}
</script>
