import React from 'react';
import { Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import firebase from 'firebase/app';
import firebase from "@firebase/rules-unit-testing";
import initializeTestApp from "@firebase/rules-unit-testing";
import { TaskIndex } from './taskIndex';

describe("Authentication test in index page", () => {
  const testProjectId = "test-project-id";
  const testUid = "testUid";
  const testEmail = "test@test.com";
  // const password = "123456";
  // const apiKey = { apiKey: "test-api-key" };
  // const authDomain = { authDomain: "test-auth-domain" };
  // const databaseURL = { databaseURL: "test-database-url" };
  // const projectId = { projectId: "test-project-id" };
  // const storageBucket = { storageBucket: "test-storage-bucket" };
  // const messagingSenderId = { messagingSenderId: "test-messaging-sender-id" };

  // const testAuth = { uid: testUid, email: testEmail }

  // beforeEach(() => {
    // firebase.initializeTestApp({ projectId: testProjectId, auth: testAuth });
    // firebase.initializeTestApp({ projectId: testProjectId, auth: testAuth });
    // firebase.initializeTestApp(testApiKey);
    // initializeTestApp(testApiKey);
    firebase.initializeTestApp({
      projectId: testProjectId,
      auth: { uid: testUid, email: testEmail }
    })
  // });
});

describe('TaskIndexコンポーネントテスト', () => {
  it('タイトルが「タスク一覧」になっているか', async () => {
    render(TaskIndex);
    await waitFor(() => {
      const title = screen.getByText('タスク一覧');
      expect(title).toEqual('タスク一覧');
    });
  });
});


// モックの作成
//// Firebaseのモックを作成(Firebase Authのユーザーを返すモックを作成する。)

////axiosのモック作成(getTasks()用の、タスクを取得するモックを作成する。)


// テスト記述
//// App.jsにアクセスして、ContextのFirebase認証が行われる(ここでは、認証でtrueが変えるだけで良い。細かい認証テストはContextで行う。)

//// Firebase Authから認証trueが帰ってきた場合、taskIndex.jsxをレンダリングする

//// taskIndex.jsxがレンダリングされたら、useEffectにより、axiosを用いたgetTasks()関数がリクエストされる
