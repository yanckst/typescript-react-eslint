global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
global.process.env.IS_JEST = true;

global.caches = {
  // eslint-disable-next-line no-undef
  open: jest.fn()
};

global.XMLHttpRequest = undefined;

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});