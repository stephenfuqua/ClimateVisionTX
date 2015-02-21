app.controller('chartsController', function ($scope, $compile) {

    var charts = [
        'changeTexasTemperature',
        'dryDays',
        'globalTemperatureTimeSeries',
        'projectedTexasChange',
        'waterSupplyRisk'
    ]

    var max = charts.length;
    var index = Math.floor(Math.random() * (max - 1));

    var view = 'app/views/charts/' + charts[index] + '.html';

    var htmlcontent = $('#loadChart');
    htmlcontent.load(view);
    $compile(htmlcontent.contents())($scope);
});