import { render, screen } from "./test/test-utils";
import App from "./App";

describe("App test", () => {
  it("should render", () => {
    render(<App />);
    screen.debug();
  });
});
