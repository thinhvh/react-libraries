import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Portal.module.scss";

interface PortalProps {
  open: boolean;
  anchor?: EventTarget & HTMLButtonElement;
}

const Portal: React.FC<PortalProps> = (props) => {
  const { open, anchor } = props;
  const children = <PortalChildren {...props} />;
  return (
    <>
      {open &&
        anchor &&
        createPortal(children, document.getElementsByTagName("body")[0])}
    </>
  );
};

const PortalChildren: React.FC<PortalProps> = (props) => {
  const { open, anchor, children } = props;
  const {
    top = 0,
    left = 0,
    width = 0,
    height = 0,
  } = anchor?.getBoundingClientRect?.() || {};
  const ref = useRef<HTMLDivElement>(null);
  const topPos = top + height;
  const rightCoordiateElement = left + width;
  const isToggle = open && anchor;
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    const divElement = ref.current;
    if (isToggle && divElement) {
      const firstChild = divElement.querySelector(':scope > *');
      setXPos(rightCoordiateElement - (firstChild?.clientWidth || 0))
    }
  }, [isToggle, rightCoordiateElement, setXPos]);

  return (
    <>
      {isToggle && (
        <div
          ref={ref}
          className={styles.portalContainer}
          style={{
            top: topPos,
            left: xPos,
          }}
          data-testid="portal-container"
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Portal;
