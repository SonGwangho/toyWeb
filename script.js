class Enforce {
  constructor() {
    this.json = null;
    this.load = false;
  }

  async loading() {
    this.json = await fetch("./assets/enforce.json").then((response) =>
      response.json()
    );
    this.load = true;
  }

  getEnforced() {
    if (!this.load) return null;

    let result = [];

    for (let item of this.json.enforce_slot_rate) {
      if (Random.getNumber(0, 99) < item) {
        const stat =
          this.json.enforce_list[
            Random.getNumber(0, this.json.enforce_list.length - 1)
          ];
        const info = this.json.enforce_info[stat.info_key];

        const rate = Random.getNumber(1, 90);
        let sum = 0;
        for (let i of info) {
          sum += i.rate;
          if (sum >= rate) {
            const r = {};
            r[stat.ko] = i.number;
            result.push(r);
            break;
          }
        }
      }
    }

    // console.log(result);
    return result;
  }
}
