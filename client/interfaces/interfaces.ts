export interface Bill {
  id: number;
  name: string;
  value: number;
  recurrency?: number[];
}

export interface Earn {
  id: number;
  name: string;
  value: number;
  recurrency?: number[];
}

export interface Wallet {
  totalEarnings: number;
  earnings: Earn[];
}

export interface Month {
  id: number;
  name: string;
  avaliableMoney: number;
  totalEarnings: number;
  totalBills: number;
  bills: Bill[];
}

export interface Profile {
  name?: string;
  email?: string;
  password?: string;
  myWallet?: Wallet;
  months?: Month[];
}
