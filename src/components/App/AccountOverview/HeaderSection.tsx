import { ThemedText } from 'components/Text'
import React from 'react'
import { PageHeader } from 'components/PageHeader'

export const HeaderSection = () => {
  return (
    <PageHeader>
      <ThemedText.PageTitle>My Account</ThemedText.PageTitle>
    </PageHeader>
  )
}
