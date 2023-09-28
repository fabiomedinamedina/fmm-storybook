import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  
  /**
   * Put the text capitalize all 
   */
  allCaps?: boolean;

  /**
   * Put the class to change the color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary" ;

  /**
   * Color the text
   */
  fontColor?: string;


  /**
   * Backgroun color label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  color,
  allCaps = true,
  fontColor = '',
  backgroundColor = 'transparent'
}:Props) => {
  return (
    <span
      className={`${ size } ${ color }`}
      style={{color: fontColor, backgroundColor}}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  );
};
