import { describe, it, expect } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import Button from "@/components/Button.vue";

describe("Button", () => {
  it("should render a button", async () => {
    await renderSuspended(Button, {
      slots: {
        default: "test",
      },
    });
    expect(screen.getByText("test")).toBeDefined();
  });
  it("should emit a click event", async () => {
    const { emitted } = await renderSuspended(Button);
    screen.getByRole("button").click();
    expect(emitted().click).toBeDefined();
  });
  it("should be disabled", async () => {
    const { emitted } = await renderSuspended(Button, {
      props: { disabled: true },
    });
    const component = screen.getByRole("button");
    expect(component.getAttribute("disabled")).toEqual("");
    component.click();
    expect(emitted().click).toBeUndefined();
  });
});
