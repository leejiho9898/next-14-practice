import { ReactNode } from "react";

// 라우트에 (foo) 가 들어가면 url에 영향을 주지 않음. 레이아웃 그룹화에 의미가 있음

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
