import {
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

export default function render(_ctx, _cache) {
  return (
    _openBlock(),
    _createElementBlock(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14 14",
        fill: "none",
        "aria-hidden": "true",
        "data-slot": "icon",
      },
      [
        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.5 0.5h9s2 0 2 2v9s0 2 -2 2h-9s-2 0 -2 -2v-9s0 -2 2 -2",
          strokeWidth: "1",
        }),
        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.5 4a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0",
          strokeWidth: "1",
        }),

        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.5 4a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0",
          strokeWidth: "1",
        }),

        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.5 10a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0",
          strokeWidth: "1",
        }),

        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.5 10a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0",
          strokeWidth: "1",
        }),

        _createElementVNode("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.5 7a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0",
          strokeWidth: "1",
        }),
      ],
    )
  );
}
