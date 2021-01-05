import { action, observable, computed, configure, runInAction } from 'mobx'

configure( { enforceActions: 'observed'})
class AppleStore {
  @observable apples = [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
  ]
  @observable newAppleId = 3;  // id
  @observable isPicking = false; // 状态

  @computed get appleNow() {
    const appleNow = this.apples.filter(apple => !apple.isEaten)
    const quantity = appleNow.length
    const weight = appleNow.reduce((total, next) => total += next.weight, 0)
    return {
      quantity,
      weight
    }
  }

  @computed get appleEaten() {
    const appleEaten = this.apples.filter(apple => apple.isEaten)
    const quantity = appleEaten.length
    const weight = appleEaten.reduce((total, next) => total += next.weight, 0)
    return {
      quantity,
      weight
    }
  }
  @action.bound async pickApple() {
    if (this.isPicking) {
      return;
    }
    this.isPicking = true;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
       }, 1500)
    })
    runInAction(() => {
      let weight = Math.floor(200 + Math.random() * 50);
      this.isPicking = false;
      this.apples.push({
          id: this.newAppleId++,
          weight: weight,
          isEaten: false
      });  
    }) 
  }
  @action.bound eatApple (appleId) {
    const target = this.apples.find(item => item.id === appleId)
    target.isEaten = true;
  }
}

const apple = new AppleStore()

export default apple