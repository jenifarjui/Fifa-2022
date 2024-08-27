function scrolls(direction, scrollElement, scrollValue) {
    const slide = document.querySelector('.' + scrollElement);
    if (direction == "prev") {
        slide.scrollBy({
            left: scrollValue,
            behavior: 'smooth'
        });
    } else {
        slide.scrollBy({
            left: scrollValue,
            behavior: 'smooth'
        });
    }
}