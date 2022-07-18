import { screen, render } from '@testing-library/react'

import VideoPlayer from '.'

describe('VideoPlayerCtrl', () => {
  it('tests OK', () => {
    expect(2).toBe(2)
  })

  it('tests the component exists', () => {
    render(<VideoPlayer videoId="tgAeF0AcLPY" />)

    const video = screen.getByTestId('videoplayer')
    expect(video).toBeTruthy()
  })

  it('tests there are two buttons', () => {
    render(<VideoPlayer videoId="tgAeF0AcLPY" />)

    const btnsQty = screen.getAllByRole('button')
    expect(btnsQty.length).toBe(2)
  })

  it('tests the start label starts with 0', () => {
    render(<VideoPlayer videoId="tgAeF0AcLPY" />)

    const startLabel = screen.getByTestId('startLabel')
    expect(startLabel.textContent).toContain('0')
  })

  it('tests the end label starts with 0', () => {
    render(<VideoPlayer videoId="tgAeF0AcLPY" />)

    const endLabel = screen.getByTestId('endLabel')
    expect(endLabel.textContent).toContain('0')
  })

  // it('tests the start button can be clicked', () => {
  //   render(<VideoPlayer videoId="tgAeF0AcLPY" />)

  //   const startButton = screen.getByRole('button', { name: /Start/ })
  //   fireEvent.click(startButton)
  //   const startLabel = screen.getByTestId('startLabel')
  //   expect(startLabel.textContent).toMatch(/Undefined/i)

  //   // const endLabel = screen.getByTestId('endLabel')
  // })

  // it('tests the end button can be clicked', () => {
  //   render(<VideoPlayer videoId="tgAeF0AcLPY" />)

  //   const endButton = screen.getByRole('button', { name: /End/ })
  //   fireEvent.click(endButton)
  //   const endLabel = screen.getByTestId('endLabel')
  //   expect(endLabel.textContent).toMatch(/Undefined/i)

  //   // const endLabel = screen.getByTestId('endLabel')
  // })
})
