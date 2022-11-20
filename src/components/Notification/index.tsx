/*
 * Notification
 *
 */

import React, { useEffect, useState } from "react";

// interfaces
import { Notification } from "../../Interface/index";

type IProps = {
  notification: Notification;
  setNotification: (msg: Notification) => void;
};

const NotificationComponent: React.FC<IProps> = (props) => {
  const { notification, setNotification } = props;

  const [toastShow, setToastShow] = useState<string>("");

  useEffect(() => {
    if (notification) {
      setToastShow("show");
      setTimeout(() => {
        setToastShow("hide");
        setNotification({ msg: "", color: "" });
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification]);

  const hideToast = () => {
    setToastShow("hide");
    setNotification({ msg: "", color: "" });
  };

  return (
    <div
      className={`toast border-none ${toastShow} ${notification.color} text-white success align-items-center position-absolute top-0 end-0 m-4`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{notification.msg}</div>
        <div className="d-flex justify-content-end ms-auto notification">
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={hideToast}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
