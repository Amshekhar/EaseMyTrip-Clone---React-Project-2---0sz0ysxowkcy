import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f4f8;
`;

const ConfirmationCard = styled(animated.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #4caf50;
  margin: 0 0 10px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 0 20px;
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #45a049;
  }
`;

const TicketConfirmation = () => {
  const fadeInProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  const buttonProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.9)' },
    delay: 500,
  });

  return (
    <Container>
      <ConfirmationCard style={fadeInProps}>
        <Title>Ticket Confirmed!</Title>
        <Message>Your ticket has been successfully confirmed.</Message>
        <animated.div style={buttonProps}>
          <Button>View Ticket</Button>
        </animated.div>
      </ConfirmationCard>
    </Container>
  );
};

export default TicketConfirmation;
