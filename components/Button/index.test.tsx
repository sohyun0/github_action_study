import { render, screen } from "@testing-library/react";
import Button from ".";
test("화면에 버튼이 나오는지 테스트", () => {
  render(<Button>버튼</Button>);
  const button = screen.getByRole("button", { name: "버튼" });
  expect(button).toBeInTheDocument();

  // 실패하는 테스트 미리 작성
  const h1 = screen.getByText("테스트");
  expect(h1).toBeInTheDocument();
});
