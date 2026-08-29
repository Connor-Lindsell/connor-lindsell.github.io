/* --------------------------------------------------------------------------
   Hero scroll scrub

   Maps scroll progress through the tall `.hero` driver onto the hero video's
   currentTime. The video is never played - every frame shown is the result of
   a seek, so the visual advances only while the user is actually scrolling and
   reverses when they scroll back up. Plain rAF + passive listeners; the site
   has no JS dependencies and one small effect does not justify adding GSAP.
   -------------------------------------------------------------------------- */
function initHeroScrub() {
    var section = document.querySelector('[data-hero-scrub]');
    if (!section) { return; }

    var video = section.querySelector('[data-hero-video]');
    var pin = section.querySelector('.hero__pin');
    if (!video || !pin) { return; }

    // Reduced motion: drop the video before it is ever fetched and leave the
    // poster as a plain, unpinned hero (the CSS collapses the scrub distance).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.remove();
        return;
    }

    var FRAME = 1 / 24;          // source is 24 fps
    var SEEK_TIMEOUT = 250;      // ms before a stalled `seeking` flag is ignored
    var playable = 0;            // duration minus a tail guard
    var applied = -1;            // last time written to the element
    var shown = -1;              // last progress pushed to CSS
    var seekStartedAt = 0;
    var ticking = false;

    function render() {
        ticking = false;

        var rect = section.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) { return; }

        // How far the sticky pin has travelled inside its driver: 0 before it
        // pins, `travel` once it has been released at the bottom. Read live so
        // resizes and layout shifts need no cached measurements.
        var travel = Math.max(1, section.offsetHeight - pin.offsetHeight);
        var moved = pin.getBoundingClientRect().top - rect.top;
        var progress = Math.min(1, Math.max(0, moved / travel));

        if (Math.abs(progress - shown) > 0.001) {
            shown = progress;
            section.style.setProperty('--hero-progress', progress.toFixed(4));
        }

        if (!playable) { return; }

        var next = progress * playable;
        if (Math.abs(next - applied) < FRAME * 0.5) { return; }

        // One seek in flight at a time: queueing seeks on every scroll event
        // makes the decoder fall behind the scrollbar. `seeked` re-runs this,
        // so the final position is always caught up to.
        if (video.seeking && (performance.now() - seekStartedAt) < SEEK_TIMEOUT) { return; }

        applied = next;
        seekStartedAt = performance.now();
        video.currentTime = next;
    }

    function requestTick() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(render);
        }
    }

    function onMetadata() {
        // Stop just short of the end: some browsers will not render the final
        // frame, and landing exactly on duration can fire `ended`.
        playable = Math.max(0, (video.duration || 0) - 0.05);
        requestTick();
    }

    // The video must never run on its own clock. Pausing any play() also makes
    // the iOS gesture unlock below a no-op visually.
    video.addEventListener('play', function () { video.pause(); });

    video.addEventListener('loadeddata', function () {
        video.classList.add('is-ready');   // cross-fade the poster to live frames
        requestTick();
    }, { once: true });

    video.addEventListener('seeked', requestTick);

    if (video.readyState >= 1) {
        onMetadata();
    } else {
        video.addEventListener('loadedmetadata', onMetadata, { once: true });
    }

    // iOS Safari will not paint frames for a programmatic seek until the
    // element has received a user gesture; play() supplies one and the `play`
    // handler above pauses it again immediately.
    var unlocked = false;
    function unlock() {
        if (unlocked) { return; }
        unlocked = true;
        var attempt = video.play();
        if (attempt && attempt.catch) { attempt.catch(function () {}); }
    }
    ['touchstart', 'pointerdown', 'wheel', 'keydown'].forEach(function (type) {
        window.addEventListener(type, unlock, { once: true, passive: true });
    });

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    window.addEventListener('orientationchange', requestTick, { passive: true });
    window.addEventListener('pageshow', requestTick);

    // Start fetching only now, so the video never competes with first paint.
    video.preload = 'auto';
    video.load();
}

document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.site-nav__links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        document.addEventListener('click', function (event) {
            if (!event.target.closest('.site-nav')) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        navLinks.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function (event) {
            var target = document.getElementById('top');
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    initHeroScrub();
});
