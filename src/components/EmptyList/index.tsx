import React from 'react'
import { EmptyIcon } from '../../atoms/SvgIcons'
import { Container } from './style'

const Empty = () => {
  return (
    <Container>
      <EmptyIcon />
      <p style={{ color: '#808080', fontSize: '16px', textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold' }}>
          Você ainda não tem tarefas cadastradas
        </span>{' '}
        <br /> Crie tarefas e organize seus itens a fazer
      </p>
    </Container>
  )
}

export default Empty
