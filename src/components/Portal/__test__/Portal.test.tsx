import { render } from "@testing-library/react";
import PortalChildren from "../Portal";

test("Show portal when conditions are right", async () => {
  const anchorFake = {} as EventTarget & HTMLButtonElement;
  const component = render(<PortalChildren open={true} anchor={anchorFake} />);
  const portalContainer = component.queryByTestId("portal-container");
  expect(portalContainer).toBeInTheDocument();
});

test("Hide portal when conditions are wrong", async () => {
  const anchorFake = {} as EventTarget & HTMLButtonElement;
  const component = render(<PortalChildren open={false} anchor={anchorFake} />);
  const portalContainer = component.queryByTestId("portal-container");
  expect(portalContainer).not.toBeInTheDocument();
});

test("Hide portal when conditions are wrong", async () => {
  const component = render(<PortalChildren open={false} />);
  const portalContainer = component.queryByTestId("portal-container");
  expect(portalContainer).not.toBeInTheDocument();
});

test("Show children is right", async () => {
  const anchorFake = {} as EventTarget & HTMLButtonElement;
  const id = "children-testid";
  const children = <div id={id}></div>;
  const component = render(
    <PortalChildren open={true} anchor={anchorFake}>
      {children}
    </PortalChildren>
  );
  const portalContainer = component.queryByTestId("portal-container");
  const childrenInPortal = portalContainer?.querySelector(`#${id}`);
  expect(childrenInPortal).toBeInTheDocument();
});
