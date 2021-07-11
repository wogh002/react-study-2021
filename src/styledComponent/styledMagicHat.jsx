import React from "react";
import styled, { keyframes } from "styled-components";

const MagicHat = ({ className }) => (
  <div className={className}>
    <span role="img" aria-label="마법 별">
      ⭐
    </span>
  </div>
);
const Ottogi = keyframes` 
  0% { transform: translateY(0) }
  25% { transform: translateY(-20px) rotate(20deg) }
  50% { transform: translateY(10px) }
  75% { transform: translateY(-15px) rotate(-20deg) }
  100% { transform: translateY(0) }
`;

const StyledMagicHat = styled(MagicHat)`
  margin-top: 100px;
  font-size: 150px;
  text-align: center;
  span {
    display: block;
    transform: rotate(23deg);
    animation: ${Ottogi} 1s linear infinite;
  }
`;
export default StyledMagicHat;
