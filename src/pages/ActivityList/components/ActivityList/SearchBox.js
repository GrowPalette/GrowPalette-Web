import React from "react";
import styled from "styled-components";

const SearchBox = () => {
    return (
        <Container>
            <SearchBoxContainer>

            </SearchBoxContainer>
        </Container>
    );
};

const Container = styled.div`

`

const SearchBoxContainer = styled.div`
    display: flex;
    width: 21.375rem;
    height: 2.625rem;
    padding: 0.5625rem 0.6875rem 0.5625rem 19.1875rem;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    border: 0.5px solid var(--Gray-700, #6F6F6F);
    margin-top: 2rem;
`

export default SearchBox;
