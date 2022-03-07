import { createPortal } from 'react-dom';
import styles from './Portal.module.scss';

interface PortalProps {
    open: boolean;
    anchor?: EventTarget & HTMLButtonElement;
}

const Portal: React.FC<PortalProps> = (props) => {
    const { open, anchor } = props;
    const children = <PortalChildren {...props} />
    return (
        <>
            {open && anchor &&
                createPortal(
                    children,
                    document.getElementsByTagName('body')[0]
                )
            }
        </>
    )
}

const PortalChildren: React.FC<PortalProps> = (props) => {
    const { open, anchor, children } = props;
    const { top = 0, right = 0, width = 0, height = 0 } = anchor?.getBoundingClientRect() || {};
    const topPos = top + height;
    const rightPos = right - width;
    return (
        <>
            {open && anchor &&
                <div
                    className={styles.portalContainer}
                    style={{
                        top: topPos,
                        right: rightPos,
                    }}
                >
                    {children}
                </div>
            }
        </>
    )
}

export default Portal;