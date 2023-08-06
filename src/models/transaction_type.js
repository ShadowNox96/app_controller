class TransactionType {
  constructor(name, description){
    this.name = name
    this.description = description
  }
  get_model() {
    return {
      name: this.name, 
      description: this.description
    }
  }
}