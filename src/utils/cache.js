class LocalCache {
    setCache(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
    getCache(key) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
    deleteCache(key) {
      window.localStorage.removeItem(key)
    }
    claerCache() {
      window.localStorage.clear()
    }
  }
  
  export default new LocalCache()
  