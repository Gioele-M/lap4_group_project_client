import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import VideoPlayerCtrl from '.'
import mockStore from '../../mockState'

describe('VideoPlayerCtrl', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <VideoPlayerCtrl videoId="tgAeF0AcLPY" />
      </Provider>
    )
  })

  it('tests the component exists', () => {
    const video = screen.getByTestId('videoWrapper')
    expect(video).toBeTruthy()
  })

  it('tests there are two buttons', () => {
    const btnsQty = screen.getAllByRole('button')
    expect(btnsQty.length).toBe(2)
  })

  it('tests the start labelk starts with 0', () => {
    const startLabel = screen.getByTestId('startLabel')
    expect(startLabel.textContent).toContain('0')
  })

  it('tests the end labelk starts with 0', () => {
    const endLabel = screen.getByTestId('endLabel')
    expect(endLabel.textContent).toContain('0')
  })

  it('tests the start button can be clicked', () => {
    const startButton = screen.getByRole('button', { name: /Start/ })
    fireEvent.click(startButton)
    const startLabel = screen.getByTestId('startLabel')
    expect(startLabel.textContent).toMatch(/Undefined/i)

    // const endLabel = screen.getByTestId('endLabel')
  })

  it('tests the end button can be clicked', () => {
    const endButton = screen.getByRole('button', { name: /End/ })
    fireEvent.click(endButton)
    const endLabel = screen.getByTestId('endLabel')
    expect(endLabel.textContent).toMatch(/Undefined/i)

    // const endLabel = screen.getByTestId('endLabel')
  })
})
