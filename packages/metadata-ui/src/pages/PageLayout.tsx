import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import colors from '../theme/common/colors/color'

function PageLayout() {
  return (
    <div style={{ color: colors.font.primary, background: colors.background }}>
      <Header />
      <div style={{ minHeight: '90vh' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
