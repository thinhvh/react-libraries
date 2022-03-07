import { SyntheticEvent, useState } from 'react';
import Portal from '../Portal/Portal';
import styles from './LoginProfile.module.scss';

export interface LoginProfileProps {
  fullName: string;
  size: string;
}

const LoginProfile: React.FC<Partial<LoginProfileProps>> = (props) => {
  const { fullName = '', size = '32px' } = props;
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchor, setAnchor] = useState<EventTarget & HTMLButtonElement>();
  const firstCharacter = fullName.charAt(0);

  const onClickProfile = (event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setOpenProfileMenu(!openProfileMenu);
    setAnchor(event.currentTarget);
  }

  return (
    <>
      <div
        className={styles.loginContainer}
        style={{
          width: size,
          height: size
        }}
      >
        <button onClick={onClickProfile}>
          {firstCharacter}
        </button>
      </div>
      <Portal open={openProfileMenu} anchor={anchor}>
        <div>
          Testing Portal Testing Portal Testing Portal
        </div>
      </Portal>
    </>
  );
};

export default LoginProfile;
