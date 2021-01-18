import React, { Component, useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditMeTimeCard({ meTime, handleUpdateMeTime }) {
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [state, handleChange] = useForm(meTime);

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  return (
    <div className="edit-metime-container">
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state, "  is state");
          handleUpdateMeTime(state);
        }}
      >
        <div>
          <input
            className="form-control form-control-md"
            name="text"
            value={state.text}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn btn-light"
          type="submit"
          disabled={invalidForm}
          styles="margin-top: 10px"
        >
          Edit Me Time
        </button>
      </form>
    </div>
  );
}
