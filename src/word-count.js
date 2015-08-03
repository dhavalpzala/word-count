(function() {
    var app = angular.module("word-count", []);
    app.controller("IndexController", [ '$scope', function($scope) {
        $scope.list = [];

        $scope.find = function(inputText) {
            var sList = new linkedList(), dataItems = inputText.split(" ");

            for (var index = 0; index < dataItems.length; index++) {
                if (dataItems[index] !== "") {
                    sList.add(dataItems[index]);
                }
            }

            this.list = sList.occurencesList();
        };
    } ]);
})();