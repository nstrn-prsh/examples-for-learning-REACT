const instance = {};

export function register(id, callback) {
     instance[id] = callback;
}

export function unRegister(id) {
     delete instance[id];
}

export function historyPushState(state = {}, title = "", to) {
     window.history.pushState(state, title, to);
}
