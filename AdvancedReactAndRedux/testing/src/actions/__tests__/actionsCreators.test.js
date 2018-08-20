import { updateComments } from "actions";
import { UPDATE_COMMENT } from "actions/types";
describe("updateComments action creator", () => {
  it("has the correct type", () => {
    const action = updateComments();
    expect(action.type).toEqual(UPDATE_COMMENT);
  });
  it("has the correct payload", () => {
    const action = updateComments("New comment");
    expect(action.payload).toEqual("New comment");
  });
});
