// Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID, it returns a function that when called, cancels the interval. The setCancellableInterval function should have the exact same signature as setInterval:

const setCancellableInterval = (callback, delay, ...args) => {
    const intervalId = setInterval(callback, delay, ...args);

    return () => {
        clearInterval(intervalId);
    };
};
