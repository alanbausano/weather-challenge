import { Input } from '@mui/material'

export const InputField = ({ label, value, onChange }) => {
  return (
    <Input
      size="lg"
      placeholder={label}
      value={value}
      onChange={onChange}
      sx={{
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#282c34',
        padding: '8px'
      }}
    />
  )
}
