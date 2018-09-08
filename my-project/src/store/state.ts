
export interface GridItem {
  x: number;
  y: number;
  isActive: boolean;
}

export class State {
  public count: number;
  public grid: GridItem[];

  constructor() {
    this.count = 0;
    this.grid = [];
  }
}

const state = new State();
export default state;
