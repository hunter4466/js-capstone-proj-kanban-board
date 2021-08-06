function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
                    || e.code === 1014
                    || e.name === 'QuotaExceededError'
                    || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
                    && (storage && storage.length !== 0);
  }
}

export function storeInfo(name, info) {
  if (storageAvailable('localStorage')) {
    localStorage.setItem(name, JSON.stringify(info));
  }
}
export function retrieveInfo(name) {
  if (localStorage.getItem(name)) {
    const infoValue = JSON.parse(localStorage.getItem(name));
    return infoValue;
  }
  return false;
}