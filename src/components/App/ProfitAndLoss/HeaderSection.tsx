import React from 'react'
import { ThemedText } from 'components/Text'
import ArrowLeft from 'components/Icons/ArrowLeft'
import { HeaderActionSecondary, PageHeader } from 'components/PageHeader'
import LinkWithInjectedWalletSupport from 'components/Link/LinkWithInjectedWalletSupport'

export const HeaderSection = () => {
  return (
    <PageHeader>
      <ThemedText.PageTitle>Profit and Loss</ThemedText.PageTitle>
      <LinkWithInjectedWalletSupport href="/my-account">
        <HeaderActionSecondary marginLeft={'auto'}>
          <ArrowLeft color={'#ffffff'} width={14} height={14} marginRight={'6px'} />
          Account Overview
        </HeaderActionSecondary>
      </LinkWithInjectedWalletSupport>
    </PageHeader>
  )
}
