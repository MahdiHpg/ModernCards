import React from "react";
import styled from "styled-components";

const MyCard = ({ Icon, title, desc, iconColor }) => {
  const Card = styled.div`
    &::before {
      content: "";
      width: 19%;
      height: 19%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 15px 0 0 0;
      border: none;
      border-top: 3px solid ${iconColor};
      border-left: 3px solid ${iconColor};
      transition: all 0.3s linear;
    }
    &::after {
      content: "";
      width: 19%;
      height: 19%;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 0 0 15px 0;
      border: none;
      border-bottom: 3px solid ${iconColor};
      border-right: 3px solid ${iconColor};
      transition: all 0.3s linear;
    }
    &:hover {
      &::before {
        content: "";
        width: 79%;
        height: 79%;
      }
      &::after {
        content: "";
        width: 79%;
        height: 79%;
      }
    }
  `;

  return (
    <Card className="card">
      <div className="cardIcon">{<Icon color={iconColor} />}</div>
      <h1 className="cardTitle">{title}</h1>
      <p className="cardDesc">{desc}</p>
    </Card>
  );
};

export default MyCard;
