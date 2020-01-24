function ListaComprasController($scope) {
    $scope.itens = [
        { produto: 'Torta de Frango', quantidade: 2, comprado: false },
        { produto: 'Refrigerante', quantidade: 4, comprado: false }
    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({
            produto: $scope.item.produto,
            quantidade: $scope.item.quantidade,
            comprado: false
        });
        $scope.item.produto = $scope.item.quantidade = '';
    };
}