var readline = require('readline-sync');
var fs = require('fs');
class General {
    readFile(filename) {
        let rawdata = fs.readFileSync(filename);
        var array = JSON.parse(rawdata);
        return array;
    }
    writeFile(array, fileName) {
        let data = JSON.stringify(array, null, 2);
        fs.writeFileSync(fileName, data);
    }
}

var general = new General();

class StockAccount {
    stockAccount(filename) {

    }
    valueOf(customer, symbol) {
        var customersArray = general.readFile('customers.json');
        for (var i = 0; i < customersArray.length; i++) {
            if (customersArray[i].name == customer)
                for (var j = 0; j < (customersArray[i].companies).length; j++) {
                    if (customersArray[i].companies[j].symbol == symbol)
                        return customersArray[i].companies[j].noOfShares;
                }
        }

    }

    buy(customer, amount, symbol) {
        var customersArray = general.readFile('customers.json');
        var companiesArray = general.readFile('companies.json');
        var transactionsArray = general.readFile('transactions.json');
        var count = transactionsArray.length;
        try {
            for (var i = 0; i < companiesArray.length; i++) {
                if (companiesArray[i].symbol == symbol && companiesArray[i].noOfShares >= amount) {
                    companiesArray[i].noOfShares = (parseInt(companiesArray[i].noOfShares) - parseInt(amount)).toString();
                    var noOfShares = amount.toString();
                    var priceOfShares = companiesArray[i].priceOfShares;
                    var typeOfTransaction = "buy";
                    transactionsArray[count] = { customer, noOfShares, symbol, priceOfShares, typeOfTransaction };
                }
                if (companiesArray[i].noOfShares < amount)
                    throw "Insufficient Shares with company";
            }
            for (var i = 0; i < customersArray.length; i++) {
                var bool = true;
                if (customersArray[i].name == customer) {
                    var count = 0;
                    for (var j = 0; j < (customersArray[i].companies).length; j++) {
                        if (customersArray[i].companies[j].symbol == symbol) {
                            customersArray[i].companies[j].noOfShares = (parseInt(customersArray[i].companies[j].noOfShares) + parseInt(amount)).toString();
                            bool = false;
                            break;
                        }
                        count++;
                    }
                    if (bool)
                        customersArray[i].companies[count] = { symbol, amount };
                    break;
                }
            }
        } catch (err) {
            console.log(err);
        }
        general.writeFile(companiesArray, 'companies.json');
        general.writeFile(customersArray, 'customers.json');
        general.writeFile(transactionsArray, 'transactions.json');
    }

    sell(customer, amount, symbol) {
        var customersArray = general.readFile('customers.json');
        var companiesArray = general.readFile('companies.json');
        var transactionsArray = general.readFile('transactions.json');
        var count = transactionsArray.length;
        try {
            for (var i = 0; i < customersArray.length; i++) {
                if (customersArray[i].name == customer) {
                    for (var j = 0; j < (customersArray[i].companies).length; j++) {
                        if (customersArray[i].companies[j].symbol == symbol && customersArray[i].companies[j].noOfShares >= amount) {
                            customersArray[i].companies[j].noOfShares = (parseInt(customersArray[i].companies[j].noOfShares) - parseInt(amount)).toString();
                            break;
                        }
                        if (customersArray[i].companies[j].noOfShares < amount)
                            throw "Insufficient funds with customer";
                    }
                    break;
                }
            }
            for (var i = 0; i < companiesArray.length; i++) {
                if (companiesArray[i].symbol == symbol) {
                    companiesArray[i].noOfShares = (parseInt(companiesArray[i].noOfShares) + parseInt(amount)).toString();
                    var noOfShares = amount.toString();
                    var priceOfShares = companiesArray[i].priceOfShares;
                    var typeOfTransaction = "sell";
                    transactionsArray[count] = { customer, noOfShares, symbol, priceOfShares, typeOfTransaction };
                }
            }
        } catch (err) {
            console.log(err);
        }

        general.writeFile(companiesArray, 'companies.json');
        general.writeFile(customersArray, 'customers.json');
        general.writeFile(transactionsArray, 'transactions.json');
    }

    printReport() {
        var transactionsArray = general.readFile('transactions.json');
        var length = transactionsArray.length;
        console.log("----------------------------------------STOCK REPORT------------------------------------------")
        for (var i = 0; i < length; i++) {
            console.log("In the transaction with id " + i + " the customer " + transactionsArray[i].customer + " " + transactionsArray[i].typeOfTransaction + "s " + transactionsArray[i].noOfShares + " stocks of " + transactionsArray[i].symbol + " at a price of " + transactionsArray[i].priceOfShares);
        }
    }

    addCustomers() {
        console.log("ADDING CUSTOMERS\n");
        var array = general.readFile('customers.json');
        var i = array.length;
        try {
            while (1) {
                var name = readline.question("Enter your name ");
                var companies = [];
                while (1) {
                    var symbol = readline.question("Enter the symbol of the company you own the shares of ");
                    if (!isNaN(symbol))
                        throw "Symbol must be a string";
                    var noOfShares = readline.question("Enter the no of shares you of the above company ");
                    if (isNaN(noOfShares))
                        throw "Number of shares must be a number";
                    companies.push({ symbol, noOfShares });
                    var askToExit = readline.question("Press any button to continue adding more companies, Press n to exit ");
                    if (askToExit == 'n') {
                        break;
                    }
                }
                array.push({ name, companies });
                var askToExit = readline.question("Press any button to continue adding more customers, Press n to exit ");
                if (askToExit == 'n') {
                    break;
                }
            }
        } catch (err) {
            console.log(err);
        }
        general.writeFile(array, 'customers.json');
    }

    addCompanyShares() {
        console.log("ADDING COMPANIES\n");
        var array = general.readFile('companies.json');
        var i = array.length;
        try {
            while (1) {
                var symbol = readline.question("Enter the symbol ");
                if (!isNaN(symbol))
                    throw "Symbol must be a string";
                var noOfShares = readline.question("Enter the no of shares available ");
                if (isNaN(noOfShares))
                    throw "Number of shares must be a number";
                var priceOfShares = readline.question("Enter the price of company share in market ")
                if (isNaN(priceOfShares))
                    throw "Price of share must be a number";
                array.push({ symbol, noOfShares, priceOfShares });
                var askToExit = readline.question("Press any button to continue, Press n to exit ");
                if (askToExit == 'n') {
                    break;
                }
            }
            console.log(array);
            general.writeFile(array, 'companies.json');
        } catch (err) {
            console.log(err);
        }

    }
}
var stockAccount = new StockAccount();



//stockAccount.addCompanyShares();
//stockAccount.addCustomers();

//stockAccount.buy('Aditi', 100, 'Facebook');
//stockAccount.sell('Aditi', 100, 'Facebook');
//console.log(stockAccount.valueOf('Aditi','Facebook'));
//stockAccount.printReport();