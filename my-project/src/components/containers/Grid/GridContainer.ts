import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
import { cloneDeep } from 'lodash';

const cellWidth = 124;
const cellHeight = 32;
const frameSize = 40;
const maxSize = 4000;

@Component({
  template: require('./grid.html')
})
export class GridContainer extends Vue {
  localgrid = [];
  changedData = [];
  tableGrid = [0, 0];
  windowGrid = [Math.floor((document.body.offsetHeight - frameSize * 2) / cellHeight), Math.floor(document.body.offsetWidth / cellWidth)];
  mounted() {
    this.requestGrid();
    let el = document.getElementById('wrap');
    el.style.width = `${cellWidth * maxSize}px`;
    el.style.height = `${cellHeight * maxSize}px`;
    window.addEventListener('scroll', this.handleScroll);
  }

  handleChecked(val) {
    this.localgrid[val[0]][val[1]].isActive = !this.localgrid[val[0]][val[1]].isActive;
  }
  handleChangeText(val, e) {
    this.localgrid[val[0]][val[1]].text = e.target.value;
    this.localgrid[val[0]][val[1]].showSave = true;
    this.handleAddChangedData({
      x: val[0],
      y: val[1],
      data: this.localgrid[val[0]][val[1]],
    });
  }

  requestGrid() {
    this.$store.dispatch(MutationTypes.GET_GRID, {
      grid: [...this.tableGrid, ...this.windowGrid],
    });
    this.localgrid = cloneDeep(this.$store.state.grid);
  }

  handleAddChangedData({x, y, data}) {
    const dataArray = {
      x: data.x,
      y: data.y,
      isActive: data.isActive,
      text: data.text,
    };
    this.changedData[x]
      ? this.changedData[x][y] = dataArray
      : (this.changedData[x] = []) && (this.changedData[x][y] = dataArray);
  }

  handleScroll() {
    const diffX = maxSize * cellHeight > this.tableGrid[1] ? Math.ceil(document.documentElement.scrollLeft / cellWidth) : this.tableGrid[1];
    const diffY = maxSize * cellHeight > this.tableGrid[0] ? Math.ceil(document.documentElement.scrollTop / cellHeight) : this.tableGrid[0];
    (this.tableGrid[0] !== diffX || this.tableGrid[1] !== diffY)
    && ( this.tableGrid = [ this.windowGrid[0] * diffY, this.windowGrid[1] * diffX ])
    && this.requestGrid();
  }

  onSave(val) {
    this.localgrid[val[0]][val[1]].showSave = false;
    console.log('show Save', this.changedData);
  }
  
  get grdiItem() {
    return this.localgrid;
  }
}
