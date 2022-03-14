import { SyntheticEvent, useState } from "react";
import Portal from "../Portal/Portal";
import styles from "./LoginProfile.module.scss";

export interface LoginProfileProps {
  fullName: string;
  size: string;
  onLogout?: Function;
}

const LoginProfile: React.FC<Partial<LoginProfileProps>> = ({
  fullName = "",
  size = "32px",
  onLogout,
}) => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchor, setAnchor] = useState<EventTarget & HTMLButtonElement>();
  const firstCharacter = fullName.charAt(0);

  const onClickProfile = (
    event: SyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpenProfileMenu(!openProfileMenu);
    setAnchor(event.currentTarget);
  };

  const logout = () => {
    onLogout?.();
  };

  return (
    <>
      <div
        className={styles.loginContainer}
        style={{
          width: size,
          height: size,
        }}
        data-testid="login-profile"
      >
        <button data-testid="toggle-button" onClick={onClickProfile}>
          {firstCharacter}
        </button>
      </div>
      <Portal open={openProfileMenu} anchor={anchor}>
        <div className={styles.menu} data-testid="menu-profile">
          <div
            data-testid="logout-button"
            className={styles.logout}
            role="menuitem"
            onClick={logout}
          >
            Log out
          </div>
        </div>
      </Portal>
    </>
  );
};

export default LoginProfile;
