


function time(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, time);
    });
  }