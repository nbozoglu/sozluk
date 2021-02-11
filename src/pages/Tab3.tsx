import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonTextarea, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import { ellipse, square, triangle, bookOutline, mailOpen, informationOutline, mailOutline } from 'ionicons/icons';
import ContactContainer from '../components/ContactContainer';

import './Tab3.css';


const Tab3: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">İletişim</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContactContainer name="E-posta Gönder" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
