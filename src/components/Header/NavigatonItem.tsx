interface NavigationItemProps {
  children: React.ReactNode;
}

export default function NavigationItem({ children }: NavigationItemProps) {
  return (
    <li>
      <a href="#" className="nav-item">
        {children}
      </a>
    </li>
  );
}
