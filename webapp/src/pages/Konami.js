import React from 'react'
import UseSecretCommand from '../components/UseSecretCommand'
import KonamiLanding from '../components/konami/KonamiLanding'
import DivvyLookAlike from '../components/lookalike/DivvyLookAlike'

export function Konami () {
  const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
  const iskonami = UseSecretCommand(konamiPattern)
  return (
    <div>
      {iskonami ? <DivvyLookAlike /> : <KonamiLanding />}
    </div>
  )
}
