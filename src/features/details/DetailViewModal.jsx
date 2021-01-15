import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { BaseModal, CenterModal } from "react-spring-modal";
import DetailContent from "./DetailContent";
// CSS
import styles from "./DetailViewModal.module.css";
import "react-spring-modal/dist/index.css";

/**
 * We're going to animate the background color from
 * a light red (lightcoral) to a light blue (lightcyan)
 *
 * We're also going to slide it down from the top right
 * and then back up when we close it
 */
const DetailView = ({ isOpen, setOpen, currentMovie }) => {
  const transition = useTransition(isOpen, null, {
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(100%)" },
  });

  const staticStyles = {
    position: "absolute",
    bottom: 0,
    borderRadius: "0.5rem",
    background: "none",
    height: "100vh",
    width: "100vw",
    zIndex: 10,
  };

  return (
    <>
      <CenterModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
      ></CenterModal>
      <BaseModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={{ ...props, ...staticStyles }}>
                <DetailContent currentMovie={currentMovie} setOpen={setOpen} />
              </animated.div>
            )
        )}
      </BaseModal>
    </>
  );
};

export default DetailView;
