export const calculator = {
  operand1: 0,
  operand2: 0,
  setValues(val1:number, val2:number) {
      this.operand1 = val1;
      this.operand2 = val2;
  },
  sum() {
      return this.operand1 + this.operand2;
  },
  mul() {
      return this.operand1 * this.operand2;
  },
  div() {
    return this.operand1 / this.operand2;
},
sub() {
    return this.operand1 - this.operand2;
}
};

