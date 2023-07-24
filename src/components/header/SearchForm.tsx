import React from "react";
import { styled } from "styled-components";
import SearchIcon from "../icons/SearchIcon";

export default function SearchForm() {
  return (
    <Form>
      <label htmlFor='search' />
      <input type='text' id='search' placeholder='Search..' />
      <button type='submit'>
        <SearchIcon />
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 240px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;

  label {
    display: none;
  }

  input {
    width: 80%;
    padding: 0.5rem;
    outline: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    padding: 0;
    background-color: var(--color-bg-button);
    cursor: pointer;

    &:hover {
      background-color: var(--color-bg-button-hover);
    }
  }
`;
