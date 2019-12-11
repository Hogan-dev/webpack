import { observable, action, computed } from "mobx";

class Store {
    @observable title = "this is a little project of mobx";
    @observable isDisplay = true;

    //用@action.bind将action绑定到目标对象
    @action.bound setIsDisplay() {
        this.isDisplay = !this.isDisplay;
    }

    //使用箭头函数将action绑定到目标对象
    @action setTitle = value => {
        this.title = value;
    }

    @computed get numberOfWords() {
        return this.title.length;
    }
}

export default Store;