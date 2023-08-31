import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icon/SearchIcon";

export default function SearchForm() {
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetVal = e.target.value;
    setSearchVal(targetVal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 공백 return
    if (searchVal.trim().length < 1) return;

    // " "을 +로 변환
    const transformedSearchVal = searchVal.replace(/ /gi, "+");

    navigate(`/videos/${transformedSearchVal}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor='search' />
      <input
        type='text'
        id='search'
        placeholder='Search..'
        value={searchVal}
        onChange={handleChange}
      />
      <button type='submit'>
        <SearchIcon />
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-grow: 0.5;
  min-width: 180px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-3xl);
  overflow: hidden;

  label {
    display: none;
  }

  input {
    width: 80%;
    padding: 0.5rem;
    outline: none;
    box-shadow: inset -1px 0px 2px var(--color-border);

    &::placeholder {
      color: var(--color-text-description);
      opacity: 0.5;
      user-select: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    padding: 0;
    background-color: var(--color-bg-button);
    transition: var(--duration-300);
    cursor: pointer;

    &:hover {
      background-color: var(--color-bg-button-hover);
    }
  }
`;
