const Queue = (() => {
    const wp = new WeakMap();
    class Queue {
        constructor () {
            wp.set(this, [])
        }

        enqueue (ele) {
            wp.get(this).push(ele)
        }
        dequeue () {
            return wp.get(this).shift()
        }
        front () {
            return wp.get(this)[0]
        }
        isEmpty () {
            return wp.get(this).length === 0
        }
        size () {
            return wp.get(this).length
        }
        print () {
            return wp.get(this).toString()
        }
    }

    return Queue
})();