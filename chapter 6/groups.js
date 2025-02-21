class Group {
    constructor(){
        this.set=[];
    }

    add(value){
        if(!this.set.includes(value))
            this.set.push(value);
    }

    delete(value){
        if(this.set.includes(value))
            this.set = this.set.filter(x=>x!==value);
    }

    has(value){
        return this.set.includes(value);
    }
    
    static from (obj){
        let result = new this();
        for(let element of obj)
            result.add(element)
        return result;
    }
}


//bookish
/*

class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}



*/