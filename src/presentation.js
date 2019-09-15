// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Layout,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableItem,
  TableHeaderItem,
  Link,
  List,
  Image,
  Notes,
  Slide,
  Text
} from 'spectacle';

import { Flex } from './tags';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'midnightblue',
    secondary: 'whitesmoke',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const assets = {
  ddiLogo: require('./assets/ddi.svg'),
  udueLogo: require('./assets/udue.svg'),
  setup: require('./assets/setup.png'),
  ikea: require('./assets/ikea.jpg'),
  yeelight: require('./assets/yeelight.jpg'),
  hue: require('./assets/hue.jpg'),
  hueBanner: require('./assets/hueBanner.jpg'),
  hueApp: require('./assets/hueApp.png'),
  hueBridge: require('./assets/hueBridge.png'),
  hueLights: require('./assets/hueLights.png'),
  hueTeardown: require('./assets/hueTeardown.png'),
  hueCommunicationHardware: require('./assets/hueCommunicationHardware.png'),
  hueSchemaHardware: require('./assets/hueSchemaHardware.png'),
  systems: {
    bahn: require('./assets/bahn.gif'),
    zei: require('./assets/zei.gif'),
    controller: require('./assets/controller.gif')
  }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Informatiksysteme aufbereiten
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            Mike Barkmin & Torsten Brinda
          </Text>
          <Flex>
            <Image src={assets.ddiLogo} alt="ddi" width={200} />
            <Image src={assets.udueLogo} alt="udue" width={200} />
          </Flex>
        </Slide>
        <Slide bgImage={assets.setup} bgDarken={0.75} transition={['fade']}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="tertiary">
              Smartlights
            </Heading>
          </Appear>
          <Appear fid="2">
            <Flex>
              <Image
                style={{ border: '10px solid black' }}
                src={assets.ikea}
                width={200}
              />
              <Image
                style={{ border: '10px solid black' }}
                src={assets.hue}
                width={200}
              />
              <Image
                style={{ border: '10px solid black' }}
                src={assets.yeelight}
                width={200}
              />
            </Flex>
          </Appear>
        </Slide>
        <Slide bgImage={assets.hueBanner}>
          <Notes>
            <ol>
              <li>Philips Hue wird für diesen Workshop die Vorlage sein</li>
              <li>
                Warum die Arbeit machen Informatiksysteme für den Unterricht
                aufzubereiten.
              </li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>Warum was reales nehmen und das aufbereiten?</li>
              <li>Zum Teil aufwendig einzuarbeiten</li>
              <li>Informatiksysteme aufwendig vorzubereiten</li>
              <li>
                Erfahrung aus dem Seminar. Studierende finde sehr viele
                Anknüpfungspunkte zum Kernlehrplan. Auch zum Beispiel durch
                Fokussierung auf Modellierung oder Auswirkungen auf die
                Gesellschaft.
              </li>
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary">
            Warum?
          </Heading>
          <List>
            <Appear>
              <ListItem>Ich habe Spaß dran</ListItem>
            </Appear>
            <Appear>
              <ListItem>Meine Studierenden haben Spaß dran</ListItem>
            </Appear>
            <Appear>
              <ListItem>Sehr nah an der Lebenswelt</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Sehr viele Kompetenzen können adressiert werden
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Gut portionierbar</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Notes>
            <ol>
              <li>
                Wie komme ich dahin ein Informatiksystem im Unterricht
                einzusetzen?
              </li>
              <li>
                Ideen habe ich viele gehabt. Nur leider braucht man ein
                konrektes Produkt. Man muss es mal gemacht haben.
              </li>
              <li>Informatiksysteme aufwendig vorzubereiten</li>
              <li>
                Quintessenz für die SchülerInnen wichtig um das System zu
                verstehen. Unwichtig zum Beispiel Gruppierung von Lampen,
                Diskomodus usw.
              </li>
              <li />
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary">
            Wie vorbereiten?
          </Heading>
          <List>
            <Appear>
              <ListItem>Wie Funktionsweise analysieren?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wie Quintessenz herausarbeiten?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wie Hardware/Software auswählen?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wie im Unterricht integrieren?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>
                Analyse eines Informatiksystems angelehnt an das Modell von Peer
                Stechert zum Kompetenzenerweb von SchülerInnen im Bezug auf
                Informatiksysteme
              </li>
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary">
            Wie Funktionsweise analysieren?
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>Sichtbares Verhalten</TableHeaderItem>
                  <TableHeaderItem>Innere Struktur</TableHeaderItem>
                  <TableHeaderItem>Implemen- tierung</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>
                    <Appear>
                      <List>
                        <ListItem textSize={32}>Black-Box</ListItem>
                        <ListItem textSize={32}>Funktionen</ListItem>
                        <ListItem textSize={32}>Zustände</ListItem>
                      </List>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear>
                      <List>
                        <ListItem textSize={32}>White-Box</ListItem>
                        <ListItem textSize={32}>Komponenten</ListItem>
                      </List>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear>
                      <List>
                        <ListItem textSize={32}>Algorithmen</ListItem>
                        <ListItem textSize={32}>Datenstruktur</ListItem>
                        <ListItem textSize={32}>Klassen</ListItem>
                      </List>
                    </Appear>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Link
            href="https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/3738/file/cid02.pdf"
            textColor="secondary"
            textSize={16}
          >
            Nach Peer Stechert 2009
          </Link>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" caps>
            Sichtbares Verhalten
          </Heading>
          <Flex>
            <Image
              style={{ border: '10px solid black' }}
              src={assets.hueApp}
              width={300}
            />
            <Image
              style={{ border: '10px solid black' }}
              src={assets.hueBridge}
              width={300}
            />
            <Image
              style={{ border: '10px solid black' }}
              src={assets.hueLights}
              width={300}
            />
          </Flex>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" caps>
            Innere Struktur
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>
                Hue Dokumentation gibt Aufschluss über die einzelnen Komponenten
                des Systems
              </li>
              <li>Apps. Alles was von der Hue API gebraucht macht.</li>
              <li>
                Bridge. Ermöglicht die Kommunikation zwischen den Glühbirnen und
                dem Portal.
              </li>
              <li>Portal. Kontrolle über die Bridge über das Internet.</li>
              <li>Lights. Glühbirnen erstellen mit ZigBee ein MeshNetwork.</li>
            </ol>
          </Notes>
          <Link href="https://developers.meethue.com/documentation/how-hue-works">
            <Heading size={5} textColor="tertiary">
              Dokumentation (How Hue works)
            </Heading>
          </Link>
          <Flex>
            <Text textColor="secondary">Apps</Text>
            <Text textColor="secondary">Bridge</Text>
            <Text textColor="secondary">Portal</Text>
            <Text textColor="secondary">Lights</Text>
          </Flex>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Teardown Videos
          </Heading>
          <Image src={assets.hueTeardown} height={500} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Hardware Schematisch
          </Heading>
          <Image src={assets.hueSchemaHardware} height={500} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Hardware Kommunikation
          </Heading>
          <Image src={assets.hueCommunicationHardware} height={500} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" caps>
            Implementierung
          </Heading>
          <List>
            <ListItem textSize={32}>
              Kommuikationsprotokoll (HTTP, ZigBee)?
            </ListItem>
            <ListItem textSize={32}>
              Datenformat für die Kommunikation (JSON, XML)?
            </ListItem>
            <ListItem textSize={32}>Sicherheit (HMAC, SHA, SSL)?</ListItem>
            <ListItem textSize={32}>Betriebssystem?</ListItem>
            <ListItem textSize={32}>Programmiersprache?</ListItem>
            <ListItem textSize={32}>Datenbank?</ListItem>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>Was ist das Ziel meines Unterrichts?</li>
              <li>Was können meine SchülerInnen?</li>
              <li>Womit fühle ich mich sicher?</li>
              <li>In welche Bestandteile kann das System zerlegt werden?</li>
              <li>
                Sind verschiedene Aspekte nicht wichtig oder zu aufwändig?
              </li>
              <li>Wir wollen kein kommerzielles System entwickeln</li>
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary" caps fill>
            Wie Quintessenz heraus- arbeiten?
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>Informatiksysteme brauchen meistens Hardware</li>
              <li>
                Was ist die richtige Hardware für das System, welches ich
                entwickeln möchte?
              </li>
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary" caps fill>
            Wie Hardware auswählen?
          </Heading>
          <List>
            <ListItem>NodeMCU (Arduino)</ListItem>
            <ListItem>Raspberry Pi</ListItem>
            <ListItem>Microbit</ListItem>
            <ListItem>Calliope</ListItem>
            <ListItem>Simulator</ListItem>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>
                Die verschiedenen Umsetzungen sind dank einer gemeinsamen
                Spezifikation austrauchbar.
              </li>
              <li>
                Es kann nur an einem Teilaspekt gearbeitet werden. Wie wir es
                gleich auch machen werden.
              </li>
            </ol>
          </Notes>
          <Heading size={6} textColor="tertiary">
            Verschiedene Umsetzungen Smartlights
          </Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Client</TableHeaderItem>
                <TableHeaderItem>Gateway</TableHeaderItem>
                <TableHeaderItem>Light</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem textSize={32}>AppInventor - Block</TableItem>
                <TableItem textSize={32}>Flask - Python</TableItem>
                <TableItem textSize={32} textColor="tertiary">
                  NodeMCU - C
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={32} textColor="tertiary">
                  Thunkable - Block
                </TableItem>
                <TableItem textSize={32}>Spark - Java</TableItem>
                <TableItem textSize={32}>RPi - Python</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={32}>(Android SDK - Java)</TableItem>
                <TableItem textSize={32} textColor="tertiary">
                  NodeRED - Block
                </TableItem>
                <TableItem textSize={32}>RPi - Java</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={32}>(Swing - Java)</TableItem>
                <TableItem />
                <TableItem textSize={32} textColor="tertiary">
                  Simulator
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={32}>(Web - Javascript)</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide>
          <Notes>
            <ol>
              <li>45 min</li>
            </ol>
          </Notes>
          <Heading size={4} textColor="tertiary" caps>
            Ausprobierphase
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" fill caps>
            Weitere Informatiksysteme
          </Heading>
        </Slide>
        <Slide bgImage={assets.systems.zei}>
          <Link
            textColor="secondary"
            href="https://mahara.uni-due.de/view/view.php?t=IvLGl7zFwV4Z8AJYRqNo"
          >
            <Heading size={4} textColor="secondary" fill caps>
              Zei° Time-Tracking
            </Heading>
            🔗 Dokumentation
          </Link>
        </Slide>
        <Slide bgImage={assets.systems.bahn}>
          <Link
            textColor="secondary"
            href="https://mahara.uni-due.de/view/view.php?t=5Tvj4mI3B0hYrOdcGsiU"
          >
            <Heading size={4} textColor="secondary" fill caps>
              Wann kommt die Bahn?
            </Heading>
            🔗 Dokumentation
          </Link>
        </Slide>
        <Slide bgImage={assets.systems.controller}>
          <Link
            textColor="secondary"
            href="https://mahara.uni-due.de/view/view.php?t=IJ4nF6kcXWUAoaKPV9Tf"
          >
            <Heading size={4} textColor="secondary" fill caps>
              Game-Controler
            </Heading>
            🔗 Dokumentation
          </Link>
        </Slide>
        <Slide>
          <Heading fill caps>
            The End!
          </Heading>
          <Link
            textColor="secondary"
            href="https://github.com/mikebarkmin/smartlights"
          >
            🔗 Smartlights Quelltext
          </Link>
          <br />
          <Link textColor="secondary" href="https://github.com/mikebarkmin/">
            🔗 Github Profil
          </Link>
          <br />
          <Link textColor="secondary" href="https://udue.de/mba">
            🔗 Universitäts Profil
          </Link>
        </Slide>
      </Deck>
    );
  }
}
