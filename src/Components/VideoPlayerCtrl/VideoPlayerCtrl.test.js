import { screen, render, getByTestId } from '@testing-library/react'

import VideoPlayerCtrl from '.'

it('tests the component exists', () => {
  render(<VideoPlayerCtrl videoId="tgAeF0AcLPY" width="800" />)

  const video = screen.getByTestId('videoWrapper')
  expect(video).toBeTruthy()
})

it('tests there are two buttons', () => {
  render(<VideoPlayerCtrl videoId="tgAeF0AcLPY" />)

  const btnsQty = screen.getAllByRole('button')
  expect(btnsQty.length).toBe(2)
})
