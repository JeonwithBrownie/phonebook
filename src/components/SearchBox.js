import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ContactList from "./ContactList";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// searchList를 만들어서 이걸 보여주기
// Or contactList를 수정해서 이걸 보여주기?
export const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const search = (event) => {
    event.preventDefault();
    console.log("Keyword = ", keyword);
    dispatch({ type: "ADD_SEARCH_NAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={search}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="검색어 입력"
              onChange={(event)=> setKeyword(event.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
