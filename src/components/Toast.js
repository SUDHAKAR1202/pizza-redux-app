import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToast } from "../features/ui/uiSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.ui.toast);

  useEffect(() => {
    if (toast) {
      setTimeout(() => dispatch(clearToast()), 2000);
    }
  }, [toast, dispatch]);

  if (!toast) return null;

  return (
    <div style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#333",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    zIndex: 1000,
    }}>
      {toast}
    </div>
  );
};

export default Toast;