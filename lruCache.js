class Cache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be positive");
    }

    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);

    // Move key to most recently used
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    // Remove existing key before updating
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // Remove least recently used key
    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
  }
}

module.exports = Cache;