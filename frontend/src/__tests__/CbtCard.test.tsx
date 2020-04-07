import { shallow } from "enzyme";
import React from "react";
import { CbtModel } from "../models/CbtModel";
import CbtCard from "../features/cbts/CbtCard";
import { CardHeader, Button } from "@material-ui/core";


describe("CBT Card Tests", () => {
  it("Should render all data given to it", () => {
    const testSubject = shallow(
      <CbtCard
        cbt={new CbtModel(1, "Test Cbt", "test", "www.google.com", "internet")}
      />
    );

    expect(testSubject.find(CardHeader).prop('title')).toEqual('Test Cbt')
    expect(testSubject.text()).toContain('test')
    expect(testSubject.find(Button).at(0).text()).toContain('Take this CBT')
    expect(testSubject.find(Button).at(1).text()).toContain('View Answers')
  });
});
