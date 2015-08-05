var linkedList = (function() {
    var list = function() {
        var start = null;

        this.add = function(data) {
            var node = makeNode(data);
            if (start === null) {
                start = node;
            } else {
                var save = start, prev = null;
                while (save != null && save.data < data) {
                    prev = save;
                    save = save.next;
                }

                if (save != null && save.data === data) {
                    save.count++;
                    return;
                } else {
                    node.next = save;
                    if (save === start) {
                        start = node;
                    } else {
                        prev.next = node;
                    }
                }
            }
        };

        this.occurencesList = function() {
            var save = start, results = [];
            while (save != null) {
                results.push({
                    data : save.data,
                    count : save.count
                });
                save = save.next;
            }
            return results;
        };
    };

    function makeNode(data) {
        return {
            data : data,
            count : 1,
            next : null
        };
    }

    return list;
})();