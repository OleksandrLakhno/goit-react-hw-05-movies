import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";

const Nav = styled.nav`
display: flex;
gap: 2-px;
`;

const Link = styled(NavLink)`
&.active {
    color: red;
}
`;

const Wrapper = styled.div`
padding: 40px
`;

export const Layout = () => {
    return (
        <Wrapper>
            <Nav>
            <Link to="/1">1</Link>
            <Link to="/2">2</Link>
            <Link to="/3">3</Link>
            </Nav>
            <GlobalStyle/>
        </Wrapper>
    )
}