import React from 'react'
import { InputField } from './Input'

export const SearchBar = ({ handleSubmit, city, setCity, debouncedCity, setDebouncedCity }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        data-testid="searchBox"
        label="Search for cities"
        value={city}
        onChange={event => setCity(event.target.value)}
      />
    </form>
  )
}
