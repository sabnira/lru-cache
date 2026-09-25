# LRU Cache

A simple Least Recently Used (LRU) Cache implementation using JavaScript Map.

## Features

- Positive cache capacity
- get(key)
- put(key, value)
- LRU eviction
- O(1) average time for get and put

## Approach

JavaScript's Map maintains insertion order.

- The first key is the least recently used.
- The last key is the most recently used.
- On get(), the key is removed and reinserted to make it most recently used.
- When capacity is exceeded, the first key is removed.

## Complexity

- get(): O(1) average
- put(): O(1) average
- Space: O(capacity)

## How to Run

```bash
node test.js