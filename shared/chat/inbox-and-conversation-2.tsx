// Just for desktop and tablet, we show inbox and conversation side by side
import * as Chat2Gen from '../actions/chat2-gen'
import * as Constants from '../constants/chat2'
import * as Container from '../util/container'
import * as Kb from '../common-adapters'
import * as Styles from '../styles'
import * as React from 'react'
import * as Common from '../router-v2/common'
import Header from './header'
import Conversation from './conversation/container'
import Inbox from './inbox/container'
import InboxSearch from './inbox-search/container'
import InfoPanel from './conversation/info-panel/container'

type Props = Container.RouteProps<'chatRoot'>

const InboxAndConversation = (props: Props) => {
  const dispatch = Container.useDispatch()
  const inboxSearch = Container.useSelector(state => state.chat2.inboxSearch)
  const infoPanelShowing = Container.useSelector(state => state.chat2.infoPanelShowing)
  const conversationIDKey = props.route.params?.conversationIDKey ?? Constants.noConversationIDKey
  const validConvoID = conversationIDKey && conversationIDKey !== Constants.noConversationIDKey
  const needSelectConvoID = Container.useSelector(state => {
    if (validConvoID) {
      return null
    }
    const first = state.chat2.inboxLayout?.smallTeams?.[0]
    return first?.convID
  })
  const navKey: string = props.route.key

  // only on initial mount, auto select a convo if nothing comes in, including pending
  React.useEffect(() => {
    if (needSelectConvoID) {
      // hack to select the convo after we render, TODO move this elsewhere maybe
      setTimeout(() => {
        dispatch(
          Chat2Gen.createNavigateToThread({
            conversationIDKey: needSelectConvoID,
            reason: 'findNewestConversationFromLayout',
          })
        )
      }, 1)
    }
    // we only want to run this oncer per mount ever
    // eslint-disable-next-line
  }, [])

  return (
    <Kb.KeyboardAvoidingView2>
      <Kb.Box2 direction="horizontal" fullWidth={true} fullHeight={true} style={styles.container}>
        {!Container.isTablet && inboxSearch ? (
          <InboxSearch />
        ) : (
          <Inbox navKey={navKey} conversationIDKey={conversationIDKey} />
        )}
        <Kb.Box2 direction="vertical" fullHeight={true} style={styles.conversation}>
          <Conversation navigation={props.navigation} route={props.route as any} />
        </Kb.Box2>
        {infoPanelShowing ? (
          <Kb.Box2 direction="vertical" fullHeight={true} style={styles.infoPanel}>
            <InfoPanel conversationIDKey={conversationIDKey} />
          </Kb.Box2>
        ) : null}
      </Kb.Box2>
    </Kb.KeyboardAvoidingView2>
  )
}

export const getOptions = ({navigation, route}) => {
  if (Styles.isTablet) {
    return {
      headerLeft: null,
      headerLeftContainerStyle: {maxWidth: 0},
      headerRight: null,
      headerRightContainerStyle: {maxWidth: 0},
      headerStyle: {},
      headerTitle: () => (
        <Common.TabletWrapper>
          <Header navigation={navigation} route={route} />
        </Common.TabletWrapper>
      ),
      headerTitleContainerStyle: {},
    }
  } else {
    return {headerTitle: () => <Header navigation={navigation} route={route} />}
  }
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      container: {position: 'relative'},
      conversation: {flexGrow: 1},
      infoPanel: {
        backgroundColor: Styles.globalColors.white,
        bottom: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: 320,
      },
    } as const)
)

const Memoed = React.memo(InboxAndConversation)
Container.hoistNonReactStatic(Memoed, InboxAndConversation)
export default Memoed
