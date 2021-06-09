const SimpleBank = artifacts.require("SimpleBank");


contract("SimpleBank", (accounts) => {
    let simpleBankInstance;
    let web3Instance;


    beforeEach("set web3", async () => {
        simpleBankInstance = await SimpleBank.deployed()
        web3Instance = await web3;
    });

    it('should test initial balance of account 0 in the contract', async () => {
        try {
            const balance = await simpleBankInstance.getBalance({ from: accounts[0] });
            const ether_balance =  web3Instance.utils.fromWei(balance, "ether");
            assert.equal(0, ether_balance, "Wrong initial balance");
        } catch (err) {
            console.log("should test initial balance error!!", err)
        }
    });
    it('test balance of account 0 in the contract after deposit', async () => {
        try {
            const deposit = await simpleBankInstance.deposit(({from: accounts[0], value: web3Instance.utils.toWei('10', 'ether')}));
            const balance = await simpleBankInstance.getBalance({ from: accounts[0] });
            const ether_balance =  web3Instance.utils.fromWei(balance, "ether");
            assert.equal(10, ether_balance, "Wrong balance after deposit")
        } catch (e) {
            console.log('test balance after deposit', e)
        }
    });
    it('should withdraw correct amount from account 1 in the smart contract', async () => {
        try {
            await simpleBankInstance.deposit({from: accounts[1], value: web3Instance.utils.toWei('5', 'ether')});
            const wei =  web3Instance.utils.toWei('1', 'ether');
            await simpleBankInstance.withdraw(web3Instance.utils.toBN(wei), {from: accounts[1]});
            const balance = await simpleBankInstance.getBalance({from: accounts[1]});
            const ether_balance =  web3Instance.utils.fromWei(balance, "ether");
            assert.equal(4, parseInt(ether_balance), "Wrong balance after withdrawal");
        } catch (err) {
            console.log('What is error', err);
        }
    });
})
