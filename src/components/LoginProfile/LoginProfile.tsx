export interface LoginProfileProps {
  label: string;
}

const LoginProfile = (props: LoginProfileProps) => {
  return <button>{props.label}</button>;
};

export default LoginProfile;
