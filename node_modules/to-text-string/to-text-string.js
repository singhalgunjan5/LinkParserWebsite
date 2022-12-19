function toTextString(data) {
  if (typeof data === "string") {
    return data;
  } else if ((typeof Buffer !== "undefined" && Buffer.isBuffer(data)) || data instanceof ArrayBuffer) {
    // assumes ascii
    return Array.prototype.slice.call(new Uint8Array(data)).map((c) => String.fromCharCode(c)).join("");
  } else if (data instanceof Uint8Array) {
    // assumes ascii
    return Array.prototype.slice.call(data).map((c) => String.fromCharCode(c)).join("");
  }
}

if (typeof module === "object") {
  module.exports = toTextString;
}
