import styled from "styled-components"

export const CardStyle = styled.div`
  .container-fluid {
    background-color: seashell;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h1 {
      width: 100%;
      text-align: center;
    }
    .card {
      width: 240px;
      height: 450px;
      margin: 15px;
      img {
        width: 230px;
        height: 320px;
        padding: 5px;
        border-radius: 1.5rem;
      }
      .card-body {
        text-align: center;
      }
    }
  }
`
