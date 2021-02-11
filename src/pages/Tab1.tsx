import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import React, { useState, useEffect } from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButton, IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonModal,
  IonSearchbar } from '@ionic/react';
export const SEARCH = [
  {
    id: "s1",
    title: "cariño",
    detail:
      "1.	canım (sevgilim), hayatım (hitap), canan, tatlım, sevgili 2.	şefkat, sevecenlik",
    page: "",
  },
  {
    id: "s2",
    title: "cariñoso",
    detail:
      "müşfik, şefkatli, sevgi dolu, sevecen",
    page: "",
  },
  {
    id: "s3",
    title: "carnet",
    detail:
      "nüfus cüzdanı, kimlik, hüviyet cüzdanı, paso, kart",
    page: "",
  },
  {
    id: "s4",
    title: "leche",
    detail:
      "süt",
    page: "",
  },
  {
    id: "s5",
    title: "gato",
    detail:
      "kedi",
    page: "",
  },
  {
    id: "s6",
    title: "gatito",
    detail:
      "kedi yavrusu",
    page: "",
  },
  {
    id: "s7",
    title: "ciudad",
    detail:
      "şehir",
    page: "",
  },
];

export const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState(SEARCH);

  useEffect(() => {
    if (searchText === '') {
      setResults(SEARCH);
    } else {
      setResults(SEARCH.filter(item => item.title.toLowerCase().indexOf(searchText) > -1));
    }
  }, [searchText]);
  // const shouldShow = item.title.toLowerCase().indexOf(searchText) > -1;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ara</IonTitle>
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {results.map((search) =>  (
              <IonCol
                size="12"
                size-xs="12"
                size-sm="6"
                size-md="4"
                size-lg="4"
                key={search.id}
              >
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{search.title}</IonCardTitle>
                    <IonCardSubtitle>Sector</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>{search.detail}</IonCardContent>
                  <IonFooter className="ion-text-right">
                  </IonFooter>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
