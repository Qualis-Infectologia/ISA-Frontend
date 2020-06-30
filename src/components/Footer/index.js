import React from 'react';
import { Container } from './styles';
import { FcCustomerSupport } from 'react-icons/fc';

export default function Header() {
  return (
    <Container>
      <p>
        {`Qualis © ${new Date().getFullYear()} - Todos os direitos reservados`}
      </p>
      <a href="mailto:suporte@portalqualis.com.br">
        <FcCustomerSupport size="2rem" />
      </a>
    </Container>
  );
}
