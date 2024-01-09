import React, { ChangeEvent, useState } from 'react'
import Input from '../../atoms/Input'
import AddButton from '../../atoms/Button'

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
import Empty from '../EmptyList'

const TodoList = () => {
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([])

  const handleComplete = (index: number) => {
    setCompletedTasks((prevCompletedTasks) => {
      const newCompletedTasks = [...prevCompletedTasks]
      newCompletedTasks[index] = !newCompletedTasks[index]
      return newCompletedTasks
    })
  }

  const handleChange = (value: string) => {
    setTask(value)
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task])
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, false])
      setTask('')
    }
  }

  const handleDeleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((_, i) => i !== index),
    )
  }
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
            <NumberStyle style={{ color: 'white' }}>{tasks.length}</NumberStyle>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            Concluídas{' '}
            <NumberStyle style={{ color: 'white' }}>
              {completedTasks.filter(Boolean).length} de {completedTasks.length}
            </NumberStyle>
          </div>
        </TableContainer>
        <Line></Line>

        {tasks.length === 0 ? (
          <Empty />
        ) : (
          tasks.map((task, index) => (
            <ListItem key={index}>
              <IconContainer>
                <button
                  onClick={() => {
                    handleComplete(index)
                  }}
                  style={{
                    border: 'none',
                    backgroundColor: 'unset',
                    padding: '0',
                    marginRight: 'auto',
                  }}
                >
                  {completedTasks[index] ? <CheckIconDone /> : <CheckIcon />}
                </button>
                <div
                  style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
                >
                  {completedTasks[index] ? <del>{task}</del> : <>{task}</>}{' '}
                </div>
                <button
                  onClick={() => {
                    handleDeleteTask(index)
                  }}
                  style={{
                    border: 'none',
                    backgroundColor: 'unset',
                    padding: '0',
                    marginLeft: 'auto',
                  }}
                >
                  <TrashIcon />
                </button>
              </IconContainer>
            </ListItem>
          ))
        )}
      </Table>
    </div>
  )
}

export default TodoList
