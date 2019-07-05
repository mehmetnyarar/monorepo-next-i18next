import { NextContext, NextFC } from 'next'

import { useTranslation } from '@app/i18n/next'

interface OwnProps { }
interface InitialProps {
  namespacesRequired: string[]
}
interface Context extends NextContext { }
type HomeScreenProps = OwnProps

const HomeScreen: NextFC<HomeScreenProps, InitialProps, Context> = () => {
  const { t } = useTranslation()

  return (
    <div>
      <p>
        {t('Day.MONDAY')}
      </p>
    </div>
  )
}

HomeScreen.getInitialProps = async () => {
  return {
    namespacesRequired: ['common']
  }
}

export default HomeScreen
