(function() {
    'use strict';

    window.addEventListener('DOMContentLoaded', () => {
        const copyElements = document.querySelectorAll("button.copy[data-copy]")
        copyElements.forEach(e => {
            e.addEventListener('click', () => {
                // TODO Add animation on success or error.
                navigator.clipboard.writeText(e.getAttribute("data-copy"))
            })
        })
    })
})();
