import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import ReadWritePage from '../pages/embed/chat/readwrite/index';
import { ChatMessage } from '../interfaces/chat-message.model';
import {
  chatMessagesAtom,
  currentUserAtom,
  clientConfigStateAtom,
} from '../components/stores/ClientConfigStore';
import { ClientConfig } from '../interfaces/client-config.model';

export default {
  title: 'owncast/Chat/Embeds/Read-write chat',
  component: ReadWritePage,
  parameters: {
    chromatic: { diffThreshold: 0.8 },
  },
} as ComponentMeta<typeof ReadWritePage>;

const testMessages =
  '[{"type":"CHAT","id":"wY-MEXwnR","timestamp":"2022-04-28T20:30:27.001762726Z","user":{"id":"h_5GQ6E7R","displayName":"UserDisplayName42","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"this is a test message"},{"type":"CHAT","id":"VhLGEXwnR","timestamp":"2022-04-28T20:30:28.806999545Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Hit 3"},{"type":"CHAT","id":"GguMEuw7R","timestamp":"2022-04-28T20:30:34.500150601Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Jkjk"},{"type":"CHAT","id":"y_-VEXwnR","timestamp":"2022-04-28T20:31:32.695583044Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"I\u0026#39;m doing alright. How about you Hatnix?"},{"type":"CHAT","id":"qAaKEuwng","timestamp":"2022-04-28T20:34:16.22275314Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Oh shiet I didn\u0026#39;t think you would kill him"},{"type":"CHAT","id":"8wUFEuwnR","timestamp":"2022-04-28T20:34:21.624898714Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Hahaha, ruthless"},{"type":"CHAT","id":"onYcPuQnR","timestamp":"2022-04-28T20:34:50.671024312Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"I\u0026#39;ve never played it before"},{"type":"CHAT","id":"kORyEXQ7R","timestamp":"2022-04-28T20:40:29.761977233Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"brb real quick"},{"type":"CHAT","id":"F3DvsuQ7g","timestamp":"2022-04-28T20:50:29.451341783Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"I\u0026#39;m back"},{"type":"CHAT","id":"AH2vsXwnR","timestamp":"2022-04-28T20:50:33.872156152Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Whoa what happened here?"},{"type":"CHAT","id":"xGkOsuw7R","timestamp":"2022-04-28T20:50:53.202147658Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Your dwarf was half naked."},{"type":"CHAT","id":"opIdsuw7g","timestamp":"2022-04-28T20:50:59.631595947Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"lol"},{"type":"CHAT","id":"JpwdsuQnR","timestamp":"2022-04-28T20:51:18.065535459Z","user":{"id":"vbh9gtPng","displayName":"𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","displayColor":276,"createdAt":"2022-03-16T21:02:32.009965702Z","previousNames":["goth-volhard","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"],"nameChangedAt":"2022-04-14T21:51:50.97992512Z","scopes":[""]},"body":"evening did i just see you running around in... nothing"},{"type":"CHAT","id":"R4WKsXw7R","timestamp":"2022-04-28T20:51:28.064914803Z","user":{"id":"vbh9gtPng","displayName":"𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","displayColor":276,"createdAt":"2022-03-16T21:02:32.009965702Z","previousNames":["goth-volhard","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"],"nameChangedAt":"2022-04-14T21:51:50.97992512Z","scopes":[""]},"body":"^^"},{"type":"CHAT","id":"g-PKyXw7g","timestamp":"2022-04-28T20:51:47.936500772Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"Lol Starfarer, so my eyes didnt deceive me."},{"type":"CHAT","id":"fV8Ksuw7R","timestamp":"2022-04-28T20:51:49.588744112Z","user":{"id":"h_5GQ6E7R","displayName":"EliteMooseTaskForce","displayColor":329,"createdAt":"2022-03-24T03:52:37.966584694Z","previousNames":["gifted-nobel","EliteMooseTaskForce"],"nameChangedAt":"2022-04-26T23:56:05.531287897Z","scopes":[""]},"body":"hahahaha"},{"type":"CHAT","id":"TaStyuwnR","timestamp":"2022-04-28T20:52:38.127528579Z","user":{"id":"vbh9gtPng","displayName":"𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","displayColor":276,"createdAt":"2022-03-16T21:02:32.009965702Z","previousNames":["goth-volhard","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"],"nameChangedAt":"2022-04-14T21:51:50.97992512Z","scopes":[""]},"body":"lol sounds nice"},{"type":"CHAT","id":"JGposuwng","timestamp":"2022-04-28T20:53:49.329567087Z","user":{"id":"GCa3J9P7R","displayName":"(ghost of)^10  * toudy49","displayColor":147,"createdAt":"2022-03-22T21:49:25.284237821Z","previousNames":["lucid-pike","toudy49","ghost of toudy49","ghost of ghost of toudy49","ghost of ghost of ghost of toudy49","ghost of ghost of ghost of ghost of toudy49","ghost of ghost of ghost of ghost of ghost of toudy49","ghost ofghost of ghost of ghost of ghost of ghost of toudy49","ghostof ghost of ghost of ghost of ghost of ghost of toudy49","(ghost of)^6  * toudy49","(ghost of)^7  * toudy49","(ghost of)^8  * toudy49","(ghost of)^9  * toudy49","(ghost of)^10  * toudy49"],"nameChangedAt":"2022-04-11T21:01:19.938445828Z","scopes":[""]},"body":"!hydrate"},{"type":"CHAT","id":"T4tTsuwng","timestamp":"2022-04-28T20:53:49.391636551Z","user":{"id":"fKINHKpnR","displayName":"hatnixbot","displayColor":325,"createdAt":"2021-11-24T08:11:32Z","previousNames":["hatnixbot"],"scopes":["CAN_SEND_SYSTEM_MESSAGES","CAN_SEND_MESSAGES","HAS_ADMIN_ACCESS"]},"body":"test 123"},{"type":"CHAT","id":"wUJTsuw7R","timestamp":"2022-04-28T20:53:54.073218761Z","user":{"id":"GCa3J9P7R","displayName":"(ghost of)^10  * toudy49","displayColor":147,"createdAt":"2022-03-22T21:49:25.284237821Z","previousNames":["lucid-pike","toudy49","ghost of toudy49","ghost of ghost of toudy49","ghost of ghost of ghost of toudy49","ghost of ghost of ghost of ghost of toudy49","ghost of ghost of ghost of ghost of ghost of toudy49","ghost ofghost of ghost of ghost of ghost of ghost of toudy49","ghostof ghost of ghost of ghost of ghost of ghost of toudy49","(ghost of)^6  * toudy49","(ghost of)^7  * toudy49","(ghost of)^8  * toudy49","(ghost of)^9  * toudy49","(ghost of)^10  * toudy49"],"nameChangedAt":"2022-04-11T21:01:19.938445828Z","scopes":[""]},"body":"!stretch"},{"type":"CHAT","id":"S_Joyuw7R","timestamp":"2022-04-28T20:53:54.119778013Z","user":{"id":"fKINHKpnR","displayName":"hatnixbot","displayColor":325,"createdAt":"2021-11-24T08:11:32Z","previousNames":["hatnixbot"],"scopes":["CAN_SEND_SYSTEM_MESSAGES","CAN_SEND_MESSAGES","HAS_ADMIN_ACCESS"]},"body":"blah blah"},{"type":"CHAT","id":"MtYTyXwnR","timestamp":"2022-04-28T20:53:57.796985761Z","user":{"id":"vbh9gtPng","displayName":"𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","displayColor":276,"createdAt":"2022-03-16T21:02:32.009965702Z","previousNames":["goth-volhard","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™","𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™","𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"],"nameChangedAt":"2022-04-14T21:51:50.97992512Z","scopes":[""]},"body":"heyy toudy"}]';
const messages: ChatMessage[] = JSON.parse(testMessages);

const Page = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const setMessages = useSetRecoilState(chatMessagesAtom);
  const setClientConfig = useSetRecoilState<ClientConfig>(clientConfigStateAtom);

  const fakeConfig: ClientConfig = {
    chatDisabled: false,
    name: 'Fake Owncast Server',
    summary: '',
    logo: '',
    tags: [],
    version: '',
    nsfw: false,
    extraPageContent: '',
    socialHandles: [],
    externalActions: [],
    customStyles: '',
    maxSocketPayloadSize: 0,
    federation: undefined,
    notifications: undefined,
    authentication: undefined,
    appearanceVariables: undefined,
  };

  useEffect(() => {
    setMessages(messages);
    setCurrentUser({
      ...currentUser,
      displayName: 'fake-chat-user',
    });

    setClientConfig(fakeConfig);
  }, []);

  return <ReadWritePage />;
};

const Template: ComponentStory<typeof ReadWritePage> = () => (
  <RecoilRoot>
    <Page />
  </RecoilRoot>
);

export const Example = Template.bind({});
Example.args = {};
