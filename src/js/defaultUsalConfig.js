window.USAL.config({
    defaults: {
        animation: "fade",      // Default animation type
        direction: "u",         // Direction (u, d, l, r, ul, ur, dl, dr)
        duration: 1000,         // Animation duration (ms)
        delay: 0,               // Animation delay (ms)
        threshold: 10,          // Viewport threshold (%)
        splitDelay: 30,         // Delay between split items (ms)
        forwards: false,        // Keep final animation state
        easing: "ease-out",     // CSS easing function
        blur: false ,            // false, true (0.625rem), or number (rem)
        loop: 'mirror',         // Default loop type (mirror, jump)
    },
  observersDelay: 50,       // Delay for observers (ms)
  once: false               // Run animation only once
});

// Can be reconfigured later
window.USAL.config({
    defaults: {
        duration: 2000,         // Change duration
        easing: "ease-in-out"   // Change easing
    },
    once: true                // Now runs only once
});
