function readContractData() {
    console.log('Read Data button clicked'); // Debugging message

    if (typeof Web3 === 'undefined') {
        alert('Web3 library is not available. Please include the Web3.js library in your HTML file.');
        return;
    }

    const web3 = new Web3('https://bsc-dataseed.binance.org/'); // BSC public RPC node
    const contractAddress = '0x00008C683f56180dF6574B928A17E09A44B60000'; // Replace with the contract address
    const contractABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawPercent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compoundPercent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"airdropPercent","type":"uint256"},{"indexed":false,"internalType":"bool","name":"autoSell","type":"bool"},{"indexed":false,"internalType":"bool","name":"autoDeposit","type":"bool"},{"indexed":false,"internalType":"bool","name":"autoBond","type":"bool"}],"name":"ChangedAutoAllocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidUntil","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidGas","type":"uint256"}],"name":"ExtendedAutoAllocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawPercent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compoundPercent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"airdropPercent","type":"uint256"},{"indexed":false,"internalType":"bool","name":"autoSell","type":"bool"},{"indexed":false,"internalType":"bool","name":"autoDeposit","type":"bool"},{"indexed":false,"internalType":"bool","name":"autoBond","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidUntil","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidGas","type":"uint256"}],"name":"RegisteredForAutoAllocation","type":"event"},{"inputs":[],"name":"SERVER_WALLET","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawPercent","type":"uint256"},{"internalType":"uint256","name":"compoundPercent","type":"uint256"},{"internalType":"uint256","name":"airdropPercent","type":"uint256"},{"internalType":"bool","name":"autoSell","type":"bool"},{"internalType":"bool","name":"autoDeposit","type":"bool"},{"internalType":"bool","name":"autoBond","type":"bool"}],"name":"changeAutoAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"extendAutoAllocation","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"paidUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerAction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawPercent","type":"uint256"},{"internalType":"uint256","name":"compoundPercent","type":"uint256"},{"internalType":"uint256","name":"airdropPercent","type":"uint256"},{"internalType":"bool","name":"autoSell","type":"bool"},{"internalType":"bool","name":"autoDeposit","type":"bool"},{"internalType":"bool","name":"autoBond","type":"bool"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"registerForAutoAllocation","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPriceForAction","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Replace with the contract ABI
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const functionName = 'paidUntil'; // Replace with the function name from the contract ABI
    
	var address = document.getElementById('inputStrings').value.trim();
	const arguments = [address]; // Replace with the function's arguments, if any

    try {
		debugger
        console.log('Trying to call function:', functionName); // Debugging message
        contract.methods[functionName](...arguments).call()
            .then(result => {
                console.log('Function call result:', result); // Debugging message
				document.getElementById('result').innerText = address + " "+ new Date(result*1000);
            })
            .catch(error => {
                console.error('Error calling function:', error); // Debugging message
                document.getElementById('result').innerText = 'Error: Unable to read data from the smart contract';
            });
    } catch (error) {
        console.error('Error:', error); // Debugging message
        document.getElementById('result').innerText = 'Error: Unable to read data from the smart contract';
    }
}