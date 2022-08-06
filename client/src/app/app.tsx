import { FC, useLayoutEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProfilePage from "pages/profile";
import RoomPage from "pages/room";
import RootPage from "pages/root";
import SignInPage from "pages/sign-in";
import SignUpPage from "pages/sign-up";
import TweeterPage from "pages/tweeter";

import TokenService from "services/token";

import { checkToken, userActions } from "redux/user/slice";
import { useAppSelector, useAppDispatch } from "redux/store";

const App: FC = () => {
  const { user, isTokenChecked } = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();

  const isAuthorized = isTokenChecked && user;

  useLayoutEffect(() => {
    const token = TokenService.getToken();

    if (!token) {
      dispatch(userActions.setTokenChecked(true));
      return;
    }

    dispatch(checkToken());
  }, [dispatch]);

  if (!isTokenChecked) {
    return <h1>Loading...</h1>;
  }

  return isAuthorized ? (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route path="room/:id" element={<RoomPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="tweeter" element={<TweeterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="auth/sign-in" element={<SignInPage />} />
      <Route path="auth/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="auth/sign-in" />} />
    </Routes>
  );
};

export default App;
