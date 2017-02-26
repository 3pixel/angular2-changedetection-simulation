function removeClassName(className, el, zone, removeTime: number = 0) {
  zone.runOutsideAngular(() => {
    setTimeout(() => {
      el.nativeElement.querySelector('a').classList.remove(className);
      removeStackByElement(el);
    }, removeTime);
  });
};
export function reset() {
  if (isRun == true) {
    return;
  }
  stack.forEach((model: StackData) => {
    // setTimeout(()=>{
    removeClassName('checked', model.el, model.zone);
    // },0);
  });
};
export function toggleClass(el, zone, className = 'checked') {
  addStack(el, zone, className, (el, zone, className, fn: Function) => {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    // console.log("added class: ", a.parentNode.nodeName);
    fn();
    // removeClassName(className, el,zone,5000);
  });
};

class StackData {
  fn: Function;
  el: any;
  zone: any;
  className: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
let nextIndex: number = 0;
let stack: StackData[] = [];
function addStack(el, zone, className, fn: Function) {
  let found: boolean = false;
  stack.forEach((model: StackData) => {
    if (model.el == el) {
      found = true;
      return false;
    }
  });
  if (found == false) {
    // console.log("add stack: ", el.nativeElement.querySelector('a').parentNode.nodeName);
    stack.push({"fn": fn, "el": el, "zone": zone, "className": className});
    checkRun();
  }
}

function removeStackByElement(el: any) {
  let index: number = stack.findIndex((model: StackData) => {
    return model.el == el;
  });
  if (index > -1) {
    stack.splice(index, 1);
  }
  if (stack.length == 0) {
    nextIndex = 0;
  }
  checkRun();
}

let isRun: boolean = false;
function checkRun() {
  if (stack.length > 0 && isRun == false && stack[nextIndex] != null) {
    isRun = true;

    setTimeout(() => {
      let data: StackData = stack[nextIndex++];
      // console.log("checkRun setTimeout nodeName: ", data.el.nativeElement.querySelector('a').parentNode.nodeName);
      data.fn(data.el, data.zone, data.className, () => {
        isRun = false;
        checkRun();
      });
    }, 200);
  }
}
