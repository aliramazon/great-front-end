const sleepAsync = async (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
};

const sleepSync = (duration) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + duration) {}
};

const greetingSync = () => {
    console.log("Hello");
    sleepSync(2000);
    console.log("Bye");
};

const greetingAsync = async () => {
    console.log("Hello");
    await sleepAsync(2000);
    console.log("Bye");
};

greetingAsync();
console.log("I would be run after Hello");
