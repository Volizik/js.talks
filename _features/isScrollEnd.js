// If you need to know if you scrolled to the bottom of page,
// you could check it using this code:

const isScrollEnd = () =>
    document.documentElement.scrollHeight === window.scrollY + window.innerHeight;

// document.documentElement.scrollHeight - whole document height.
// window.scrollY shows us how many pixels we already scrolled.
// window.innerHeight - browser viewport height.
