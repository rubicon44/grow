import { TaskIndex } from './index';
import { render } from '../../../../utils/test-utils';
import { screen } from '@testing-library/react';
import { server } from "../../../../mocks/server";
import { waitFor } from "@testing-library/react";
import { get } from "../../../../mocks/api/tasks";
import { getTasks } from "../../../../infra/api";
import { rest } from "msw";
import "@testing-library/jest-dom";

// describe('TaskIndex', () => {
//   test('renders TaskIndex component', () => {
//     render(<TaskIndex />);

//     screen.debug();
//   });
// });

describe("API call の検証", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("初期状態", () => {
    const { result } = get;
    expect(result).toHaveLength(0);
    expect(result.error).toBeNull();
  });

  // test("API通信成功", async () => {
  //   const { result } = get;
  //   await waitFor( () => xxx ); //通信終了を待つ
  //   expect(result.data).xxx //成功時のテスト
  // });

  test("ボタンを押下すると、API が呼ばれる", async () => {
    render(<TaskIndex />);
    // const button = await screen.findByRole("button");
    // userEvent.click(button);
    // userEvent.click(button);
    // await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(2));

    screen.debug();
  });
});