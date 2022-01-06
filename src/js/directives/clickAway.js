function onClickAway ({ event, element, handler }) {
    const isClickAway = !(
        event.target === element
        || element.contains(event.target)
    );

    return isClickAway ? handler(event, element) : null;
}

const clickAwayables = new Map();

function beforeMount(element, { value: handler }) {
    const eventHandler = (event) => onClickAway({ element, event, handler});

    document.addEventListener(
        'click',
        eventHandler,
        true
    );

    clickAwayables.set(
        element,
        eventHandler
    );
}

function unmounted(element) {
    const eventHandler = clickAwayables.get(element);

    document.removeEventListener(
        'click',
        eventHandler
    );

    clickAwayables.delete(element);
}

export default {
    beforeMount,
    unmounted
};
