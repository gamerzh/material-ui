import * as React from 'react';
import { click, mouseDown, mouseUp, keyDown, keyUp } from './fireDiscreteEvent';
import { act, fireEvent, FireFunction } from './createRenderer';

export function touch(target: Element): void {
  fireEvent.touchStart(target);
  fireEvent.touchEnd(target);
}

export const mousePress: (...args: Parameters<FireFunction>) => void = (target, options) => {
  if (React.version.startsWith('18')) {
    fireEvent.mouseDown(target, options);
    fireEvent.mouseUp(target, options);
    fireEvent.click(target, options);
  } else {
    mouseDown(target, options);
    mouseUp(target, options);
    click(target, options);
    act(() => {});
  }
};

export function keyPress(target: Element, options: { key: string }): void {
  if (React.version.startsWith('18')) {
    fireEvent.keyDown(target, options);
    fireEvent.keyUp(target, options);
  } else {
    keyDown(target, options as unknown as Event);
    keyUp(target, options as unknown as Event);
    act(() => {});
  }
}
