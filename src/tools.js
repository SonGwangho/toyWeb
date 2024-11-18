class Random {
  static getNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getItem(array = undefined) {
    if (!array || !Array.isArray(array)) return null;
    const index = this.getNumber(0, array.length - 1);
    console.log(index, array);
    return array[index];
  }

  static shuffle(array = undefined) {
    if (Array.isArray(array)) {
      const new_array = [];
      while (array.length > 0) {
        const index = this.getNumber(0, array.length - 1);
        new_array.push(array[index]);
        array = array
          .slice(0, index)
          .concat(array.slice(index + 1, array.length));
      }
      return new_array;
    } else {
      return null;
    }
  }
}

class Toast {
  static showToast(text, option) {
    Toastify(
      Object.assign(
        {
          text: text,
        },
        option
      )
    ).showToast();
  }
}
  
