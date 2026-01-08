interface CTAButtonProps {
  children: React.ReactNode;
}

export default function CTAButton({ children }: CTAButtonProps) {
  return <button className="cta-btn">{children}</button>;
}
