import { shallow } from "enzyme";
import React from "react";
import { CbtModel } from "../models/CbtModel";
import CbtCard from "../features/cbts/CbtCard";

describe("CBT Card Tests", () => {
  it("Should render all data given to it", () => {
    const testSubject = shallow(
      <CbtCard
        cbt={new CbtModel(1, "Test Cbt", "test", "www.google.com", "internet")}
      />
    );

    expect(testSubject.text()).toContain('Test Cbt')
    expect(testSubject.text()).toContain('test')
    expect(testSubject.text()).toContain('www.google.com')
    expect(testSubject.text()).toContain('internet')
  });
});
