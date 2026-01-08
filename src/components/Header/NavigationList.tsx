import NavigationItem from './NavigatonItem';
import CTAButton from '../Buttons/CTAButton';

export default function NavigationList() {
  return (
    <ul className="nav-list">
      <NavigationItem>About</NavigationItem>
      <NavigationItem>Skills</NavigationItem>
      <NavigationItem>Projects</NavigationItem>
      <CTAButton>Contact</CTAButton>
    </ul>
  );
}
