import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "root";
import App from "components/App";
beforeEach(() => {
  moxios.install(); // atempt to intercept any requests that axios is trying to issue
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall(); // insure the same stubrequest is not used somewhere else in our test suit
});
it("can fetch a list of comments and display them", done => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the "fetchComments" button and ckick it
  wrapped.find(".fetch-comments").simulate("click");
  //Introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments!
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
