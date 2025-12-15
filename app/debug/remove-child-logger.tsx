'use client';
import { useEffect } from 'react';

export function RemoveChildLogger() {
  useEffect(() => {
    const oldRemoveChild: <T extends Node>(this: Node, child: T) => T = Node.prototype.removeChild;

    Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
      if (!this.contains(child)) {
        console.warn('⚠️ Tried to remove non-child:', child);
        console.trace();
        return child;
      }
      return oldRemoveChild.call(this, child) as T; // 👈 force cast ตรงนี้
    };
  }, []);

  return null;
}
