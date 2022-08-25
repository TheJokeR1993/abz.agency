import { useState } from "react";
import api from "../../api/api";
import "../../index.scss";
import Inputmask from "inputmask";
import Success from "./Success";
import { useDispatch, useSelector } from "react-redux";
import { onChangeState } from "../../redux/form/formRedux";
import { connectSignUp } from "../../redux/connect";
import store from "../../redux/redux";

function Form() {
  const { name, email, phone, photo, position, position_id, error, success } =
    useSelector((state) => state.form);
  const dispatch = useDispatch();

  const blur = (arg, value) => {
    document.querySelector(`label[for=${arg}]`).style.visibility = "hidden";
    value && Inputmask.remove(value);
  };
  const focus = (arg) => {
    document.querySelector(`label[for=${arg}]`).style.visibility = "visible";
  };
  return success ? (
    <Success />
  ) : (
    <div className="form_div">
      <h1>Working with POST request</h1>
      <div className={error.name ? "normalInp error" : "normalInp"}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          onBlur={() => blur("name")}
          onFocus={() => focus("name")}
          onInput={(e) =>
            dispatch(onChangeState({ key: "name", value: e.target.value }))
          }
          type="name"
          value={name}
          placeholder="Your name"
          pattern="[a-zA-ZА-Яа-яЁё]+"
        />
        <small>{error.name}</small>
      </div>

      <div className={error.email ? "normalInp error" : "normalInp"}>
        <label htmlFor="email">Email</label>
        <input
          className={error.email ? "error" : ""}
          id="email"
          onBlur={() => blur("email")}
          onFocus={() => focus("email")}
          onInput={(e) =>
            dispatch(onChangeState({ key: "email", value: e.target.value }))
          }
          type="email"
          value={email}
          placeholder="Email"
        />
        <small>{error.email}</small>
      </div>
      <div className={error.phone ? "normalInp error" : "normalInp"}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          onBlur={(e) => {
            blur("phone", e.target);
          }}
          onFocus={(e) => {
            focus("phone");
            Inputmask({
              mask: "+38 (099) 999  99  99",
              placeholder: "",
              clearMaskOnLostFocus: true,
            }).mask(e.target);
          }}
          onInput={(e) =>
            dispatch(onChangeState({ key: "phone", value: e.target.value }))
          }
          type="phone"
          value={phone}
          placeholder="Phone"
        />
        <small>{error.phone ? error.phone : "+38 (XXX) XXX - XX - XX"}</small>
      </div>
      <div className="normalInp">
        <p>Select your position</p>
        {position &&
          position.map((i) => (
            <div className="formRadio">
              <input
                type="radio"
                id={i.id}
                key={i.id}
                name="contact"
                value={i.name}
                onInput={(e) =>
                  dispatch(onChangeState({ key: "position_id", value: i.id }))
                }
                defaultChecked={i.id === 1 ? true : false}
              />
              <span>{i.name}</span>
            </div>
          ))}
      </div>
      <div className={error.photo ? "fileINP error" : "fileINP"}>
        <input
          accept="image/jpg, image/jpeg"
          type="file"
          id="file"
          onInput={(e) =>
            dispatch(onChangeState({ key: "photo", value: e.target.value }))
          }
        />
        <label htmlFor="file"></label>
        <span className={photo ? "" : "first"}>
          {photo ? photo : "Upload your photo"}
        </span>
        {error.photo &&
          (error.photo.length === 1 ? (
            <small>{error.photo}</small>
          ) : (
            <small>
              {error.photo[0]}
              <br />
              {error.photo[1]}
            </small>
          ))}
      </div>
      <button
        disabled={photo ? false : true}
        onClick={() =>
          api.usersPost({
            name: name,
            phone: phone,
            email: email,
            position_id: position_id,
          })
        }
      >
        Sign up
      </button>
    </div>
  );
}
//disabled={postObj.photo ? false : true}
export default Form;
