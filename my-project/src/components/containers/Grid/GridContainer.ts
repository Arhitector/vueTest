import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
import { cloneDeep } from 'lodash';

@Component({
  template: require('./grid.html')
})
export class GridContainer extends Vue {
  localgrid = [];
  changedData = [];
  mounted() {
    this.$store.dispatch(MutationTypes.GET_GRID);
    this.localgrid = cloneDeep(this.$store.state.grid);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleChecked(x, y) {
    this.localgrid[x][y].isActive = !this.localgrid[x][y].isActive;
  }
  handleChangeText(x, y, e) {
    this.localgrid[x][y].text = e.target.value;
    this.localgrid[x][y].showSave = true;
    this.handleAddChangedData({
      x: x,
      y: y,
      data: this.localgrid[x][y],
    });
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
    const vertical = window.pageYOffset || document.documentElement.scrollTop;
    const horizontal = window.pageXOffset || document.documentElement.scrollLeft;
    const loadBottom = vertical + window.innerHeight >= document.body.offsetHeight;
    const loadLeft = horizontal + window.innerWidth >= document.getElementById("tableWrap").offsetWidth;
    
    loadBottom && console.log('load bottom part');
    loadLeft && console.log('load left part');
  }

  onSave(x,y) {
    this.localgrid[x][y].showSave = false;
    console.log('show Save', this.changedData);
  }
  
  get grdiItem() {
    return this.localgrid;
  }
}
