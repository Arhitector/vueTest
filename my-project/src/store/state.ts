
export interface GridItem {
  x: number;
  y: number;
  isActive: boolean;
  text: string;
}

export class State {
  public grid: GridItem[];

  constructor() {
    this.grid = [];
  }
}

const state = new State();
export default state;
