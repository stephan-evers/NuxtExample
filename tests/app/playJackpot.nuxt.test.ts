import { describe, expect, it } from "vitest";
import { screen, within, fireEvent, waitFor } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import App from "@/app.vue";

describe("playJackpot", () => {
  it("should be playable", async () => {
    const app = await renderSuspended(App, { route: "/" });

    const tips = {
      base: [1, 2, 3, 4, 5],
      extra: [1, 2],
    };

    const field = app.getByTestId("field-1");
    const baseField = within(field).getByTestId("base-field");
    const extraField = within(field).getByTestId("extra-field");

    tips.base.forEach((baseTip) => {
      fireEvent.click(within(baseField).getByText(baseTip.toString()));
    });

    tips.extra.forEach((extraTip) => {
      fireEvent.click(within(extraField).getByText(extraTip.toString()));
    });

    await waitFor(() => {
      const state = app.getByTestId("ticket-state");
      const expectedState = {
        selectedNumbers: [
          { base: [1, 2, 3, 4, 5], extra: [1, 2] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
          { base: [], extra: [] },
        ],
        validFields: [{ base: [1, 2, 3, 4, 5], extra: [1, 2] }],
      };

      expect(state.getAttribute("data-ticket-state")).toEqual(
        JSON.stringify(expectedState),
      );
    });
  });
});
