import logoImage from '../assets/GL Tech Solution logo.jpeg';

export default function Logo({ className = "h-10 w-10" }) {
  return (
    <img
      src={logoImage}
      alt="GL Tech Solutions logo"
      className={`${className} object-contain`}
    />
  );
}
