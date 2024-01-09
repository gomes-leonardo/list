import { motion } from 'framer-motion'
import { ButtonStyle } from './style'
import { PlusIcon } from '../SvgIcons'
import { ButtonProps } from './type'

const AddButton = ({ onClick }: ButtonProps) => {
  return (
    <motion.div>
      <ButtonStyle onClick={onClick}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Criar <PlusIcon />
        </div>
      </ButtonStyle>
    </motion.div>
  )
}

export default AddButton
