// import React, { useState as useStateMock } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { render, screen, waitFor } from '@testing-library/react';
// import { TaskIndex } from './taskIndex';
// import { AuthContext } from '../../../../auth/authProvider';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

// describe('TaskIndexコンポーネントテスト', () => {
//   const setState = jest.fn();

//   beforeEach(() => {
//     useStateMock.mockImplementation((init) => [init, setState]);
//   });

//   it('タイトルが「タスク一覧」になっているか', async () => {
//     const testCurrentUser = { name: 'testUser', email: 'test@test.com' };
//     const [currentUser, setCurrentUser] = useStateMock(testCurrentUser);

//     render(
//       <Router>
//         <AuthContext.Provider value={{ currentUser }}>
//           <TaskIndex />
//         </AuthContext.Provider>
//       </Router>,
//     );

//     await waitFor(() => {
//       const nextTaskCreateLink = screen.getByText('タスク登録');
//       expect(nextTaskCreateLink).toHaveTextContent(/^タスク登録$/);
//     });
//   });
// });
