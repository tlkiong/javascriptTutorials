var deepCompare = function(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        return false;
    }

    var propertiesInA = 0;
    var propertiesInB = 0;

    for (var prop in a) {
        propertiesInA += 1;
    }

    for (var prop in b) {
        propertiesInB += 1;
        if (!(prop in a) || !deepCompare(a[prop], b[prop])) {
            return false;
        }
    }

    return propertiesInB == propertiesInA;
}

var obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepCompare(obj, obj));
console.log(deepCompare(obj, {
    here: 1,
    object: 2
}));
console.log(deepCompare(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
