  export default class List {
  element: HTMLElement;

  scrollPos: number;

  height: number;

  constructor({ element }: { element: HTMLElement }) {
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  clear(): void {
    this.element.innerHTML = '';
  }

  append(node: Element | DocumentFragment): void {
    this.element.appendChild(node);
  }

  getChild(selector: string): HTMLElement | null {
    return this.element.querySelector(selector);
  }

  hasChildren(): boolean {
    return this.element.hasChildNodes();
  }

  scrollToTop(): void {
    this.element.scrollTop = 0;
  }

  scrollToChildElement(element: HTMLElement, direction: 1 | 0 | -1, animatedScroll: boolean): void {
    if (!element) {
      return;
    }

    const scrollBehavior = animatedScroll ? 'smooth' : 'auto';
    const scrollVerticalBlock = {'0': 'center', '1': 'end', '-1': 'start'};

    element.scrollIntoView({block: scrollVerticalBlock[String(direction)], behavior: scrollBehavior});
  }
}
