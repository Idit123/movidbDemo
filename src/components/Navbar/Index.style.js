import styled from "styled-components"

export const Navbar = styled.div`
  background-color: #032541;
  padding: 10px 0;
  .container {
    display: flex;
    align-items: center;
    padding: 0 40px;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 154px;
        margin-right: 16px;
        &:hover {
          cursor: pointer;
        }
      }
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          padding: 15px 15px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`
