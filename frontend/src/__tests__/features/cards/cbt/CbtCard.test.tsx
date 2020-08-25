import { shallow } from "enzyme";
import React from "react";
import { CbtModel } from "../../../../models/CbtModel";
import CbtCard from "../../../../features/cards/cbt/CbtCard";
import { CardHeader, Button } from "@material-ui/core";


describe("CBT Card Tests", () => {
  const handleViewCbtSpy = jest.fn();

  const testSubject = shallow(
    <CbtCard
      cbt={new CbtModel(1, "Test Cbt", "test", "www.google.com", "internet")}
      handleViewCbt={handleViewCbtSpy}
    />
  );

  it("Should render all data given to it", () => {
    expect(testSubject.find(CardHeader).prop('title')).toEqual('Test Cbt')
    expect(testSubject.text()).toContain('test')
    expect(testSubject.find(Button).at(0).text()).toContain('Take this CBT')
    expect(testSubject.find(Button).at(1).text()).toContain('View CBT')
  });

  it('should fetch questions on clicking "View CBT"', () => {
    expect(handleViewCbtSpy).toBeCalledTimes(0);
    
    testSubject.find('.view-cbt-button-1').simulate('click');
    testSubject.update();
    
    expect(handleViewCbtSpy).toHaveBeenCalledWith(1);
  })
});
