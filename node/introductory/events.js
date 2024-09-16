import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("change", () => {
  console.log("change");
})

emitter.emit("change");