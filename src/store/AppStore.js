import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._location = ''
    makeAutoObservable(this)
  }

  setLocation(location) {
    this._location = location
  }

  get location() {
    return this._location
  }
}
