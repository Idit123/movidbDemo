import styled from "styled-components"

export const CardDetailsStyle = styled.div`
  .container-fluid {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    background-position: center center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    .card-details {
      width: 80%;
      height: 350px;
      padding: 20px;
      display: flex;
      flex-direction: row;
      background-color: transparent;
      color: white;
      img {
        width: 220px;
        border-radius: 8px;
      }
      .card-title {
        padding: 20px;
        .title {
          font-weight: 700;
        }
        .facts {
          span {
            padding: 5px;
          }
          .certification {
            border-radius: 2px;
            border: 1px solid;
            border-color: #f2f2f2;
            padding: 3px 6px;
            opacity: 0.8;
          }
        .tagline {
          margin-top: 15px;
          font-size: 17px;
          font-weight: 400;
          font-style: italic;
          opacity: 0.7;
        }
        .overview {
          font-weight: 600;
          margin-top: 10px;
          opacity: 0.8;
        }
        .video{
          width: 250px;
          height: 250px;
        }
      }
    }
  }
`
