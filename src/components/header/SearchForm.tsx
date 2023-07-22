import React from "react";
import { styled } from "styled-components";
import SearchIcon from "../icons/SearchIcon";

export default function SearchForm() {
    return (
        <Form>
            <label htmlFor="search" />
            <input type="text" id="search" />
            <button type="submit">
                <SearchIcon />
            </button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    align-items: center;
    label {
        display: none;
    }
    input {
        border: 1px solid red;
    }
    button {
    }
`;
