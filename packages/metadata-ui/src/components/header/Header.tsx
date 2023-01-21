import { HeaderContainer, HeaderItems } from './style'
import getDisplayMessage from '../../i18n/displayMessage'
import colors from '../../theme/common/colors/color'
import font from '../../theme/common/fonts/fonts'

function Header() {
  return (
    <HeaderContainer>
      <HeaderItems>
        <div style={{ fontSize: font.fontSize.header }}>
          {getDisplayMessage('metadataViewer')}{' '}
        </div>
        <div style={{ float: 'right' }}>
          {' '}
          <a
            style={{ color: colors.font.primary }}
            href="#"
            onClick={() => {}}
          >
            {getDisplayMessage('common.signOut')}
          </a>{' '}
        </div>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
