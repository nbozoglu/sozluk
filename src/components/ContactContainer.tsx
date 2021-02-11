import './ContactContainer.css';
import { ellipse, square, triangle, bookOutline, chatbubbleOutline, informationOutline } from 'ionicons/icons';
interface ContainerProps {
  name: string;
}

const ContactContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <p><a target="_blank" rel="noopener noreferrer" href="mailto:test@test.com">{name}</a></p>
    </div>

  );
};

export default ContactContainer;
