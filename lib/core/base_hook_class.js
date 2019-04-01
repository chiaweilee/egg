'use strict';

const WORKER = Symbol('BaseHookClass#worker');

class BaseHookClass {

  constructor(worker) {
    this[WORKER] = worker;
  }

  get logger() {
    return this[WORKER].logger;
  }

  get config() {
    return this[WORKER].config;
  }

  get app() {
    return this[WORKER];
  }

  get agent() {
    return this[WORKER];
  }
}

module.exports = BaseHookClass;
