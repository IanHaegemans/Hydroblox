import { Injectable } from '@angular/core';
import { ErrorSnackService } from '../services/errorsnack.service';
import { LoaderService } from '../services/loader.service';
import { BaseContractService } from './basecontract.service';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorContractService extends BaseContractService {

  constructor(
    private web3Service: Web3Service,
    loadService: LoaderService,
    snackService: ErrorSnackService) {
    super(loadService, snackService);
  }

  async isOwner(): Promise<boolean> {
    var contract = this.web3Service.getDistributorContract();
    return await super.call<boolean>(contract, 'isOwner');
  }

  async currentState(): Promise<string> {
    var contract = this.web3Service.getDistributorContract();
    var result = await super.call<string>(contract, 'state');

    if (result === '0') {
      return 'Enrollment';
    }
    else if (result === '1') {
      return 'Running';
    }
    else if (result === '2') {
      return 'Finished';
    }
    else {
      return 'Unkown'
    }
  }

  async transitionToNextState(): Promise<void> {
    var contract = this.web3Service.getDistributorContract();
    await super.send<string>(contract, 'transitionToNextState', 0);
  }

  async tokenBalance(): Promise<number> {
    var contract = this.web3Service.getDistributorContract();
    var account = this.web3Service.getDefaultAccount();
    return await super.call<number>(contract, 'tokenBalanceOf', account);
  }

  async tokenTotalSupply(): Promise<number> {
    var contract = this.web3Service.getDistributorContract();
    return await super.call<number>(contract, 'tokenTotalSupply');
  }

  async subscribeAsConsumer(): Promise<void> {
    var contract = this.web3Service.getDistributorContract();
    const oneEther = 1000000000000000000;
    await super.send<void>(contract, 'subscribeAsConsumer', oneEther);
  }

  async claimTokensAsConsumer(): Promise<void> {
    var contract = this.web3Service.getDistributorContract();
    await super.send<void>(contract, 'claimTokensAsConsumer', 0);
  }

  async subscribeAsProducer(): Promise<void> {
    var contract = this.web3Service.getDistributorContract();
    return await super.send<void>(contract, 'subscribeAsProducer', 0);
  }

  async consume(amount: number) {
    var contract = this.web3Service.getDistributorContract();
    await super.send<string>(contract, 'consume', 0, amount);
  }

  async produce(amount: number): Promise<number> {
    var contract = this.web3Service.getDistributorContract();
    return await super.send<number>(contract, 'produce', 0, amount);
  }

  async claimTokensAsProducer(): Promise<void> {
    var contract = this.web3Service.getDistributorContract();
    await super.send<string>(contract, 'claimEtherAsProducer', 0);
  }
}
