import styled from "styled-components"

export const NavbarStyle = styled.div`
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
          padding: 15px 15px;
          a {
            text-decoration: none;
            color: #ffffff;
          }
          .dropdown {
            display: none;
          }
          &:hover {
            cursor: pointer;
            .dropdown {
              position: absolute;
              top: 50px;
              box-sizing: content-box;
              display: block;
              background-color: #fff;
              border: 1px solid #fff;
              border-radius: 5px;
              ul {
                display: flex;
                flex-direction: column;
                li {
                  font-weight: 500;
                  margin: 0;
                  padding: 10px 10px;
                  a {
                    text-decoration: none;
                    color: #000;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
