class stockPortfolio {

    takeUserInput() {
        const fs = require('fs');
        var readline = require('readline-sync');

        try {
            var N = readline.question("Enter value of N");

            if (N == "") throw "Input cant be empty"
            if (isNaN(N)) throw "Input must be a number"

            var stockName = new Array(N);
            var noOfShares = new Array(N);
            var sharePrice = new Array(N);
            var items = new Array(N);

            for (var i = 0; i < N; i++) {
                stockName[i] = readline.question("Enter value ofstockName");
                if (stockName[i] == "") throw "Input cant be empty"
                noOfShares[i] = readline.question("Enter number of shares");
                if (noOfShares[i] == "") throw "Input cant be empty"
                if (isNaN(noOfShares[i])) throw "Input must be a number"
                sharePrice[i] = readline.question("Enter share price");
                if (sharePrice[i] == "") throw "Input cant be empty"
                if (isNaN(sharePrice[i])) throw "Input must be a number"
                items[i] = { "stockname": stockName[i], "noofshares": noOfShares[i], "shareprice": sharePrice[i] };
            }
            let data = JSON.stringify(items);
            fs.writeFileSync('stockInput.json', data);
        }
        catch (err) {
            return err;
        }
    }
}

class stock {
    calStockValues() {
        const fs = require('fs');
        let rawdata = fs.readFileSync('stockInput.json');    
        let stockItems = JSON.parse(rawdata);
        var totalStock=0;
        for(var i=0;i<stockItems.length;i++){
            stockItems[i].totalValueOfEachStock=(stockItems[i].noofshares)*(stockItems[i].shareprice);
            totalStock=totalStock+parseInt(stockItems[i].totalValueOfEachStock);
        }
        let data = JSON.stringify(stockItems);       
        fs.writeFileSync('stockOutput.json',data); 
        return totalStock;
    }

}

module.exports = {
    stock,
    stockPortfolio
}