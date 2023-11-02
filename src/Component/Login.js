import React from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, Link,   } from "react-router-dom";

import { FIREBASE_AUTH } from "../Pages/Config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { async } from "@firebase/util";

export default function Login() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });


  // const auth = FIREBASE_AUTH;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isUserExist, setUserExist] = useState("");
  const [isAllValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isMessage, setMessage] = useState({
    message: "",
  });

  const auth = getAuth()

  const goToHome =  () => {
    // const email = e.target.value;
    // const password = e.target.value

    try {
      const response =  signInWithEmailAndPassword(auth, email, password);
      // history.push('/ManageRecipe')
      navigate("/ManageRecipe");
      console.log(response)
    } catch (error) {
      // console.log(error);
      alert("Sign in failed: " + "Check your email and password");
    }
 
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    console.log("value", email);

    setEmail(email);
    if (email) {
      setEmailValid(true);
      setDataForm((state) => ({ ...state, email }));
    } else {
      setEmailValid(false);
    }
  };

  //e target value buat inputan yg diisi
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password) {
      setPasswordValid(true);
      setDataForm((state) => ({ ...state, password }));
    } else {
      setPasswordValid(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (loading) {
  //     return;
  //   }

  //   if (isEmailValid && isPasswordValid) {
  //     setLoading(true);

  //     axiosInstance
  //       .post("/login", {
  //         email: dataForm.email,
  //         password: dataForm.password,
  //       })
  //       .then((response) => {
  //         setUserExist("exists");
  //         setAllValid("valid");
  //         setLoading(false);
  //         console.log("response", response);
  //         navigate("/Dashboard");
  //         Cookies.set("token", response.data.data.token);
  //       })
  //       .catch((error) => {
  //         setUserExist("doesn't exist");
  //         setAllValid("valid");
  //         setLoading(false);
  //         console.log(error);
  //       });
  //   } else {
  //     setAllValid("not valid");
  //     setUserExist("");
  //   }
  // };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Admin Portal</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                          validators={[isEmailValid, isAllValid]}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          validators={[isPasswordValid, isAllValid]}
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <button style={{backgroundColor:"blue", color:"white", borderColor:"blue", borderRadius:10, }} onClick={goToHome}>
                          Login
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
