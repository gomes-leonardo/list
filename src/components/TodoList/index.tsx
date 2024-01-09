import React, { ChangeEvent, useState } from 'react'
import Input from '../../atoms/Input'
import AddButton from '../../atoms/Button'
import { v4 as uuidv4 } from 'uuid'
import {
  Container,
  IconContainer,
  InputContainer,
  Line,
  ListItem,
  NumberStyle,
  TableContainer,
} from './style'
import Table from '../Table'
import { CheckIcon, CheckIconDone, TrashIcon } from '../../atoms/SvgIcons'

const TodoList = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])

  const handleComplete = () => {
    setIsComplete(!isComplete)
  }

  const handleChange = (value: string) => {
    setTask(value)
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task])
      setTask('')
      console.log('Tarefa adicionada:', task)
    }
  }
  console.log(tasks)
  return (
    <div>
      <Container>
        <InputContainer>
          <Input
            value={task}
            onChange={handleChange}
            placeholder="Adicione uma nova tarefa"
          />
          <AddButton onClick={handleAddTask} />
        </InputContainer>
      </Container>
      <Table>
        <TableContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            Tarefas criadas{' '}
            <NumberStyle style={{ color: 'white' }}>0</NumberStyle>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            Concluídas{' '}
            <NumberStyle style={{ color: 'white' }}>2 de 5</NumberStyle>
          </div>
        </TableContainer>
        <Line></Line>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <IconContainer>
              <button
                onClick={handleComplete}
                style={{
                  border: 'none',
                  backgroundColor: 'unset',
                  padding: '0',
                  marginBottom: '3%',
                }}
              >
                {isComplete ? <CheckIconDone /> : <CheckIcon />}
              </button>
              <div>{task}</div>
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'unset',
                  padding: '0',
                  marginBottom: '3%',
                }}
              >
                <TrashIcon />
              </button>
            </IconContainer>
          </ListItem>
        ))}
      </Table>
    </div>
  )
}

export default TodoList
