import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ContactContainer from '../components/ContactContainer';

import './Tab2.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Tab2: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large"> ñ </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <img src="../../assets/madrid2.png" />
          <h2>¡Hola!</h2>
          <p>Bu sözlük uygulaması minik Nermin için yazıldı.</p>
        </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab2;
