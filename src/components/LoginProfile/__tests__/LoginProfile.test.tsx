import { cleanup, render, screen, waitFor } from "@testing-library/react"; // (or /dom, /vue, ...)
import LoginProfile from "../LoginProfile";

afterEach(() => {
  cleanup();
});

test("Show first character right", async () => {
  const fullName = "thinhvh";
  const result = render(<LoginProfile fullName={fullName} />);
  const htmlDiv = await result.findByTestId("login-profile");
  const firstCharacter = fullName.charAt(-0);
  expect(htmlDiv.textContent).toBe(firstCharacter);
});

test("Show & hide menu when toggle button", async () => {
  const result = render(<LoginProfile />);
  const button = await result.findByTestId("toggle-button");
  const idNameLogout = "logout-button";
  // show
  button.click();
  await waitFor(async () => {
    const menuProfileDiv = await result.findByTestId("menu-profile");
    expect(menuProfileDiv).toBeInTheDocument();
  });
  let htmlDiv = screen.queryByTestId(idNameLogout);
  expect(htmlDiv?.textContent).toBe("Log out");

  // hide
  const menuProfileDivDisAppear = screen.queryByTestId("menu-profile");
  button.click();
  await waitFor(async () => {
    expect(menuProfileDivDisAppear).not.toBeInTheDocument();
  });
  htmlDiv = screen.queryByTestId(idNameLogout);
  expect(htmlDiv).toBeNull();
});
