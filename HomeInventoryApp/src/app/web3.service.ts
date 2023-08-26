import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { environment } from 'src/environments/environment';

declare const window: any;

// declare global {
//   interface Window {
//     web3: any;
//     ethereum:any;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  window: any;
  private web3: Web3;
  private contract: any;

  constructor() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider(environment.ethereumNodeUrl));
    }

    // Initialize the contract instance
    this.contract = new this.web3.eth.Contract(environment.contractAbi, environment.contractAddress);
  }

  private getAccounts = async () => {
    try {
      return await window.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  async getMyItems(): Promise<any> {
    // const accounts = await this.web3.eth.getAccounts();
    // console.log(accounts.length);
    // // Call the getMyItems function on the contract
    // try {
    //   const result = await this.contract.methods.getMyItems().call({ from: accounts[0] });
    //   console.log('Contract Call Result:', result);
    //   return result;
    // } catch (error) {
    //   console.error('Error calling contract:', error);
    // }

    window.web3 = new Web3(window.ethereum);
    let addresses = await this.getAccounts();
    console.log("service", addresses)
    if (!addresses.length) {
      try {
        addresses = await window.ethereum.enable();
      } catch (e) {
        return false;
      }
    }

    try {
        const contract = new window.web3.eth.Contract(
        environment.contractAbi,
        environment.contractAddress,
      );
      const result = await contract.methods.getMyItems().call({ from: addresses[0] });
      console.log("token", result);
      return result

    }
    catch (error) {
      console.log(error);
    }

    // return result;
  }

  getContract(): any {
    return this.contract;
  }
}
