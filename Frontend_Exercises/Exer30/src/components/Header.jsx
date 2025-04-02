import React from "react";
import styled from "styled-components";

// here styling is based on styled component library
export default function Header() {
  const Div = styled.div`
    box-sizing: border-box;
    background-color: gray;
    width: 100%;
    padding: 20px;
    z-index: 1;
  `;

  const Ul = styled.ul`
    display: flex;
    gap: 1.2rem;
  `;

  const Li = styled.li`
    list-style-type: none;
  `;

  const A = styled.button`
    padding: 0;
    border: 0;
    font-size: 1.1rem;
    background-color: transparent;
    cursor: pointer;
  `;

  return (
    <Div>
      <Ul>
        <Li>
          <A>Home</A>
        </Li>
        <Li>
          <A>About</A>
        </Li>
        <Li>
          <A>Contact</A>
        </Li>
      </Ul>
    </Div>
  );
}
