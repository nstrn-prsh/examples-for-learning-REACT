const instance = {};

export function register(id, callback) {
     instance[id] = callback;
}

export function unRegister(id) {
     delete instance[id];
}
