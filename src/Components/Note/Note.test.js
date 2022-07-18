import { screen, render } from '@testing-library/react'
import Note from './'

describe('Note Component', () => {
  beforeEach(() => {
    render(
      <Note
        noteTitle="Test title"
        start="10.0"
        end="25.0"
        url="www.test.com"
        text="Simple test text"
      />
    )
  })

  it('tests the textarea element exists', () => {
    const text = screen.getByText('Simple test text')
    expect(text).toBeTruthy()
  })

  it('tests the link input field component exists', () => {
    const link = screen.getByTestId('linkurl')
    expect(link).toBeTruthy()
  })

  it.only('tests the link input field is correct', () => {
    const link = screen.getByTestId('linkurl')
    expect(link.value.trim()).toBe('www.test.com')
  })
})
