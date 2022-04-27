import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSagaStart } from "../redux/modules/auth";
import { LoginReqType } from "../types";

export default function SigninContainer() {
  const dispatch = useDispatch();

  // auth의 login이라는 액션 생성 함수를 loginSagaStart로 불러옴
  const login = useCallback(
    (reqData: LoginReqType) => {
      dispatch(loginSagaStart(reqData));
    },
    [dispatch]
  );

  return <Signin login={login} />;
}
