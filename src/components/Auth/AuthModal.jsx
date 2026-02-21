import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  FormContainer,
  InputGroup,
  SubmitButton,
  SwitchText,
} from "./Auth.styled";

const AuthModal = ({ isOpen, onClose, onSignUp, onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({ username: "", email: "", password: "" });
  }, [isOpen, isLoginMode]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoginMode ? onLogin(formData) : onSignUp(formData);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <FormContainer
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <span
          onClick={onClose}
          style={{
            position: "absolute",
            top: "25px",
            right: "30px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          &times;
        </span>

        <h2>{isLoginMode ? "Log In" : "Sign up"}</h2>

        {!isLoginMode && (
          <InputGroup>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </InputGroup>
        )}

        <InputGroup>
          <label>E-Mail</label>
          <input
            type="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </InputGroup>

        <InputGroup>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </InputGroup>

        <SubmitButton type="submit">
          {isLoginMode ? "Log In" : "Sign up"}
        </SubmitButton>

        <SwitchText>
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Sign Up" : "Log In"}
          </span>
        </SwitchText>
      </FormContainer>
    </ModalOverlay>
  );
};

export default AuthModal;
