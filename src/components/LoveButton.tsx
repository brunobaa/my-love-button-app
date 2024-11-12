import React, { useState } from 'react';
import styled from 'styled-components';

// Fundo romântico com gradiente rosa e lilás
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #fff;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;


const ButtonContainer = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  transition: left 0.2s, top 0.2s;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #ff6b81;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #ff4757;
    transform: scale(1.1);
  }
`;

const Message = styled.div`
  margin-top: 20px;
  color: #ffe0e0;
  font-size: 1.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Heart = styled.span`
  color: #ff6b81;
  font-size: 2rem;
  margin-left: 5px;
`;

const LoveButton: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 200, y: 200 });

  const handleNoClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth * 0.8);
    const randomY = Math.floor(Math.random() * window.innerHeight * 0.8);
    setButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowMessage(true);
  };

  return (
    <Wrapper>
      <h1>Você me ama?</h1>
      <ButtonContainer x={buttonPosition.x} y={buttonPosition.y}>
        <Button onClick={handleYesClick}>Sim</Button>
        <Button onClick={handleNoClick}>Não</Button>
      </ButtonContainer>
      {showMessage && (
        <Message>
          Eu te amo tbm fofo <Heart>❤️</Heart>
        </Message>
      )}
    </Wrapper>
  );
};

export default LoveButton;
