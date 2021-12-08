import React from 'react'
import SpendManagementHero from './SpendManagementHero'
import CompanyBanner from './CompanyBanner'
import CompanyMoney from './CompanyMoney'
import HoursSaved from './HoursSaved'
import SpendControl from './SpendControl'
import ManageCards from './ManageCards'
import GiveBack from './GiveBack'
import FounderQuote from './FounderQuote'

export default function KonamiLanding () {
  return (
    <div>
      <SpendManagementHero />
      <CompanyBanner />
      <CompanyMoney />
      <HoursSaved />
      <SpendControl />
      <ManageCards />
      <GiveBack />
      <FounderQuote />
    </div>
  )
}
