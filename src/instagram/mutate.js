"use strict";

import { RemoveNode } from "../helpers/removeNode.js";

export const Targets = {
  MOBILE_HOMEPAGE_FEED: 0
};

// `HOME` probably should not contain the content of default - that should
// be managed as part of Operate, I think?
//
export const Pages = {
  HOME: [Targets.MOBILE_HOMEPAGE_FEED]
};

export function nodeRemovalProxy(targetOne, targetTwo) {
  [targetOne, targetTwo].forEach((element) => {
    if (typeof element === "string" || element instanceof Element) {
      return;
    }
    throw new TypeError(
      `nodeRemovalProxy received unexpected argument, '${typeof element}', expected 'string' or 'Element'`,
    );
  });

  new RemoveNode(targetOne, targetTwo).operate();
}

// export function operate() {}
